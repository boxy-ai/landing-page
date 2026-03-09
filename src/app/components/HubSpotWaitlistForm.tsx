import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { HUBSPOT_WAITLIST_FORM, isHubSpotWaitlistConfigured } from "../hubspotWaitlist";

const FORM_RENDER_TIMEOUT_MS = 6000;

type FormStatus = "loading" | "ready" | "error" | "submitted";

interface HubSpotFormEventDetail {
  formId?: string;
  instanceId?: string;
}

function getInitialStatus(): FormStatus {
  if (typeof window !== "undefined" && window.__BOXY_PRERENDER__) {
    return "loading";
  }

  return isHubSpotWaitlistConfigured() ? "loading" : "error";
}

function getErrorMessage(reason: "unconfigured" | "load" | "render") {
  if (!import.meta.env.DEV) {
    return "The waitlist form is temporarily unavailable. Please try again shortly.";
  }

  if (reason === "unconfigured") {
    return "Waitlist form configuration is missing. Update src/app/hubspotWaitlist.ts with the live portalId, formId, and region.";
  }

  if (reason === "load") {
    return "HubSpot's embed script could not be loaded. Check network access or content-blocking extensions.";
  }

  return "HubSpot loaded, but the waitlist form did not render. Verify the embed snippet values in src/app/hubspotWaitlist.ts.";
}

function getHubSpotFormScriptSrc() {
  if (HUBSPOT_WAITLIST_FORM.region === "na1") {
    return `https://js.hsforms.net/forms/embed/${HUBSPOT_WAITLIST_FORM.portalId}.js`;
  }

  return `https://js-${HUBSPOT_WAITLIST_FORM.region}.hsforms.net/forms/embed/${HUBSPOT_WAITLIST_FORM.portalId}.js`;
}

function loadHubSpotFormsScript(scriptSrc: string) {
  return new Promise<HTMLScriptElement>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.dataset.hubspotForms = "true";
    script.dataset.hubspotFormsSrc = scriptSrc;
    script.addEventListener("load", () => resolve(script), { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error("Failed to load the HubSpot forms script.")),
      { once: true },
    );
    document.head.append(script);
  });
}

function WaitlistLoadingState() {
  return (
    <div className="space-y-5" aria-hidden="true">
      <div className="h-3 w-28 bg-[#1a1a1a] animate-pulse" />
      <div className="h-12 w-full bg-[#111] animate-pulse" />
      <div className="h-3 w-20 bg-[#1a1a1a] animate-pulse" />
      <div className="h-12 w-full bg-[#111] animate-pulse" />
      <div className="h-3 w-36 bg-[#1a1a1a] animate-pulse" />
      <div className="h-24 w-full bg-[#111] animate-pulse" />
      <div className="h-12 w-full bg-[#FF5A00]/20 animate-pulse" />
      <p className="font-mono text-[12px] text-[#555]">Loading waitlist form...</p>
    </div>
  );
}

function WaitlistErrorState({ message }: { message: string }) {
  return (
    <div className="border border-[#222] bg-[#0d0d0d] p-6 md:p-8">
      <div className="w-14 h-14 border-2 border-[#FF5A00] mb-6 flex items-center justify-center">
        <span className="font-mono text-[20px] text-[#FF5A00]">!</span>
      </div>
      <h2 className="font-mono text-[24px] text-white mb-3">Waitlist unavailable</h2>
      <p className="font-mono text-[14px] text-[#888] leading-[1.8]">{message}</p>
    </div>
  );
}

function WaitlistSuccessState() {
  return (
    <div className="border border-[#222] bg-[#0d0d0d] p-6 md:p-8 text-center">
      <div className="w-14 h-14 border-2 border-[#10b981] mx-auto mb-6 flex items-center justify-center">
        <Check size={24} className="text-[#10b981]" />
      </div>
      <h2 className="font-mono text-[24px] text-white mb-3">Request received</h2>
      <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
        Thanks for joining the Boxy waitlist. We review submissions in weekly batches and will reach
        out as new beta capacity opens.
      </p>
    </div>
  );
}

