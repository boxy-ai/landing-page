import { Link } from "react-router";
import {
  ArrowRight,
  Shield,
  Lock,
  Eye,
  Server,
  FileCheck,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Cpu,
  Cloud,
  Laptop,
  Box,
} from "lucide-react";
import { TableOfContents } from "../components/TableOfContents";

const TOC_ITEMS = [
  { id: "what-privacy-means", label: "What privacy actually means", level: 1 as const },
  { id: "local-obfuscation", label: "Local obfuscation", level: 1 as const },
  { id: "data-flow", label: "How data flows", level: 1 as const },
  { id: "agent-security", label: "Security through agent design", level: 1 as const },
  { id: "core-principles", label: "Core principles", level: 2 as const },
];

const DATA_FLOW = [
  {
    step: "01",
    label: "Data Capture",
    description: "GUI agents extract context from your platforms",
    privacy: "Runs in sandboxed environment. No persistent storage.",
    location: "The Box",
    icon: Laptop,
  },
  {
    step: "02",
    label: "Local NER",
    description: "On-device entity recognition identifies all PII",
    privacy: "Never leaves your machine. <2ms processing.",
    location: "The Box",
    icon: Cpu,
  },
  {
    step: "03",
    label: "Obfuscation",
    description: "All PII replaced with anonymous tokens",
    privacy: "Deterministic masking. Reversible only by you.",
    location: "The Box",
    icon: Lock,
  },
  {
    step: "04",
    label: "Local Embedding",
    description: "Intent encoded as privacy-safe vectors",
    privacy: "Vectors cannot be reverse-engineered to text.",
    location: "The Box",
    icon: Cpu,
  },
  {
    step: "05",
    label: "Cloud Inference",
    description: "Model processes only anonymized context",
    privacy: "Zero raw data exposure. Obfuscated inputs only.",
    location: "Cloud",
    icon: Cloud,
  },
  {
    step: "06",
    label: "Proposal Generation",
    description: "Actionable proposal generated and delivered",
    privacy: "De-anonymized locally. Never stored in cloud.",
    location: "The Box",
    icon: Laptop,
  },
];

const USER_DATA_LINES = [
  "from: john@gmail.com",
  'msg: "Hey, let\'s open a company in SF."',
  "to: sarah@work.com",
  'attachment: "business_plan_v3.pdf"',
  "timestamp: 2026-02-19T14:23:01Z",
  'location: "San Francisco, CA"',
];

const OBFUSCATED_LINES = [
  { text: "from: [USER_A_EMAIL]", changed: true },
  { text: 'msg: "Hey, let\'s open a company in SF."', changed: false },
  { text: "to: [USER_B_EMAIL]", changed: true },
  { text: "attachment: [FILE_HASH_7a3f]", changed: true },
  { text: "timestamp: 2026-02-19T14:23:01Z", changed: false },
  { text: 'location: "San Francisco, CA"', changed: false },
];

