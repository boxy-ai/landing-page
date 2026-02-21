import { Link } from "react-router";
import {
  ArrowRight,
  Database,
  Search,
  BarChart3,
  Lightbulb,
  LineChart,
  MousePointer,
  Keyboard,
  ScrollText,
  Zap,
  Shield,
  DollarSign,
  Clock,
  Mail,
  MessageSquare,
  Camera,
  Briefcase,
  FileText,
  Calendar,
  Hash,
  Send,
} from "lucide-react";
import { TableOfContents } from "../components/TableOfContents";

const TOC_ITEMS = [
  { id: "context", label: "Context", level: 1 as const },
  { id: "data-lives", label: "Where your data lives", level: 2 as const },
  { id: "digital-footprint", label: "Digital footprint", level: 2 as const },
  { id: "pipeline", label: "Intelligence pipeline", level: 2 as const },
  { id: "capability", label: "Capability", level: 1 as const },
  { id: "gui-problem", label: "GUI agent problems", level: 2 as const },
  { id: "comparison", label: "Our approach vs. status quo", level: 2 as const },
  { id: "three-things", label: "Three things that matter", level: 2 as const },
];

const PIPELINE_STEPS = [
  {
    id: 1,
    title: "Raw Inputs",
    subtitle: "App connectors, files, conversations",
    icon: Database,
    color: "#FF5A00",
    description: "High-fidelity personal data, collected at the source.",
    mockData: [
      { type: "email", content: 'Subject: "Q2 budget review" — from: CFO' },
      { type: "chat", content: "WhatsApp: \"Let's finalize the SF office lease\"" },
      { type: "calendar", content: "Meeting: Board sync — tomorrow 2pm" },
      { type: "social", content: 'Twitter DM: "Interested in your product"' },
    ],
  },
  {
    id: 2,
    title: "Indexing",
    subtitle: "Full-text search, embeddings, vector search",
    icon: Search,
    color: "#00F0FF",
    description: "Multi-modal retrieval layer for fast, contextual lookup.",
    mockData: [
      { type: "fts", content: "FTS index: 124,392 documents across 8 sources" },
      { type: "embedding", content: "Vector: [0.234, -0.891, 0.445, ...] dim=1536" },
      { type: "chunk", content: 'Chunk: "SF office lease" → cluster #47' },
      { type: "entity", content: "Entity: CFO → person_node_0x3f2a" },
    ],
  },
  {
    id: 3,
    title: "Features",
    subtitle: "Aggregates, behavioral features, graphs",
    icon: BarChart3,
    color: "#3b82f6",
    description: "Derived behavioral signals from raw data.",
    mockData: [
      { type: "freq", content: "Communication freq: CFO ↔ You → 12x/week" },
      { type: "topic", content: 'Topic cluster: "US expansion" — 23 mentions' },
      { type: "pattern", content: "Pattern: You research legal topics on Mondays" },
      { type: "graph", content: "Social graph: 3 hops to target investor" },
    ],
  },
  {
    id: 4,
    title: "Detection & Modeling",
    subtitle: "Topic models, change points, anomalies",
    icon: Lightbulb,
    color: "#f59e0b",
    description: "Structure discovery and change detection.",
    mockData: [
      { type: "change", content: "Change point: US expansion topic +340% this week" },
      { type: "anomaly", content: "Anomaly: No reply to legal counsel in 5 days" },
      { type: "model", content: 'Topic model: "corporate setup" → high intent' },
      { type: "predict", content: "Prediction: User will need legal docs by Friday" },
    ],
  },
  {
    id: 5,
    title: "Insights & Presentation",
    subtitle: "Dashboards, RAG narratives, nudges",
    icon: LineChart,
    color: "#10b981",
    description: "Grounded, explainable outputs delivered as proposal cards.",
    mockData: [
      { type: "proposal", content: "Proposal: Prepare Delaware C-Corp brief" },
      { type: "narrative", content: "RAG: 3 relevant lawyers found in your network" },
      { type: "nudge", content: "Nudge: Follow up with legal counsel today" },
      { type: "action", content: "Action: Draft follow-up email — ready to send" },
    ],
  },
];

