import { HubSpotWaitlistForm } from "../components/HubSpotWaitlistForm";

export function JoinBetaPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-[620px] w-full mx-auto px-5 py-16 md:py-24">
        <span className="font-mono text-[12px] text-[#FF5A00] block mb-4 tracking-wide">
          JOIN BETA
        </span>
        <h1 className="font-mono text-[28px] md:text-[36px] text-white mb-3">Join the waitlist</h1>
        <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-4">
          Boxy is currently in closed beta. Leave your name and email and we&apos;ll reach out as
          new spots open.
        </p>
        <p className="font-mono text-[14px] text-[#666] leading-[1.8] mb-8">
          We review the waitlist in weekly batches and only follow up when there is concrete beta
          capacity to offer.
        </p>

        <HubSpotWaitlistForm />

        <p className="mt-6 font-mono text-[13px] text-[#555] leading-[1.8]">
          No newsletter flood. Just a note when Boxy is ready for you.
        </p>
      </div>
    </div>
  );
}