export function HubSpotWaitlistForm() {
  const [status, setStatus] = useState<FormStatus>(() => getInitialStatus());
  const [errorMessage, setErrorMessage] = useState<string | null>(() =>
    isHubSpotWaitlistConfigured() ? null : getErrorMessage("unconfigured"),
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const renderTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.__BOXY_PRERENDER__) {
      return;
    }

    if (!isHubSpotWaitlistConfigured()) {
      setStatus("error");
      setErrorMessage(getErrorMessage("unconfigured"));
      return;
    }

    let cancelled = false;
    let injectedScript: HTMLScriptElement | null = null;
    const containerElement = containerRef.current;

    const clearRenderTimeout = () => {
      if (renderTimeoutRef.current !== null) {
        window.clearTimeout(renderTimeoutRef.current);
        renderTimeoutRef.current = null;
      }
    };

    const handleReady = (event: Event) => {
      const detail = (event as CustomEvent<HubSpotFormEventDetail>).detail;
      if (detail?.formId !== HUBSPOT_WAITLIST_FORM.formId) {
        return;
      }

      clearRenderTimeout();
      if (!cancelled) {
        setStatus("ready");
      }
    };

    const handleSubmissionSuccess = (event: Event) => {
      const detail = (event as CustomEvent<HubSpotFormEventDetail>).detail;
      if (detail?.formId !== HUBSPOT_WAITLIST_FORM.formId) {
        return;
      }

      clearRenderTimeout();
      if (!cancelled) {
        setStatus("submitted");
      }
    };

    window.addEventListener("hs-form-event:on-ready", handleReady as EventListener);
    window.addEventListener(
      "hs-form-event:on-submission:success",
      handleSubmissionSuccess as EventListener,
    );

    setStatus("loading");
    setErrorMessage(null);

    const createForm = async () => {
      try {
        if (!containerElement) {
          throw new Error("HubSpot form container is unavailable.");
        }

        const scriptSrc = getHubSpotFormScriptSrc();
        injectedScript = await loadHubSpotFormsScript(scriptSrc);
        if (cancelled) {
          return;
        }

        renderTimeoutRef.current = window.setTimeout(() => {
          if (cancelled) {
            return;
          }

          const hasRenderedForm = Boolean(
            containerElement.querySelector("iframe, form, [data-hs-forms-root]"),
          );
          if (!hasRenderedForm) {
            setStatus("error");
            setErrorMessage(getErrorMessage("render"));
          }
        }, FORM_RENDER_TIMEOUT_MS);
      } catch {
        if (cancelled) {
          return;
        }

        setStatus("error");
        setErrorMessage(getErrorMessage("load"));
      }
    };

    void createForm();

    return () => {
      cancelled = true;
      clearRenderTimeout();
      window.removeEventListener("hs-form-event:on-ready", handleReady as EventListener);
      window.removeEventListener(
        "hs-form-event:on-submission:success",
        handleSubmissionSuccess as EventListener,
      );
      if (injectedScript?.parentNode) {
        injectedScript.parentNode.removeChild(injectedScript);
      }
      if (containerElement) {
        containerElement.innerHTML = "";
      }
    };
  }, []);

  if (status === "submitted") {
    return <WaitlistSuccessState />;
  }

  if (status === "error") {
    return <WaitlistErrorState message={errorMessage ?? getErrorMessage("render")} />;
  }

  return (
    <div className="border border-[#222] bg-[#0d0d0d] p-6 md:p-8">
      <div className="hubspot-waitlist relative min-h-[420px]" aria-busy={status === "loading"}>
        {status === "loading" ? (
          <div className="absolute inset-0 z-10 pointer-events-none">
            <WaitlistLoadingState />
          </div>
        ) : null}
        <div
          ref={containerRef}
          className={status === "loading" ? "opacity-0" : "opacity-100 transition-opacity"}
        >
          <div
            className="hs-form-frame"
            data-region={HUBSPOT_WAITLIST_FORM.region}
            data-form-id={HUBSPOT_WAITLIST_FORM.formId}
            data-portal-id={HUBSPOT_WAITLIST_FORM.portalId}
          />
        </div>
      </div>
    </div>
  );
}