const PLATFORM_DATA = [
  { name: "Twitter DMs", icon: Send, status: "Walled garden", method: "GUI agent" },
  { name: "Instagram DMs", icon: Camera, status: "Walled garden", method: "GUI agent" },
  { name: "WhatsApp", icon: MessageSquare, status: "Walled garden", method: "GUI agent" },
  { name: "LinkedIn", icon: Briefcase, status: "Walled garden", method: "GUI agent" },
  { name: "Gmail", icon: Mail, status: "API accessible", method: "OAuth API" },
  { name: "Google Calendar", icon: Calendar, status: "API accessible", method: "OAuth API" },
  { name: "Slack", icon: Hash, status: "API accessible", method: "OAuth API" },
  { name: "Notion", icon: FileText, status: "API accessible", method: "OAuth API" },
];

export function ApproachPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="py-16 md:py-24 border-b border-[#222]">
          <span className="font-mono text-[12px] text-[#FF5A00] block mb-4 tracking-wide">
            OUR APPROACH
          </span>
          <h1 className="font-mono text-[32px] md:text-[44px] text-white leading-[1.1] mb-6">
            Two prerequisites for
            <br />
            <span className="text-[#888]">a real AI agent.</span>
          </h1>
          <p className="font-mono text-[15px] text-[#888] leading-[1.8] max-w-[700px]">
            We believe there are two fundamental prerequisites that must be
            solved before an AI agent can meaningfully act on your behalf:
            deep context and reliable capability.
          </p>
        </div>

        {/* Main content with TOC */}
        <div className="flex gap-12">
          <TableOfContents items={TOC_ITEMS} />

          <div className="flex-1 min-w-0">
            {/* ============ PART 1: CONTEXT ============ */}
            <div id="context" className="py-16 border-b border-[#1a1a1a]">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[14px] px-3 py-1 border border-[#FF5A00] text-[#FF5A00]">
                  01
                </span>
                <h2 className="font-mono text-[24px] md:text-[32px] text-white">
                  Context
                </h2>
              </div>

              <div className="max-w-[800px]">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-8">
                  Most AI assistants only access data available through APIs — your
                  email, calendar, maybe Slack. But this is a fraction of who you
                  are. The most valuable personal data is locked inside walled
                  gardens that don't offer API access.
                </p>
              </div>

              {/* Platform grid */}
              <div id="data-lives" className="mb-12">
                <h3 className="font-mono text-[16px] text-white mb-6">
                  Where your data actually lives
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {PLATFORM_DATA.map((p) => (
                    <div
                      key={p.name}
                      className="border border-[#1a1a1a] p-4 hover:border-[#333] transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <p.icon size={20} className="text-[#888]" />
                        <span className="font-mono text-[14px] text-white">{p.name}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-mono text-[11px] px-2 py-0.5 border ${
                            p.status === "Walled garden"
                              ? "border-[#FF5A00]/30 text-[#FF5A00]"
                              : "border-[#10b981]/30 text-[#10b981]"
                          }`}
                        >
                          {p.status}
                        </span>
                        <span className="font-mono text-[11px] text-[#666]">{p.method}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-[800px] mb-12">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  Twitter direct messages, interactions across all platforms,
                  Instagram direct messages — all of this personal data is scattered
                  across platforms. When combined with data that can be granted via
                  APIs (your Gmail, Calendar, Slack), we can finally construct a user
                  profile with the depth for an agent to truly understand who you
                  are, what you want, and what you may need tomorrow or next week.
                </p>
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  This allows agents to proactively prepare rather than waiting for
                  you to give a request.
                </p>
              </div>

              {/* Digital footprint callout */}
              <div id="digital-footprint" className="border border-[#FF5A00]/20 bg-[#FF5A00]/5 p-6 md:p-8 mb-12 max-w-[800px]">
                <p className="font-mono text-[15px] text-[#FF5A00] leading-[1.8] mb-4">
                  We're not just obtaining data from easily accessible APIs. We're
                  obtaining the entire digital footprint of a user.
                </p>
                <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
                  For the first time in the internet era, we can aggregate our own
                  data and leverage it to provide value to ourselves — rather than
                  relying on platforms to act nicely and give us this data back.
                  Intelligence has always flowed from users to platforms. We're
                  reversing that flow.
                </p>
              </div>

              {/* NLP Pipeline */}
              <div id="pipeline" className="mb-8">
                <h3 className="font-mono text-[20px] text-white mb-3">
                  The Personal Intelligence Pipeline
                </h3>
                <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-8 max-w-[700px]">
                  Just like companies build pipelines for business intelligence, we
                  build a personal intelligence pipeline — one that everyone should
                  have and will have. It processes decades of data you've created
                  across all platforms.
                </p>
              </div>

              <div className="space-y-4">
                {PIPELINE_STEPS.map((step, idx) => (
                  <div
                    key={step.id}
                    className="border border-[#1a1a1a] hover:border-[#333] transition-colors"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Left: Step info */}
                      <div className="p-6 border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-10 h-10 border flex items-center justify-center"
                            style={{ borderColor: step.color }}
                          >
                            <step.icon size={20} style={{ color: step.color }} />
                          </div>
                          <div>
                            <h4 className="font-mono text-[15px] text-white">
                              {step.title}
                            </h4>
                            <span className="font-mono text-[12px] text-[#666]">
                              {step.subtitle}
                            </span>
                          </div>
                        </div>
                        <p className="font-mono text-[13px] text-[#888] leading-[1.7]">
                          {step.description}
                        </p>
                      </div>

                      {/* Right: Mock data */}
                      <div className="bg-[#0d0d0d] p-4">
                        <span className="font-mono text-[11px] text-[#444] block mb-3 tracking-wide">
                          SAMPLE OUTPUT
                        </span>
                        <div className="space-y-2">
                          {step.mockData.map((d, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2 font-mono text-[12px]"
                            >
                              <span className="text-[#444] shrink-0 mt-0.5">{">"}</span>
                              <span className="text-[#888]">{d.content}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Arrow between steps */}
                    {idx < PIPELINE_STEPS.length - 1 && (
                      <div className="flex justify-center py-0">
                        <div className="w-[1px] h-0 bg-[#333]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Pipeline arrow connectors */}
              <div className="flex justify-center py-2">
                <div className="flex flex-col items-center gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="w-[2px] h-2 bg-[#333]" />
                  ))}
                </div>
              </div>
            </div>

            {/* ============ PART 2: CAPABILITY ============ */}
            <div id="capability" className="py-16 border-b border-[#1a1a1a]">
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[14px] px-3 py-1 border border-[#00F0FF] text-[#00F0FF]">
                  02
                </span>
                <h2 className="font-mono text-[24px] md:text-[32px] text-white">
                  Capability
                </h2>
              </div>

              <div className="max-w-[800px] mb-12">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  A personal assistant agent must be able to operate software
                  interfaces on your behalf. Due to the limitations of APIs, the
                  things agents can do are by nature limited. GUI agents — agents
                  that can interact with graphical interfaces — are always needed to
                  fill the gap. In most cases, they are the only way to get
                  things done.
                </p>
                <p className="font-mono text-[15px] text-[#888] leading-[1.9]">
                  But the current state of GUI agents is fundamentally broken.
                </p>
              </div>

              {/* Current approach */}
              <div id="gui-problem" className="mb-12">
                <h3 className="font-mono text-[16px] text-white mb-6">
                  The problem with current GUI agents
                </h3>
                <div className="border border-[#1a1a1a] p-6 md:p-8 mb-6">
                  <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-6">
                    Most GUI agents today use a vision-based approach. They take a
                    screenshot, feed it to a vision model, and get back a
                    low-level action to execute:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {[
                      { icon: MousePointer, label: "Left click" },
                      { icon: MousePointer, label: "Right click" },
                      { icon: Keyboard, label: "Key press" },
                      { icon: ScrollText, label: "Scroll" },
                    ].map((action) => (
                      <div
                        key={action.label}
                        className="border border-[#222] p-3 flex items-center gap-2"
                      >
                        <action.icon size={18} className="text-[#666]" />
                        <span className="font-mono text-[13px] text-[#888]">
                          {action.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
                    After each granular step, the agent takes a new screenshot and
                    asks the vision model what to do next. This approach is general,
                    but comes with massive trade-offs in cost, latency, and
                    reliability — especially for long-horizon tasks where context
                    explodes and errors compound.
                  </p>
                </div>
              </div>

              {/* Comparison */}
              <div id="comparison" className="mb-12">
                <h3 className="font-mono text-[16px] text-white mb-6">
                  Our approach vs. the status quo
                </h3>
                <div className="border border-[#1a1a1a] overflow-hidden">
                  <div className="grid grid-cols-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
                    <div className="p-4 border-r border-[#1a1a1a]">
                      <span className="font-mono text-[13px] text-[#666]">Metric</span>
                    </div>
                    <div className="p-4 border-r border-[#1a1a1a]">
                      <span className="font-mono text-[13px] text-[#666]">Vision-based agents</span>
                    </div>
                    <div className="p-4">
                      <span className="font-mono text-[13px] text-[#00F0FF]">Boxy agents</span>
                    </div>
                  </div>
                  {[
                    {
                      metric: "Send a message",
                      other: "~3 minutes",
                      ours: "~3 seconds",
                    },
                    {
                      metric: "Reliability",
                      other: "~60-70%",
                      ours: "~100% (deterministic)",
                    },
                    {
                      metric: "Cost per action",
                      other: "$1-5 (VM + tokens)",
                      ours: "~$0 (pre-trained)",
                    },
                    {
                      metric: "Approach",
                      other: "Vision model + screenshots",
                      ours: "Deterministic manifests",
                    },
                    {
                      metric: "Long-horizon tasks",
                      other: "Context explosion, unreliable",
                      ours: "Stable, predictable",
                    },
                  ].map((row, i) => (
                    <div
                      key={row.metric}
                      className={`grid grid-cols-3 ${
                        i < 4 ? "border-b border-[#1a1a1a]" : ""
                      }`}
                    >
                      <div className="p-4 border-r border-[#1a1a1a]">
                        <span className="font-mono text-[13px] text-white">{row.metric}</span>
                      </div>
                      <div className="p-4 border-r border-[#1a1a1a]">
                        <span className="font-mono text-[13px] text-[#888]">{row.other}</span>
                      </div>
                      <div className="p-4">
                        <span className="font-mono text-[13px] text-[#10b981]">{row.ours}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Three pillars */}
              <div id="three-things" className="mb-12">
                <h3 className="font-mono text-[16px] text-white mb-6">
                  Three things that matter
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-[#1a1a1a] p-6 hover:border-[#333] transition-colors">
                    <Clock size={28} className="text-[#FF5A00] mb-4" />
                    <h4 className="font-mono text-[15px] text-white mb-3">Speed</h4>
                    <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
                      If you take 30 seconds to find a contact and draft a message,
                      the agent should take 3 seconds — not 3 minutes. Actions
                      must be faster than doing it yourself.
                    </p>
                  </div>
                  <div className="border border-[#1a1a1a] p-6 hover:border-[#333] transition-colors">
                    <Shield size={28} className="text-[#10b981] mb-4" />
                    <h4 className="font-mono text-[15px] text-white mb-3">Reliability</h4>
                    <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
                      When you want to send a message, you need 100% confidence it
                      will be sent with the exact content you consented to.
                      Deterministic actions build trust over time.
                    </p>
                  </div>
                  <div className="border border-[#1a1a1a] p-6 hover:border-[#333] transition-colors">
                    <DollarSign size={28} className="text-[#00F0FF] mb-4" />
                    <h4 className="font-mono text-[15px] text-white mb-3">Cost</h4>
                    <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
                      If it costs $3 to send an email via a GUI agent, adoption will
                      be zero. Our pre-trained agents drop the cost to effectively
                      nothing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="max-w-[800px]">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9]">
                  We have pre-trained our GUI agents to execute deterministic
                  actions on specific platforms. Instead of guessing what to click
                  next, our agents know exactly what to do — every time. This makes
                  actions fast, reliable, and virtually free. It builds trust so
                  users can gradually delegate more sensitive tasks over time.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="py-16">
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/privacy-security"
                  className="inline-flex items-center gap-2 font-mono text-[14px] px-6 py-3 border border-[#333] text-[#888] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all"
                >
                  Privacy & Security
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/unix-philosophy"
                  className="inline-flex items-center gap-2 font-mono text-[14px] px-6 py-3 border border-[#333] text-[#888] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all"
                >
                  Unix Philosophy
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}