import { Link } from "react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";

const OPEN_ROLES = [
  {
    title: "Software Engineer",
    team: "Engineering",
    locations: ["Remote", "Singapore"],
    type: "Full-time",
    salary: "$100,000+ / year + Stock Options",
    description:
      "We need someone who thrives in ambiguity and moves fast without waiting for a spec. You will be one of the earliest engineers shaping the entire technical foundation — from architecture decisions to deployment pipelines — in a codebase where every line matters and every week ships something real. Every engineer on our team gets a maxed-out AI subscription — we provide the best tools so you can do the best work.",
    whatYouDo: [
      "Build and ship product continuously",
      "Own features end-to-end (0 → 1 → scale)",
      "Make fast, pragmatic technical decisions",
      "Work closely with a small, dedicated team to define product and engineering culture",
    ],
    whoYouAre: [
      "B.S. in CS, Math, or related field (or equivalent ability)",
      "Strong fundamentals and product instinct",
      "You have built and shipped real things",
      "AI-native — you deeply use AI products, understand the rapidly evolving AI ecosystem, and have fully integrated AI coding tools (Codex, Claude Code, Cursor, etc.) into your workflow",
      "High ownership, ambitious, fast-learning, low-ego, and genuinely kind",
    ],
  },
  {
    title: "Founding Growth Marketer",
    team: "Marketing",
    locations: ["Remote", "San Francisco"],
    type: "Full-time",
    salary: "$65,000+ / year + Stock Options",
    description:
      "This is a ground-floor role for someone who wants to own the entire growth function from day one. You will report directly to the CEO, have budget to hire agencies and freelancers, and operate with full autonomy to build the playbook that turns early traction into a movement.",
    whatYouDo: [
      "Design and execute viral content strategies showcasing Boxy's proactive wins across X, LinkedIn, and TikTok",
      "Identify and partner with high-signal prosumer influencers to drive massive Product Hunt and waitlist surges",
      "Build a repeatable, technical marketing stack that tracks users from first touch to daily active user",
      "Recruit, manage, and scale a growth team — including agencies, freelancers, and eventually full-time hires — as the function matures",
    ],
    whoYouAre: [
      "Bachelor's degree in Marketing, Communications, Business, or a related field",
      "Bold and ambitious — you have a campaign idea that would make most people nervous, and you cannot wait to pitch it",
      "High technical literacy — you understand how AI products work and can set up tracking, automation, and attribution without hand-holding",
      "Creator at heart — you know how to make deeply technical products feel indispensable and exciting to a mainstream audience",
      "Obsessed with speed-to-market and high-performance execution over process and polish",
      "You want to build your personal brand as the person who brought proactive AI into everyone's life — with total autonomy and a path to Head of Growth",
    ],
  },
];

