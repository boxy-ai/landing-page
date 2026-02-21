import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: "approach",
        lazy: async () => {
          const { ApproachPage } = await import("./pages/ApproachPage");
          return { Component: ApproachPage };
        },
      },
      {
        path: "privacy-security",
        lazy: async () => {
          const { PrivacySecurityPage } = await import("./pages/PrivacySecurityPage");
          return { Component: PrivacySecurityPage };
        },
      },
      {
        path: "unix-philosophy",
        lazy: async () => {
          const { UnixPhilosophyPage } = await import("./pages/UnixPhilosophyPage");
          return { Component: UnixPhilosophyPage };
        },
      },
      {
        path: "about",
        lazy: async () => {
          const { AboutPage } = await import("./pages/AboutPage");
          return { Component: AboutPage };
        },
      },
      {
        path: "hiring",
        lazy: async () => {
          const { HiringPage } = await import("./pages/HiringPage");
          return { Component: HiringPage };
        },
      },
      {
        path: "join-beta",
        lazy: async () => {
          const { JoinBetaPage } = await import("./pages/JoinBetaPage");
          return { Component: JoinBetaPage };
        },
      },
      {
        path: "*",
        lazy: async () => {
          const { NotFound } = await import("./pages/NotFound");
          return { Component: NotFound };
        },
      },
    ],
  },
]);
