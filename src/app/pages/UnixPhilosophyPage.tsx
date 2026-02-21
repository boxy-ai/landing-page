import { Link } from "react-router";
import {
  ArrowRight,
  Box,
  Layers,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Mail,
  Calendar,
  DollarSign,
  Plane,
  Users,
  Briefcase,
  Search,
  Clock,
} from "lucide-react";
import { TableOfContents } from "../components/TableOfContents";

const TOC_ITEMS = [
  { id: "what-is-unix", label: "What is the Unix philosophy?", level: 1 as const },
  { id: "unix-app-era", label: "Unix in the app era", level: 1 as const },
  { id: "unix-agentic-era", label: "Unix in the agentic era", level: 1 as const },
  { id: "agent-store", label: "The Agent Store", level: 2 as const },
];

const AGENT_STORE_AGENTS = [
  {
    name: "Email Drafter",
    description: "Composes contextual email drafts based on conversation history and your tone.",
    skills: ["Draft emails", "Read contacts"],
    dataAccess: ["Email threads", "Contact list"],
    icon: Mail,
    color: "#FF5A00",
  },
  {
    name: "Meeting Prep",
    description: "Pulls relevant context before every meeting — attendee info, past notes, agendas.",
    skills: ["Read calendar", "Compile briefings"],
    dataAccess: ["Calendar events", "Email threads", "Notes"],
    icon: Calendar,
    color: "#00F0FF",
  },
  {
    name: "Travel Planner",
    description: "Detects upcoming trips and prepares logistics — hotels, weather, out-of-office.",
    skills: ["Search hotels", "Draft OOO replies"],
    dataAccess: ["Calendar events", "Email threads"],
    icon: Plane,
    color: "#10b981",
  },
  {
    name: "Expense Tracker",
    description: "Identifies receipts in your email and organizes them for reporting.",
    skills: ["Parse receipts", "Categorize expenses"],
    dataAccess: ["Email attachments"],
    icon: DollarSign,
    color: "#f59e0b",
  },
  {
    name: "Follow-up Nudger",
    description: "Monitors conversations that went cold and reminds you to follow up.",
    skills: ["Detect stale threads", "Draft follow-ups"],
    dataAccess: ["Email threads", "Chat messages"],
    icon: Clock,
    color: "#3b82f6",
  },
  {
    name: "Research Assistant",
    description: "Compiles background information on people and companies before key interactions.",
    skills: ["Web search", "Compile profiles"],
    dataAccess: ["Contact list", "Calendar events"],
    icon: Search,
    color: "#8b5cf6",
  },
  {
    name: "Social Connector",
    description: "Identifies warm introductions in your network for people you want to reach.",
    skills: ["Analyze social graph", "Draft intros"],
    dataAccess: ["Contact list", "Social connections"],
    icon: Users,
    color: "#ec4899",
  },
  {
    name: "Deal Tracker",
    description: "Monitors ongoing negotiations and surfaces key action items.",
    skills: ["Track conversations", "Extract action items"],
    dataAccess: ["Email threads", "Chat messages"],
    icon: Briefcase,
    color: "#06b6d4",
  },
];

