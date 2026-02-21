import { useState } from "react";
import { Check } from "lucide-react";

export function JoinBetaPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center max-w-[500px] px-5">
          <div className="w-14 h-14 border-2 border-[#10b981] mx-auto mb-6 flex items-center justify-center">
            <Check size={24} className="text-[#10b981]" />
          </div>
          <h2 className="font-mono text-[24px] text-white mb-3">
            Request received
          </h2>
          <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
            Your beta access request has been logged. We review applications
            weekly. You'll receive an invite link if selected.
          </p>
          <div className="mt-6 font-mono text-[13px] text-[#555]">
            Queue position: #848 — Est. wait: 2-4 weeks
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="max-w-[500px] w-full px-5 py-16">
        <div>
          <span className="font-mono text-[12px] text-[#FF5A00] block mb-4 tracking-wide">
            JOIN BETA
          </span>
          <h1 className="font-mono text-[28px] md:text-[36px] text-white mb-3">
            Request access
          </h1>
          <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-8">
            Boxy is currently in closed beta. We onboard new users weekly
            based on use-case fit and infrastructure capacity.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-mono text-[12px] text-[#666] block mb-2 tracking-wide">
                EMAIL
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#111] border border-[#222] px-4 py-3 font-mono text-[14px] text-white placeholder:text-[#333] focus:border-[#00F0FF] focus:outline-none transition-all"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="font-mono text-[12px] text-[#666] block mb-2 tracking-wide">
                ROLE
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-[#111] border border-[#222] px-4 py-3 font-mono text-[14px] text-white focus:border-[#00F0FF] focus:outline-none transition-all appearance-none"
              >
                <option value="">Select role</option>
                <option value="founder">Founder / CEO</option>
                <option value="engineer">Engineer</option>
                <option value="designer">Designer</option>
                <option value="pm">Product Manager</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="font-mono text-[12px] text-[#666] block mb-2 tracking-wide">
                USE CASE (OPTIONAL)
              </label>
              <textarea
                className="w-full bg-[#111] border border-[#222] px-4 py-3 font-mono text-[14px] text-white placeholder:text-[#333] focus:border-[#00F0FF] focus:outline-none transition-all resize-none h-24"
                placeholder="What problem would Boxy solve for you?"
              />
            </div>

            <button
              type="submit"
              className="w-full font-mono text-[14px] px-6 py-4 bg-[#FF5A00] text-black hover:shadow-[0_0_24px_rgba(255,90,0,0.4)] transition-all"
            >
              Submit request
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between font-mono text-[13px] text-[#555]">
            <span>847 users in beta</span>
            <span>Avg onboard: 3 days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
