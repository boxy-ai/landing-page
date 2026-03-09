import { useState } from "react";
import { Check } from "lucide-react";
import { HUBSPOT_WAITLIST_FORM, isHubSpotWaitlistConfigured } from "../hubspotWaitlist";

const HUBSPOT_SUBMIT_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_WAITLIST_FORM.portalId}/${HUBSPOT_WAITLIST_FORM.formId}`;
const GENERIC_SUBMIT_ERROR =
  "We couldn't add you to the waitlist right now. Please try again in a moment.";

type SubmitState = "idle" | "submitting" | "submitted";

interface HubSpotSubmissionError {
  message?: string;
  errorType?: string;
  errors?: Array<{ message?: string; errorType?: string }>;
}

function readCookie(name: string) {
  if (typeof document === "undefined") {
    return null;
  }

  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((entry) => entry.startsWith(`${name}=`));
  if (!cookie) {
    return null;
  }

  return decodeURIComponent(cookie.slice(name.length + 1));
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getHubSpotErrorDetail(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const hubSpotError = payload as HubSpotSubmissionError;
  const firstError = hubSpotError.errors?.find(
    (error) => typeof error.message === "string" || typeof error.errorType === "string",
  );

  return (
    firstError?.message ??
    firstError?.errorType ??
    hubSpotError.message ??
    hubSpotError.errorType ??
    null
  );
}

function getSubmitErrorMessage(detail: string | null) {
  if (!detail) {
    return GENERIC_SUBMIT_ERROR;
  }

  if (!import.meta.env.DEV) {
    return GENERIC_SUBMIT_ERROR;
  }

  const normalizedDetail = detail.toLowerCase();

  if (normalizedDetail.includes("captcha")) {
    return "HubSpot rejected the submission because CAPTCHA is enabled on this form. Disable CAPTCHA for this form or move submission behind a server you control.";
  }

  if (normalizedDetail.includes("required_field")) {
    return "HubSpot still expects required fields this page is not sending. Make firstname, lastname, and email the only required fields on the HubSpot form.";
  }

  if (normalizedDetail.includes("field_not_in_form_definition")) {
    return "HubSpot doesn't recognize firstname, lastname, and/or email on this form. Confirm those exact fields exist on the HubSpot form definition.";
  }

  return `HubSpot rejected the submission: ${detail}`;
}

function WaitlistUnavailable({ message }: { message: string }) {
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
      <h2 className="font-mono text-[24px] text-white mb-3">You&apos;re on the list</h2>
      <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
        Thanks for joining the Boxy waitlist. We review new spots weekly and will reach out when
        there&apos;s concrete beta capacity to offer.
      </p>
    </div>
  );
}

export function HubSpotWaitlistForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isHubSpotWaitlistConfigured()) {
    const message = import.meta.env.DEV
      ? "Waitlist form configuration is missing. Update src/app/hubspotWaitlist.ts with the live portalId and formId."
      : "The waitlist is temporarily unavailable. Please try again shortly.";

    return <WaitlistUnavailable message={message} />;
  }

  if (submitState === "submitted") {
    return <WaitlistSuccessState />;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();

    if (!trimmedFirstName) {
      setErrorMessage("Please enter your first name.");
      return;
    }

    if (!trimmedLastName) {
      setErrorMessage("Please enter your last name.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (honeypot.trim()) {
      setSubmitState("submitted");
      return;
    }

    setSubmitState("submitting");
    setErrorMessage(null);

    const hutk = readCookie("hubspotutk");
    const context = {
      pageName: typeof document !== "undefined" ? document.title : "Boxy waitlist",
      pageUri:
        typeof window !== "undefined" ? window.location.href : "https://boxy-ai.com/join-beta",
      ...(hutk ? { hutk } : {}),
    };

    try {
      const response = await fetch(HUBSPOT_SUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submittedAt: `${Date.now()}`,
          fields: [
            { name: "firstname", value: trimmedFirstName },
            { name: "lastname", value: trimmedLastName },
            { name: "email", value: trimmedEmail },
          ],
          context,
        }),
      });

      let payload: unknown = null;

      try {
        payload = await response.json();
      } catch {
        payload = null;
      }

      if (!response.ok) {
        throw new Error(getHubSpotErrorDetail(payload) ?? "unknown_error");
      }

      setFirstName("");
      setLastName("");
      setEmail("");
      setSubmitState("submitted");
    } catch (error) {
      const detail = error instanceof Error ? error.message : null;
      setSubmitState("idle");
      setErrorMessage(getSubmitErrorMessage(detail));
      if (import.meta.env.DEV) {
        console.error("HubSpot waitlist submission failed", error);
      }
    }
  };

  const isSubmitting = submitState === "submitting";

  return (
    <div className="border border-[#222] bg-[#0d0d0d] p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="waitlist-firstname"
              className="font-mono text-[12px] text-[#666] block mb-2 tracking-wide"
            >
              FIRST NAME
            </label>
            <input
              id="waitlist-firstname"
              type="text"
              autoComplete="given-name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              disabled={isSubmitting}
              className="w-full bg-[#111] border border-[#222] px-4 py-3 font-mono text-[14px] text-white placeholder:text-[#333] focus:border-[#00F0FF] focus:outline-none transition-all disabled:opacity-60"
              placeholder="Ada"
            />
          </div>

          <div>
            <label
              htmlFor="waitlist-lastname"
              className="font-mono text-[12px] text-[#666] block mb-2 tracking-wide"
            >
              LAST NAME
            </label>
            <input
              id="waitlist-lastname"
              type="text"
              autoComplete="family-name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              disabled={isSubmitting}
              className="w-full bg-[#111] border border-[#222] px-4 py-3 font-mono text-[14px] text-white placeholder:text-[#333] focus:border-[#00F0FF] focus:outline-none transition-all disabled:opacity-60"
              placeholder="Lovelace"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="waitlist-email"
            className="font-mono text-[12px] text-[#666] block mb-2 tracking-wide"
          >
            EMAIL
          </label>
          <input
            id="waitlist-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isSubmitting}
            className="w-full bg-[#111] border border-[#222] px-4 py-3 font-mono text-[14px] text-white placeholder:text-[#333] focus:border-[#00F0FF] focus:outline-none transition-all disabled:opacity-60"
            placeholder="you@company.com"
          />
        </div>

        <div
          className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="waitlist-website" className="font-mono text-[12px] text-[#666]">
            Website
          </label>
          <input
            id="waitlist-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        <p className="font-mono text-[12px] text-[#555] leading-[1.8]">
          Just the essentials for now. We&apos;ll only contact you when a beta slot is available.
        </p>

        {errorMessage ? (
          <div className="border border-[#ef4444]/30 bg-[#ef4444]/5 px-4 py-3">
            <p className="font-mono text-[12px] text-[#ef4444] leading-[1.8]">{errorMessage}</p>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full font-mono text-[14px] px-6 py-4 bg-[#FF5A00] text-black hover:shadow-[0_0_24px_rgba(255,90,0,0.4)] transition-all disabled:opacity-70 disabled:hover:shadow-none cursor-pointer"
        >
          {isSubmitting ? "Joining..." : "Join the Waitlist"}
        </button>
      </form>
    </div>
  );
}