export function UnixPhilosophyPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="py-16 md:py-24 border-b border-[#222]">
          <span className="font-mono text-[12px] text-[#00F0FF] block mb-4 tracking-wide">
            UNIX PHILOSOPHY
          </span>
          <h1 className="font-mono text-[32px] md:text-[44px] text-white leading-[1.1] mb-6">
            Do one thing.
            <br />
            <span className="text-[#888]">Do it well.</span>
          </h1>
          <p className="font-mono text-[15px] text-[#888] leading-[1.8] max-w-[700px]">
            The Unix philosophy has guided software design for over 50 years.
            We believe it's the right foundation for building trustworthy,
            secure AI agents.
          </p>
        </div>

        {/* Main content with TOC */}
        <div className="flex gap-12">
          <TableOfContents items={TOC_ITEMS} />

          <div className="flex-1 min-w-0">
            {/* ============ WHAT IS UNIX PHILOSOPHY ============ */}
            <div id="what-is-unix" className="py-16 border-b border-[#1a1a1a]">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-8">
                What is the Unix philosophy?
              </h2>
              <div className="max-w-[800px] mb-10">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  The Unix philosophy, originating from the design of the Unix
                  operating system in the 1970s, is built on a simple principle:
                  write programs that do one thing and do it well. Instead of
                  building one massive, monolithic application, you build many
                  small, focused tools that can be composed together.
                </p>
                <p className="font-mono text-[15px] text-[#888] leading-[1.9]">
                  This approach has proven remarkably resilient. It's the reason
                  the command line is still powerful today, and it's the reason
                  microservices architecture took over the cloud. Small,
                  well-defined components are easier to understand, test, secure,
                  and trust.
                </p>
              </div>

              {/* Visual: Unix principles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="border border-[#1a1a1a] p-6">
                  <Box size={24} className="text-[#00F0FF] mb-4" />
                  <h3 className="font-mono text-[15px] text-white mb-2">
                    Single responsibility
                  </h3>
                  <p className="font-mono text-[13px] text-[#888] leading-[1.7]">
                    Each program does one thing. If you need new functionality,
                    build a new program rather than complicating an existing one.
                  </p>
                </div>
                <div className="border border-[#1a1a1a] p-6">
                  <Layers size={24} className="text-[#00F0FF] mb-4" />
                  <h3 className="font-mono text-[15px] text-white mb-2">
                    Composability
                  </h3>
                  <p className="font-mono text-[13px] text-[#888] leading-[1.7]">
                    Programs work together by passing structured data between them.
                    The output of one becomes the input of another.
                  </p>
                </div>
                <div className="border border-[#1a1a1a] p-6">
                  <ShieldCheck size={24} className="text-[#00F0FF] mb-4" />
                  <h3 className="font-mono text-[15px] text-white mb-2">
                    Clear boundaries
                  </h3>
                  <p className="font-mono text-[13px] text-[#888] leading-[1.7]">
                    Each program has a well-defined interface. You know exactly what
                    goes in and what comes out. No hidden side effects.
                  </p>
                </div>
              </div>
            </div>

            {/* ============ UNIX IN THE APP ERA ============ */}
            <div id="unix-app-era" className="py-16 border-b border-[#1a1a1a]">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-8">
                Unix philosophy in the app era
              </h2>
              <div className="max-w-[800px] mb-10">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  The smartphone era adopted Unix philosophy naturally. Every app
                  on your phone is designed to do one thing and do it well: your
                  camera app takes photos, your calculator calculates, your
                  calendar manages events.
                </p>
                <p className="font-mono text-[15px] text-[#888] leading-[1.9]">
                  More importantly, each app comes with a{" "}
                  <span className="text-white">capability manifest</span> — the
                  permissions dialog. When an app asks for access to your camera,
                  location, or contacts, you see exactly what it needs. You can
                  grant or deny each permission individually. This transparency
                  has been the backbone of user privacy on mobile platforms.
                </p>
              </div>

              {/* App permission visual */}
              <div className="border border-[#1a1a1a] max-w-[400px] mb-8">
                <div className="px-5 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
                  <span className="font-mono text-[13px] text-white">
                    App permissions — Camera App
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  {[
                    { perm: "Camera", granted: true },
                    { perm: "Photo Library", granted: true },
                    { perm: "Microphone", granted: true },
                    { perm: "Location", granted: false },
                    { perm: "Contacts", granted: false },
                    { perm: "Calendar", granted: false },
                    { perm: "Health Data", granted: false },
                    { perm: "Financial Data", granted: false },
                  ].map((p) => (
                    <div key={p.perm} className="flex items-center justify-between">
                      <span className="font-mono text-[13px] text-[#888]">{p.perm}</span>
                      {p.granted ? (
                        <span className="font-mono text-[12px] text-[#10b981] flex items-center gap-1">
                          <CheckCircle size={14} /> Granted
                        </span>
                      ) : (
                        <span className="font-mono text-[12px] text-[#555] flex items-center gap-1">
                          <XCircle size={14} /> Denied
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-[#1a1a1a] bg-[#0d0d0d]">
                  <span className="font-mono text-[12px] text-[#666]">
                    Clear boundaries. You know exactly what this app can access.
                  </span>
                </div>
              </div>

              <p className="font-mono text-[14px] text-[#888] leading-[1.8] max-w-[700px]">
                This model worked because each app had a narrow scope. A camera
                app doesn't need your financial data. A calculator doesn't need
                your contacts. The single-purpose design made permission
                management intuitive and trustworthy.
              </p>
            </div>

            {/* ============ UNIX IN THE AGENTIC ERA ============ */}
            <div id="unix-agentic-era" className="py-16 border-b border-[#1a1a1a]">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-8">
                Unix philosophy in the agentic era
              </h2>

              <div className="max-w-[800px] mb-10">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9] mb-6">
                  The AI agent landscape today has mostly abandoned this principle.
                  The dominant approach is to build one general-purpose agent that
                  does everything — reads all your data, has access to all your
                  tools, and tries to handle any request.
                </p>
                <p className="font-mono text-[15px] text-[#888] leading-[1.9]">
                  We think this is fundamentally wrong. Most of the time, the broad
                  data access isn't actually needed, nor is access to all skills.
                  An agent that drafts emails doesn't need to read your health
                  records. An agent that manages your calendar doesn't need access
                  to your financial data.
                </p>
              </div>

              {/* Contrast visual */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="border border-[#ef4444]/20 bg-[#ef4444]/5 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <XCircle size={24} className="text-[#ef4444]" />
                    <span className="font-mono text-[15px] text-[#ef4444]">
                      Monolithic general agent
                    </span>
                  </div>
                  <div className="border border-[#222] p-4 mb-4 bg-[#0a0a0a]">
                    <span className="font-mono text-[12px] text-[#666] block mb-3">
                      Permissions
                    </span>
                    <div className="space-y-2">
                      {[
                        "All emails",
                        "All messages",
                        "All contacts",
                        "All files",
                        "All calendar events",
                        "Financial data",
                        "Health records",
                        "Social media",
                        "Browser history",
                        "Location history",
                      ].map((p) => (
                        <div key={p} className="flex items-center gap-2">
                          <AlertTriangle size={12} className="text-[#ef4444]" />
                          <span className="font-mono text-[12px] text-[#888]">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="font-mono text-[13px] text-[#888] leading-[1.7]">
                    One agent with access to everything. If it malfunctions or is
                    compromised, all your data is exposed.
                  </p>
                </div>

                <div className="border border-[#10b981]/20 bg-[#10b981]/5 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <CheckCircle size={24} className="text-[#10b981]" />
                    <span className="font-mono text-[15px] text-[#10b981]">
                      Boxy: Unix-style agents
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Email Drafter",
                        access: ["Email threads", "Contacts"],
                      },
                      {
                        name: "Meeting Prep",
                        access: ["Calendar", "Notes"],
                      },
                      {
                        name: "Follow-up Nudger",
                        access: ["Email threads"],
                      },
                    ].map((a) => (
                      <div key={a.name} className="border border-[#222] p-3 bg-[#0a0a0a]">
                        <span className="font-mono text-[13px] text-white block mb-2">
                          {a.name}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {a.access.map((d) => (
                            <span
                              key={d}
                              className="font-mono text-[11px] text-[#10b981] px-2 py-0.5 border border-[#10b981]/20"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="font-mono text-[13px] text-[#888] leading-[1.7] mt-4">
                    Each agent has minimal, declared access. If one fails, the blast
                    radius is contained.
                  </p>
                </div>
              </div>

              <div className="max-w-[800px]">
                <p className="font-mono text-[15px] text-[#888] leading-[1.9]">
                  Just like how the app permission model made mobile computing
                  trustworthy, capability manifests make AI agents trustworthy.
                  You always know exactly what each agent can and cannot do.
                </p>
              </div>
            </div>

            {/* ============ AGENT STORE ============ */}
            <div id="agent-store" className="py-16 border-b border-[#1a1a1a]">
              <h2 className="font-mono text-[24px] md:text-[28px] text-white mb-4">
                The Agent Store
              </h2>
              <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-4 max-w-[700px]">
                The Agent Store is where you browse and select agents that fit your
                life. Each agent automates a specific aspect of your workflow, with
                clearly declared capabilities so you know exactly what you're getting.
              </p>
              <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-10 max-w-[700px]">
                The Unix philosophy makes adoption seamless: you understand what
                each agent does, what data it needs, and you can add or remove
                agents at any time without affecting others.
              </p>

              {/* Agent Store Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {AGENT_STORE_AGENTS.map((agent) => (
                  <div
                    key={agent.name}
                    className="border border-[#1a1a1a] hover:border-[#333] transition-colors group"
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 border flex items-center justify-center"
                          style={{
                            borderColor: agent.color,
                            background: `${agent.color}10`,
                          }}
                        >
                          <agent.icon size={20} style={{ color: agent.color }} />
                        </div>
                        <h3 className="font-mono text-[14px] text-white">
                          {agent.name}
                        </h3>
                      </div>
                      <p className="font-mono text-[12px] text-[#888] leading-[1.7] mb-4">
                        {agent.description}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <span className="font-mono text-[10px] text-[#666] block mb-1 tracking-wide">
                            SKILLS
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {agent.skills.map((s) => (
                              <span
                                key={s}
                                className="font-mono text-[10px] text-[#888] px-1.5 py-0.5 border border-[#222]"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-[#666] block mb-1 tracking-wide">
                            DATA ACCESS
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {agent.dataAccess.map((d) => (
                              <span
                                key={d}
                                className="font-mono text-[10px] text-[#10b981] px-1.5 py-0.5 border border-[#10b981]/20"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-5 py-3 border-t border-[#1a1a1a] bg-[#0d0d0d]">
                      <span className="font-mono text-[12px] text-[#555] group-hover:text-[#00F0FF] transition-colors">
                        + Add to my agents
                      </span>
                    </div>
                  </div>
                ))}
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
                  to="/approach"
                  className="inline-flex items-center gap-2 font-mono text-[14px] px-6 py-3 border border-[#333] text-[#888] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all"
                >
                  Our Approach
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