export function PrivacySecurityPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="py-16 md:py-24 border-b border-[#222]">
          <span className="font-mono text-[12px] text-[#10b981] block mb-4 tracking-wide">
            PRIVACY & SECURITY
          </span>
          <h1 className="font-mono text-[32px] md:text-[44px] text-white leading-[1.1] mb-6">
            Privacy is the product.
            <br />
            <span className="text-[#888]">Not a feature.</span>
          </h1>
          <p className="font-mono text-[15px] text-[#888] leading-[1.8] max-w-[700px]">
            Most companies treat privacy as a compliance checkbox. At Boxy, privacy is the core
            technical challenge and our primary competitive advantage.
          </p>
        </div>

        {/* Main content with TOC */}
        <div className="flex gap-12">
          <TableOfContents items={TOC_ITEMS} />

          <div className="flex-1 min-w-0">
            {/* ============ WHAT PRIVACY REALLY MEANS ============ */}
            <div id="what-privacy-means" className="py-16 border-b border-[#1a1a1a]">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-8">
                What privacy actually means
              </h2>

              <div className="max-w-[800px] mb-10">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  A lot of AI agents stress privacy by saying "your data is stored locally." But
                  here's the problem: whenever inference or embedding is needed, they send
                  everything to the cloud. Your messages, your contacts, your location — all of it
                  leaves your device the moment the AI needs to think.
                </p>
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  That's not privacy. That's a marketing claim with a backdoor.
                </p>
                <p className="font-mono text-[15px] text-[#888] leading-[1.9]">
                  We call our local processing environment{" "}
                  <span className="text-white">the Box</span> — your personal, on-device privacy
                  layer where all obfuscation, NER extraction, and embedding happen. Everything that
                  can be processed locally stays inside the Box. Nothing leaves until it's been
                  stripped of anything that could identify you.
                </p>
              </div>

              {/* Comparison visual */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="border border-[#ef4444]/20 bg-[#ef4444]/5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle size={24} className="text-[#ef4444]" />
                    <span className="font-mono text-[15px] text-[#ef4444]">Other agents</span>
                  </div>
                  <div className="space-y-3 font-mono text-[13px] text-[#888] leading-[1.7]">
                    <div className="flex items-start gap-2">
                      <AlertTriangle size={14} className="text-[#ef4444] mt-1 shrink-0" />
                      <span>Data stored locally — but sent to cloud for inference</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle size={14} className="text-[#ef4444] mt-1 shrink-0" />
                      <span>Embeddings generated in the cloud with raw text</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle size={14} className="text-[#ef4444] mt-1 shrink-0" />
                      <span>PII exposed during every API call to LLM providers</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle size={14} className="text-[#ef4444] mt-1 shrink-0" />
                      <span>"Local-first" is only for storage, not processing</span>
                    </div>
                  </div>
                </div>
                <div className="border border-[#10b981]/20 bg-[#10b981]/5 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle size={24} className="text-[#10b981]" />
                    <span className="font-mono text-[15px] text-[#10b981]">Boxy</span>
                  </div>
                  <div className="space-y-3 font-mono text-[13px] text-[#888] leading-[1.7]">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#10b981] mt-1 shrink-0" />
                      <span>Data stored, processed, and obfuscated locally</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#10b981] mt-1 shrink-0" />
                      <span>Embeddings generated on-device before cloud transmission</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#10b981] mt-1 shrink-0" />
                      <span>Cloud only sees anonymized tokens — never raw data</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#10b981] mt-1 shrink-0" />
                      <span>Local-first for storage, processing, AND inference prep</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ============ OBFUSCATION MODEL ============ */}
            <div id="local-obfuscation" className="py-16 border-b border-[#1a1a1a]">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-4">
                Local obfuscation
              </h2>
              <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-8 max-w-[700px]">
                Before any data leaves your device, our on-device NER engine identifies and replaces
                personally identifiable information with anonymous tokens. Non-sensitive content
                passes through untouched — the cloud sees the conversation's intent but can never
                link it back to a real person.
              </p>

              {/* Code diff */}
              <div className="border border-[#222] bg-[#0a0a0a] overflow-hidden max-w-[900px] mb-8">
                <div className="flex border-b border-[#222]">
                  <div className="flex-1 px-4 py-2 border-r border-[#222]">
                    <span className="font-mono text-[12px] text-[#ef4444]">
                      Raw input (your device)
                    </span>
                  </div>
                  <div className="flex-1 px-4 py-2">
                    <span className="font-mono text-[12px] text-[#10b981]">
                      After obfuscation (your device)
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="border-b md:border-b-0 md:border-r border-[#222] p-5 space-y-2">
                    {USER_DATA_LINES.map((line, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="font-mono text-[12px] text-[#444] w-5 shrink-0 text-right">
                          {i + 1}
                        </span>
                        <span className="font-mono text-[13px] text-[#888]">{line}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-5 space-y-2">
                    {OBFUSCATED_LINES.map((line, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2 ${line.changed ? "bg-[#10b981]/5 -mx-2 px-2 py-0.5" : "py-0.5"}`}
                      >
                        <span className="font-mono text-[12px] text-[#444] w-5 shrink-0 text-right">
                          {i + 1}
                        </span>
                        <span
                          className={`font-mono text-[13px] ${line.changed ? "text-[#10b981]" : "text-[#888]"}`}
                        >
                          {line.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-5 py-3 border-t border-[#222] flex items-center justify-between">
                  <span className="font-mono text-[12px] text-[#555]">
                    Obfuscation layer v3.1 — runs inside the Box
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] text-[#10b981]">Inside the Box</span>
                  </div>
                </div>
              </div>

              {/* Local embedding */}
              <div className="border border-[#1a1a1a] p-6 md:p-8 max-w-[900px]">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu size={24} className="text-[#00F0FF]" />
                  <h3 className="font-mono text-[16px] text-white">Local embedding</h3>
                </div>
                <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
                  Beyond obfuscation, we also generate embeddings locally on your laptop. This means
                  we understand the semantic meaning of your data without any raw text ever reaching
                  a remote server. The cloud receives only anonymized vectors — mathematical
                  representations that cannot be reverse-engineered back to your original text.
                </p>
              </div>
            </div>

            {/* ============ DATA PIPELINE ============ */}
            <div id="data-flow" className="py-16 border-b border-[#1a1a1a]">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-4">
                How data flows through Boxy
              </h2>
              <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-10 max-w-[700px]">
                Every step is designed to minimize data exposure. The first four steps happen
                entirely on your device.
              </p>

              <div className="space-y-3">
                {/* THE BOX boundary — steps 01-04 */}
                <div className="border border-dashed border-[#10b981]/30 p-3 relative">
                  <div className="absolute -top-3 left-4 bg-[#0a0a0a] px-2">
                    <span className="font-mono text-[11px] text-[#10b981] tracking-wider flex items-center gap-1.5">
                      <Box size={12} /> THE BOX
                    </span>
                  </div>
                  <div className="space-y-3">
                    {DATA_FLOW.filter((s) => ["01", "02", "03", "04"].includes(s.step)).map(
                      (step) => (
                        <div
                          key={step.step}
                          className="border border-[#1a1a1a] hover:border-[#222] transition-colors"
                        >
                          <div className="grid grid-cols-12 items-center">
                            <div className="col-span-1 p-4 border-r border-[#1a1a1a] text-center hidden md:block">
                              <span className="font-mono text-[14px] text-[#00F0FF]">
                                {step.step}
                              </span>
                            </div>
                            <div className="col-span-12 md:col-span-2 p-4 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[14px] text-[#00F0FF] md:hidden">
                                  {step.step}.
                                </span>
                                <step.icon size={16} className="text-[#888]" />
                                <span className="font-mono text-[13px] text-white">
                                  {step.label}
                                </span>
                              </div>
                            </div>
                            <div className="col-span-12 md:col-span-4 p-4 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
                              <span className="font-mono text-[13px] text-[#888]">
                                {step.description}
                              </span>
                            </div>
                            <div className="col-span-12 md:col-span-3 p-4 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
                              <span className="font-mono text-[12px] text-[#10b981]">
                                {step.privacy}
                              </span>
                            </div>
                            <div className="col-span-12 md:col-span-2 p-4">
                              <span
                                className={`font-mono text-[12px] px-2 py-1 border ${
                                  step.location === "The Box"
                                    ? "border-[#10b981]/30 text-[#10b981]"
                                    : "border-[#f59e0b]/30 text-[#f59e0b]"
                                }`}
                              >
                                {step.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Steps outside the Box — 05, 06 */}
                {DATA_FLOW.filter((s) => ["05", "06"].includes(s.step)).map((step) => (
                  <div
                    key={step.step}
                    className="border border-[#1a1a1a] hover:border-[#222] transition-colors"
                  >
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-1 p-4 border-r border-[#1a1a1a] text-center hidden md:block">
                        <span className="font-mono text-[14px] text-[#00F0FF]">{step.step}</span>
                      </div>
                      <div className="col-span-12 md:col-span-2 p-4 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[14px] text-[#00F0FF] md:hidden">
                            {step.step}.
                          </span>
                          <step.icon size={16} className="text-[#888]" />
                          <span className="font-mono text-[13px] text-white">{step.label}</span>
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-4 p-4 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
                        <span className="font-mono text-[13px] text-[#888]">
                          {step.description}
                        </span>
                      </div>
                      <div className="col-span-12 md:col-span-3 p-4 border-b md:border-b-0 md:border-r border-[#1a1a1a]">
                        <span className="font-mono text-[12px] text-[#10b981]">{step.privacy}</span>
                      </div>
                      <div className="col-span-12 md:col-span-2 p-4">
                        <span
                          className={`font-mono text-[12px] px-2 py-1 border ${
                            step.location === "The Box"
                              ? "border-[#10b981]/30 text-[#10b981]"
                              : "border-[#f59e0b]/30 text-[#f59e0b]"
                          }`}
                        >
                          {step.location}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border border-[#10b981]/20 bg-[#10b981]/5 p-6 text-center">
                <p className="font-mono text-[14px] text-[#10b981] leading-[1.8]">
                  Result: Your identity never leaves the box. Zero PII in transit. Zero PII in cloud
                  storage. Full functionality preserved.
                </p>
              </div>
            </div>

            {/* ============ SECURITY: UNIX PHILOSOPHY ============ */}
            <div id="agent-security" className="py-16 border-b border-[#1a1a1a]">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-4">
                Security through agent design
              </h2>
              <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-8 max-w-[700px]">
                Beyond data privacy, we've taken an opinionated approach to agent security by
                abandoning the general-purpose agent design entirely.
              </p>

              <div className="max-w-[800px] mb-8">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  Instead of one monolithic agent that promises to do everything, we adopt a
                  Unix-inspired design: thousands of small agents, each doing one thing and doing it
                  well.
                </p>
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  This design allows us to require each agent to have a{" "}
                  <span className="text-[#00F0FF]">capability manifest</span> — a declaration of
                  exactly what skills it can use and what personal data it can access. No agent ever
                  gets granted access to do things it wasn't designed to do.
                </p>
              </div>

              {/* Capability manifest visual */}
              <div className="border border-[#1a1a1a] max-w-[600px] mb-8">
                <div className="px-5 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
                  <span className="font-mono text-[12px] text-[#666]">
                    capability_manifest.json — Email Draft Agent
                  </span>
                </div>
                <pre className="p-5 overflow-x-auto">
                  <code className="font-mono text-[13px] text-[#888] leading-[1.8]">
                    {`{
  "agent_id": "email_draft_v2",
  "skills": [
    "draft_email",
    "read_contacts"
  ],
  "data_access": [
    "email_threads",
    "contact_list"
  ],
  "restricted": [
    "financial_data",
    "health_records",
    "social_media_dms",
    "browser_history"
  ]
}`}
                  </code>
                </pre>
              </div>

              <p className="font-mono text-[14px] text-[#888] leading-[1.8] max-w-[700px] mb-6">
                This protects users from agent malfunction — if an email-drafting agent is
                compromised, it cannot access your financial data or social media messages. The
                blast radius is contained by design.
              </p>

              <Link
                to="/unix-philosophy"
                className="inline-flex items-center gap-2 font-mono text-[14px] text-[#00F0FF] hover:underline"
              >
                Read more about our Unix Philosophy approach
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* ============ CORE PRINCIPLES ============ */}
            <div id="core-principles" className="py-16">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-8">
                Core principles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    icon: Shield,
                    title: "Zero-knowledge architecture",
                    desc: "Our inference pipeline never sees raw data. Only anonymized, intent-bearing tokens reach the cloud.",
                  },
                  {
                    icon: Lock,
                    title: "On-device processing",
                    desc: "NER extraction, PII detection, and embedding generation all happen on your hardware.",
                  },
                  {
                    icon: Eye,
                    title: "No surveillance capitalism",
                    desc: "We don't sell your data. We don't train on it. We can't even see it — our architecture makes it technically impossible for us to access your raw data, even if we wanted to.",
                  },
                  {
                    icon: Server,
                    title: "Encrypted at rest & in transit",
                    desc: "AES-256 encryption for stored data. TLS 1.3 for all network communication.",
                  },
                  {
                    icon: FileCheck,
                    title: "Full audit trail",
                    desc: "Every data access and inference request logged in an immutable, encrypted audit trail.",
                  },
                  {
                    icon: Shield,
                    title: "Capability manifests",
                    desc: "Every agent declares what it can access. No exceptions. No scope creep.",
                  },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="border border-[#1a1a1a] p-6 hover:border-[#333] transition-colors"
                  >
                    <p.icon size={24} strokeWidth={1.5} className="text-[#10b981] mb-4" />
                    <h3 className="font-mono text-[14px] text-white mb-2">{p.title}</h3>
                    <p className="font-mono text-[13px] text-[#888] leading-[1.7]">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
