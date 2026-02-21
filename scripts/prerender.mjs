import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import puppeteer from "puppeteer";

const PRERENDER_ROUTES = [
  "/",
  "/approach",
  "/privacy-security",
  "/unix-philosophy",
  "/about",
  "/hiring",
  "/join-beta",
];

const HOST = "127.0.0.1";
const PORT = 4173;
const PREVIEW_ORIGIN = `http://${HOST}:${PORT}`;
const DIST_DIR = path.resolve(process.cwd(), "dist");

function outputPathForRoute(route) {
  if (route === "/") {
    return path.join(DIST_DIR, "index.html");
  }

  return path.join(DIST_DIR, route.replace(/^\//, ""), "index.html");
}

async function waitForServer(origin, timeoutMs = 20000) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const response = await fetch(origin);
      if (response.ok) {
        return;
      }
    } catch {
      // Keep polling until timeout.
    }

    await delay(200);
  }

  throw new Error(`Timed out waiting for preview server at ${origin}`);
}

async function stopPreviewServer(previewProcess) {
  if (!previewProcess || previewProcess.killed) {
    return;
  }

  previewProcess.kill("SIGTERM");
  await delay(200);

  if (!previewProcess.killed) {
    previewProcess.kill("SIGKILL");
  }
}

async function run() {
  const viteBin = path.resolve(process.cwd(), "node_modules", "vite", "bin", "vite.js");
  const previewProcess = spawn(
    process.execPath,
    [viteBin, "preview", "--host", HOST, "--port", String(PORT), "--strictPort"],
    {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  previewProcess.stdout.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  previewProcess.stderr.on("data", (chunk) => {
    process.stderr.write(chunk);
  });

  let browser;

  try {
    await waitForServer(PREVIEW_ORIGIN);

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    for (const route of PRERENDER_ROUTES) {
      const routeUrl = `${PREVIEW_ORIGIN}${route}`;
      await page.goto(routeUrl, { waitUntil: "networkidle0" });
      await page.waitForFunction(() => {
        const root = document.getElementById("root");
        return Boolean(root && root.children.length > 0);
      });
      await delay(100);

      const html = await page.content();
      const outputFile = outputPathForRoute(route);

      mkdirSync(path.dirname(outputFile), { recursive: true });
      writeFileSync(outputFile, `${html}\n`, "utf8");
      console.log(`Prerendered ${route} -> ${path.relative(process.cwd(), outputFile)}`);
    }

    await page.close();
  } finally {
    if (browser) {
      await browser.close();
    }

    await stopPreviewServer(previewProcess);
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