export function HiringPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="py-16 md:py-24 border-b border-[#222]">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-mono text-[13px] text-[#555] hover:text-[#00F0FF] transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            About Us
          </Link>
          <span className="font-mono text-[12px] text-[#FF5A00] block mb-4 tracking-wide">
            CAREERS
          </span>
          <h1 className="font-mono text-[32px] md:text-[44px] text-white leading-[1.1] mb-6">
            Build the future of
            <br />
            <span className="text-[#888]">personal intelligence.</span>
          </h1>
          <p className="font-mono text-[15px] text-[#888] leading-[1.8] max-w-[700px]">
            Backed by tier-one VCs, we are a small, focused team with a remote-first culture. We are
            looking for exceptional people who share our belief that AI should be private,
            deterministic, and genuinely useful.
          </p>
        </div>

        {/* Culture */}
        <div className="py-12 border-b border-[#1a1a1a]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#1a1a1a] p-6">
              <span className="font-mono text-[14px] text-[#FF5A00] block mb-3">Remote-first</span>
              <p className="font-mono text-[13px] text-[#888] leading-[1.8]">
                Work from anywhere. We optimize for async communication and deep work over
                co-location.
              </p>
            </div>
            <div className="border border-[#1a1a1a] p-6">
              <span className="font-mono text-[14px] text-[#00F0FF] block mb-3">Ship weekly</span>
              <p className="font-mono text-[13px] text-[#888] leading-[1.8]">
                The best argument is working code. Small team, fast iterations, and real impact
                every week.
              </p>
            </div>
            <div className="border border-[#1a1a1a] p-6">
              <span className="font-mono text-[14px] text-[#10b981] block mb-3">
                Mission-driven
              </span>
              <p className="font-mono text-[13px] text-[#888] leading-[1.8]">
                We build personal intelligence that respects user privacy. This is the entire
                product thesis.
              </p>
            </div>
          </div>
        </div>

        {/* Open Roles */}
        <div className="py-16">
          <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-3">Open positions</h2>
          <p className="font-mono text-[14px] text-[#888] mb-10">
            {OPEN_ROLES.length} roles currently open. All positions are remote.
          </p>

          <div className="space-y-4">
            {OPEN_ROLES.map((role) => (
              <details
                key={role.title}
                className="border border-[#1a1a1a] hover:border-[#333] transition-colors group"
              >
                <summary className="px-6 py-5 cursor-pointer list-none">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-mono text-[15px] text-white mb-1">{role.title}</h3>
                      <div className="flex flex-wrap gap-3 font-mono text-[12px] text-[#666]">
                        <span>{role.team}</span>
                        <span className="text-[#333]">/</span>
                        <span>
                          {role.locations.map((location, index) => (
                            <span key={index}>
                              {index > 0 && ", "}
                              {location}
                            </span>
                          ))}
                        </span>
                        <span className="text-[#333]">/</span>
                        <span>{role.type}</span>
                        <span className="text-[#333]">/</span>
                        <span className="text-[#10b981]">{role.salary}</span>
                      </div>
                    </div>
                    <span className="font-mono text-[12px] text-[#555] group-open:text-[#00F0FF] transition-colors shrink-0">
                      View details
                    </span>
                  </div>
                </summary>
                <div className="px-6 pb-6 border-t border-[#1a1a1a]">
                  <p className="font-mono text-[14px] text-[#888] leading-[1.8] mt-5 mb-6 max-w-[700px]">
                    {role.description}
                  </p>

                  <div className="mb-6">
                    <span className="font-mono text-[12px] text-[#666] block mb-3 tracking-wide">
                      WHAT YOU WILL DO
                    </span>
                    <div className="space-y-2">
                      {role.whatYouDo.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 font-mono text-[13px] text-[#888]"
                        >
                          <span className="text-[#FF5A00] mt-0.5 shrink-0">{">"}</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="font-mono text-[12px] text-[#666] block mb-3 tracking-wide">
                      WHO YOU ARE
                    </span>
                    <div className="space-y-2">
                      {role.whoYouAre.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 font-mono text-[13px] text-[#888]"
                        >
                          <span className="text-[#00F0FF] mt-0.5 shrink-0">{">"}</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="mailto:john@boxy-ai.com"
                    className="inline-flex items-center gap-2 font-mono text-[13px] px-5 py-2.5 bg-[#FF5A00] text-black hover:shadow-[0_0_16px_rgba(255,90,0,0.4)] transition-all"
                  >
                    Apply now
                    <ArrowRight size={14} />
                  </a>
                </div>
              </details>
            ))}
          </div>

          {/* General application */}
          <div className="mt-10 border border-[#222] p-8 md:p-12 text-center">
            <h3 className="font-mono text-[20px] md:text-[24px] text-white mb-3">
              Do not see your role listed?
            </h3>
            <p className="font-mono text-[14px] text-[#888] mb-6 max-w-[500px] mx-auto">
              We are always interested in hearing from exceptional people. Send us a note about what
              you would bring to the team.
            </p>
            <a
              href="mailto:john@boxy-ai.com"
              className="inline-flex items-center gap-2 font-mono text-[14px] px-6 py-3 border border-[#333] text-[#888] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all"
            >
              Send a general application
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
