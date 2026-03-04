import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { TableOfContents } from "../components/TableOfContents";

const TOC_ITEMS = [
  { id: "why-we-exist", label: "Why we exist", level: 1 as const },
  { id: "what-we-believe", label: "What we believe", level: 1 as const },
  { id: "our-values", label: "Our values", level: 2 as const },
  { id: "how-we-build", label: "How we build", level: 1 as const },
  { id: "hiring", label: "Hiring", level: 1 as const },
];

const VALUES = [
  {
    title: "Privacy is non-negotiable",
    description:
      "User data is sacred. If it can be processed locally, it will be. No exceptions, no compromises, no backdoors.",
  },
  {
    title: "Deterministic over probabilistic",
    description:
      "We value reproducible, testable outcomes over stochastic guesses. Every system we build must be auditable.",
  },
  {
    title: "Builders, not talkers",
    description:
      "We ship weekly. The best argument is working code. Meetings are expensive; pull requests are cheap.",
  },
  {
    title: "Radical transparency",
    description:
      "Our architecture is documented. Our privacy model is verifiable. We believe sunlight is the best debugger.",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="py-16 md:py-24 border-b border-[#222]">
          <span className="font-mono text-[12px] text-[#FF5A00] block mb-4 tracking-wide">
            ABOUT US
          </span>
          <h1 className="font-mono text-[32px] md:text-[44px] text-white leading-[1.1] mb-6">
            Building personal intelligence
            <br />
            <span className="text-[#888]">for everyone.</span>
          </h1>
          <p className="font-mono text-[15px] text-[#888] leading-[1.8] max-w-[800px]">
            We are a team of systems engineers, ML researchers, and product builders who believe AI
            should work for individuals — not the other way around. Founded in late 2024.
          </p>
        </div>

        {/* Main content with TOC */}
        <div className="flex gap-12">
          <TableOfContents items={TOC_ITEMS} />

          <div className="flex-1 min-w-0">
            {/* ============ WHY WE EXIST ============ */}
            <div id="why-we-exist" className="py-16 border-b border-[#1a1a1a]">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-8">Why we exist</h2>
              <div className="max-w-[800px]">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  The current generation of AI assistants is reactive. They wait for prompts,
                  require you to context-switch, and add yet another tool to an already overloaded
                  digital stack.
                </p>
                <p className="font-mono text-[15px] text-[#888] leading-[1.9]">
                  We believe the next paradigm is not conversational — it is anticipatory. An AI
                  that truly understands you observes your digital context and synthesizes
                  actionable proposals before you even recognize the need.
                </p>
              </div>
            </div>

            {/* ============ WHAT WE BELIEVE ============ */}
            <div id="what-we-believe" className="py-16 border-b border-[#1a1a1a]">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-8">
                What we believe
              </h2>
              <div className="max-w-[800px] mb-10">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9]">
                  We believe in artificial personal intelligence — AI that is narrow in scope but
                  deep in understanding. For the first time, individuals can aggregate their own
                  data and leverage intelligence for themselves, rather than relying on platforms to
                  provide value.
                </p>
              </div>

              <div id="our-values" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {VALUES.map((value) => (
                  <div
                    key={value.title}
                    className="border border-[#1a1a1a] p-6 hover:border-[#333] transition-colors"
                  >
                    <h3 className="font-mono text-[15px] text-white mb-3">{value.title}</h3>
                    <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ============ HOW WE BUILD ============ */}
            <div id="how-we-build" className="py-16 border-b border-[#1a1a1a]">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-8">How we build</h2>
              <div className="max-w-[800px] mb-10">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  Boxy is built on three pillars:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <div className="border border-[#FF5A00]/20 bg-[#FF5A00]/5 p-6">
                  <span className="font-mono text-[14px] text-[#FF5A00] block mb-3">
                    01 — Local-first processing
                  </span>
                  <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
                    Everything that can happen inside the Box, happens inside the Box. NER,
                    obfuscation, and embedding all run locally. Raw data never leaves your machine.
                  </p>
                </div>
                <div className="border border-[#00F0FF]/20 bg-[#00F0FF]/5 p-6">
                  <span className="font-mono text-[14px] text-[#00F0FF] block mb-3">
                    02 — Deterministic agents
                  </span>
                  <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
                    Our agents follow pre-trained manifests. Every action is recorded, reproducible,
                    and auditable. No hallucination and no guessing.
                  </p>
                </div>
                <div className="border border-[#10b981]/20 bg-[#10b981]/5 p-6">
                  <span className="font-mono text-[14px] text-[#10b981] block mb-3">
                    03 — Privacy-safe inference
                  </span>
                  <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
                    When cloud computation is necessary, we operate on obfuscated data only. The
                    math works without the metadata.
                  </p>
                </div>
              </div>
            </div>

            {/* ============ HIRING CTA ============ */}
            <div id="hiring" className="py-16">
              <div className="border border-[#222] p-8 md:p-12 text-center">
                <h3 className="font-mono text-[20px] md:text-[24px] text-white mb-3">
                  Want to build with us?
                </h3>
                <p className="font-mono text-[14px] text-[#888] mb-6">
                  We are hiring across engineering, ML, and design.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/hiring"
                    className="inline-flex items-center gap-2 font-mono text-[14px] px-6 py-3 bg-[#FF5A00] text-black hover:shadow-[0_0_16px_rgba(255,90,0,0.4)] transition-all"
                  >
                    View Open Positions
                    <ArrowRight size={16} />
                  </Link>
                  <div className="relative group inline-block">
                    <span className="font-mono text-[14px] px-6 py-3 bg-[#FF5A00]/20 text-[#FF5A00]/60 cursor-default select-none inline-block">
                      Join the Beta
                    </span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-[#1a1a1a] border border-[#333] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                      <span className="font-mono text-[11px] text-[#888]">Reopening soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
