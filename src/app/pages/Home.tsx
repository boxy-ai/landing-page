import { useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Zap,
  Eye,
  Brain,
  Box,
  Mail,
  MessageSquare,
  Calendar,
  FileText,
  Briefcase,
  Send,
  Hash,
  Camera,
  HardDrive,
  Search,
  BellRing,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

const INTEGRATIONS = [
  { name: "Gmail", color: "#EA4335", icon: Mail },
  { name: "Slack", color: "#E01E5A", icon: Hash },
  { name: "Twitter / X", color: "#1DA1F2", icon: Send },
  { name: "LinkedIn", color: "#0A66C2", icon: Briefcase },
  { name: "WhatsApp", color: "#25D366", icon: MessageSquare },
  { name: "Instagram", color: "#E4405F", icon: Camera },
  { name: "Telegram", color: "#0088cc", icon: Send },
  { name: "Discord", color: "#5865F2", icon: Hash },
  { name: "Google Calendar", color: "#4285F4", icon: Calendar },
  { name: "Google Drive", color: "#0F9D58", icon: HardDrive },
  { name: "Notion", color: "#ffffff", lightColor: "#191919", icon: FileText },
];

const FEATURES = [
  {
    title: "Proactive, not reactive",
    description:
      "Boxy doesn't wait for prompts. It reads your digital context and generates proposals before you realize you need them.",
    icon: Brain,
    accent: "#FF5A00",
  },
  {
    title: "Privacy by architecture",
    description:
      "All data processing, obfuscation, and embedding happen inside the Box — your personal, on-device privacy layer. No raw personal data ever reaches the cloud.",
    icon: Box,
    accent: "#10b981",
  },
  {
    title: "Deterministic agents",
    description:
      "Our GUI agents follow pre-trained, deterministic paths. No vision-model guessing. Fast, reliable, and effectively zero cost.",
    icon: Zap,
    accent: "#00F0FF",
  },
  {
    title: "Full context awareness",
    description:
      "We capture your entire digital footprint across all platforms, giving agents the depth to truly understand your needs.",
    icon: Eye,
    accent: "#3b82f6",
  },
];

const PROPOSALS = [
  {
    id: "882-A",
    priority: "High",
    subject: "US Expansion",
    body: "I detected a conversation about US entity setup. I've prepared a research brief on Delaware C-Corps and flagged 3 lawyers in your network.",
    files: ["BRIEF_DE_CCORP.pdf", "LAWYERS_3.json", "TIMELINE.md"],
    confidence: 92,
  },
  {
    id: "883-B",
    priority: "Medium",
    subject: "Flight Rebooking",
    body: "Your 6pm flight to LAX was just delayed by 3 hours. I found an earlier flight on the same airline with an open seat — want me to rebook?",
    files: ["FLIGHT_OPTIONS.json", "REBOOKING_FORM.pdf"],
    confidence: 88,
  },
  {
    id: "884-C",
    priority: "High",
    subject: "Birthday Reminder",
    body: "Your friend Sarah's birthday is tomorrow. Based on past chats, she mentioned wanting a new cookbook. I've found 3 options with same-day delivery.",
    files: ["GIFT_OPTIONS.json", "DELIVERY_EST.md"],
    confidence: 95,
  },
  {
    id: "885-D",
    priority: "Low",
    subject: "Subscription Renewal",
    body: "Your annual gym membership auto-renews in 3 days at $59/mo. You haven't checked in for 6 weeks. Want me to pause or cancel it?",
    files: ["MEMBERSHIP_DETAILS.pdf", "CANCEL_FORM.md"],
    confidence: 81,
  },
  {
    id: "886-E",
    priority: "Medium",
    subject: "Weekend Plans",
    body: "You mentioned wanting to try a new restaurant this weekend. I've shortlisted 4 spots with open Saturday evening reservations based on your preferences.",
    files: ["RESTAURANTS_4.json", "RESERVATION_LINKS.md"],
    confidence: 86,
  },
];

const USE_CASES = [
  {
    title: "Travel prep",
    trigger: "Flight booking detected in Gmail",
    action:
      "Boxy compiles weather forecast, hotel options near your meeting venue, and drafts an out-of-office reply.",
  },
  {
    title: "Gift reminder",
    trigger: "Friend's birthday coming up in 2 days",
    action:
      "Boxy finds gift ideas based on recent conversations, checks same-day delivery options, and prepares a message.",
  },
  {
    title: "Bill negotiation",
    trigger: "Monthly internet bill increased by $15",
    action:
      "Boxy drafts a cancellation request, finds competitor offers in your area, and prepares a retention call script.",
  },
  {
    title: "Meeting prep",
    trigger: "Calendar event with new client tomorrow",
    action:
      "Boxy pulls the client's recent LinkedIn posts, company news, and your past email threads into a single briefing.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I was on a call when Boxy pinged me that my flight got pushed back 3 hours and it had already found a better one. I just said yes.",
    author: "Beta user",
    role: "Freelance designer",
    metric: "Week 2 of beta",
  },
  {
    quote:
      "It pulled up my friend's birthday from an old group chat I forgot existed, found gift ideas, and had delivery options ready. I would have missed it completely.",
    author: "Beta user",
    role: "Marketing coordinator",
    metric: "Week 3 of beta",
  },
  {
    quote:
      "Boxy noticed my gym membership was about to auto-renew and I hadn't gone in weeks. That one notification probably saved me a few hundred bucks.",
    author: "Beta user",
    role: "Graduate student",
    metric: "Week 1 of beta",
  },
];

function BetaButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to="/join-beta"
      className={`inline-flex items-center justify-center font-mono text-[14px] px-6 py-3 bg-[#FF5A00] text-black hover:shadow-[0_0_24px_rgba(255,90,0,0.4)] transition-all ${className}`}
    >
      {children}
    </Link>
  );
}

export function Home() {
  const [proposalIndex, setProposalIndex] = useState(0);
  const currentProposal = PROPOSALS[proposalIndex];
  const { theme } = useTheme();

  const handleDismiss = () => {
    setProposalIndex((prev) => (prev + 1) % PROPOSALS.length);
  };

  const handleDelegate = () => {
    setProposalIndex((prev) => (prev + 1) % PROPOSALS.length);
  };

  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-[800px]">
              <h1 className="font-mono text-[32px] sm:text-[40px] lg:text-[52px] text-white leading-[1.1] mb-6">
                Your AI that works
                <br />
                <span className="text-[#888]">before you ask.</span>
              </h1>

              <p className="font-mono text-[15px] sm:text-[16px] text-[#888] leading-[1.8] max-w-[600px] mb-10">
                Boxy ingests your entire digital context — messages, emails, calendar, documents —
                to anticipate your needs and generate actionable proposals. You just delegate.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <BetaButton>Join the Beta</BetaButton>
                <Link
                  to="/approach"
                  className="font-mono text-[14px] px-6 py-3 border border-[#333] text-[#888] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all"
                >
                  How it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROPOSAL CARD DEMO ============ */}
      <section className="py-20 border-t border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="font-mono text-[12px] text-[#FF5A00] block mb-4 tracking-wide">
                THE CORE UX
              </span>
              <h2 className="font-mono text-[24px] md:text-[32px] text-white leading-[1.2] mb-4">
                One interface.
                <br />
                <span className="text-[#888]">The Proposal Card.</span>
              </h2>
              <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-6">
                Boxy distills everything into a single, actionable unit. Each proposal contains the
                detected context, a generated action plan, and two choices: dismiss or delegate.
              </p>
              <p className="font-mono text-[14px] text-[#666] leading-[1.8]">
                Delegate means Boxy executes. It drafts the email, schedules the meeting, files the
                document. You stay focused on what matters most.
              </p>
            </div>

            {/* Card Visual — interactive, fixed height container */}
            <div className="flex justify-center">
              <div className="w-full max-w-[420px] min-h-[420px] flex flex-col">
                <div
                  className="w-full border-2 border-[#FF5A00] bg-[#0a0a0a] flex flex-col"
                  style={{ boxShadow: "0 0 40px rgba(255,90,0,0.08)" }}
                >
                  <div className="px-5 py-3 border-b border-[#222] flex items-center justify-between">
                    <span className="font-mono text-[12px] text-[#FF5A00]">
                      Proposal #{currentProposal.id}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-[#555]">
                        {proposalIndex + 1}/{PROPOSALS.length}
                      </span>
                      <span className="font-mono text-[11px] text-[#666]">
                        Priority: {currentProposal.priority}
                      </span>
                    </div>
                  </div>
                  <div className="px-5 py-3 border-b border-[#1a1a1a]">
                    <div className="font-mono text-[11px] text-[#666] mb-1">Subject</div>
                    <div className="font-mono text-[16px] text-white">
                      {currentProposal.subject}
                    </div>
                  </div>
                  <div className="px-5 py-5 flex-1">
                    <p className="font-mono text-[13px] text-[#888] leading-[1.8] min-h-[72px]">
                      {currentProposal.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {currentProposal.files.map((file) => (
                        <span
                          key={file}
                          className="font-mono text-[11px] text-[#555] px-2 py-1 border border-[#222] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-colors cursor-pointer"
                        >
                          {file}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 py-2 border-t border-[#1a1a1a] flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#555]">Confidence</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-[#1a1a1a] overflow-hidden">
                        <div
                          className="h-full bg-[#10b981] transition-all duration-300"
                          style={{ width: `${currentProposal.confidence}%` }}
                        />
                      </div>
                      <span className="font-mono text-[11px] text-[#10b981]">
                        {currentProposal.confidence}%
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 border-t border-[#222]">
                    <button
                      onClick={handleDismiss}
                      className="font-mono text-[13px] text-[#666] py-4 border-r border-[#222] hover:bg-[#111] hover:text-white transition-all cursor-pointer"
                    >
                      Dismiss
                    </button>
                    <button
                      onClick={handleDelegate}
                      className="font-mono text-[13px] text-[#FF5A00] py-4 hover:bg-[#FF5A00]/10 transition-all cursor-pointer"
                    >
                      Delegate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY WE STAND OUT ============ */}
      <section className="py-20 border-t border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <span className="font-mono text-[12px] text-[#00F0FF] block mb-4 tracking-wide">
            WHY BOXY
          </span>
          <h2 className="font-mono text-[24px] md:text-[32px] text-white mb-3">
            What makes us different
          </h2>
          <p className="font-mono text-[14px] text-[#888] leading-[1.8] max-w-[700px] mb-12">
            We don't bolt AI onto existing workflows. We rethink the entire relationship between you
            and your digital life — starting from privacy, context, and proactive intelligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="border border-[#1a1a1a] p-6 md:p-8 hover:border-[#333] transition-colors group"
              >
                <feature.icon
                  size={28}
                  strokeWidth={1.5}
                  style={{ color: feature.accent }}
                  className="mb-5"
                />
                <h3 className="font-mono text-[16px] text-white mb-3">{feature.title}</h3>
                <p className="font-mono text-[14px] text-[#888] leading-[1.8]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTEGRATIONS ============ */}
      <section className="py-20 border-t border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <span className="font-mono text-[12px] text-[#00F0FF] block mb-4 tracking-wide">
            INTEGRATIONS
          </span>
          <h2 className="font-mono text-[24px] md:text-[32px] text-white mb-4">
            50+ integrations, one context
          </h2>
          <p className="font-mono text-[14px] text-[#888] leading-[1.8] max-w-[600px] mb-12">
            Boxy connects to the platforms you already use — both through APIs and our proprietary
            GUI agents for walled-garden platforms.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {INTEGRATIONS.map((item) => {
              const resolvedColor =
                theme === "light" && item.lightColor ? item.lightColor : item.color;
              return (
                <div
                  key={item.name}
                  className="border border-[#1a1a1a] p-4 flex flex-col items-center gap-3 hover:border-[#333] transition-colors group"
                >
                  <div
                    className="w-12 h-12 border border-[#222] flex items-center justify-center group-hover:border-[#444] transition-colors"
                    style={{
                      background: `${resolvedColor}10`,
                    }}
                  >
                    <item.icon size={22} strokeWidth={1.5} style={{ color: resolvedColor }} />
                  </div>
                  <span className="font-mono text-[12px] text-[#888] text-center group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </div>
              );
            })}
            {/* "More" card */}
            <div className="border border-[#1a1a1a] border-dashed p-4 flex flex-col items-center gap-3 hover:border-[#333] transition-colors group">
              <div className="w-12 h-12 border border-[#222] border-dashed flex items-center justify-center group-hover:border-[#444] transition-colors">
                <MoreHorizontal size={22} strokeWidth={1.5} className="text-[#555]" />
              </div>
              <span className="font-mono text-[12px] text-[#555] text-center group-hover:text-[#888] transition-colors">
                40+ more
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section className="py-20 border-t border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <span className="font-mono text-[12px] text-[#FF5A00] block mb-4 tracking-wide">
            USE CASES
          </span>
          <h2 className="font-mono text-[24px] md:text-[32px] text-white mb-3">
            See what Boxy can do
          </h2>
          <p className="font-mono text-[14px] text-[#888] leading-[1.8] max-w-[700px] mb-12">
            Boxy handles the requests you don't even realize you have. We anticipate needs and
            proactively help — rather than sitting idle and waiting for a prompt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {USE_CASES.map((uc) => (
              <div
                key={uc.title}
                className="border border-[#1a1a1a] hover:border-[#333] transition-colors"
              >
                <div className="px-6 py-4 border-b border-[#1a1a1a] flex items-center justify-between">
                  <span className="font-mono text-[15px] text-white">{uc.title}</span>
                  <BellRing size={16} className="text-[#FF5A00]" />
                </div>
                <div className="px-6 py-5">
                  <div className="flex items-start gap-3 mb-4">
                    <Search size={16} className="text-[#00F0FF] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-mono text-[11px] text-[#666] block mb-1">Trigger</span>
                      <p className="font-mono text-[13px] text-[#888]">{uc.trigger}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap size={16} className="text-[#FF5A00] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-mono text-[11px] text-[#666] block mb-1">Action</span>
                      <p className="font-mono text-[13px] text-[#888] leading-[1.7]">{uc.action}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OBFUSCATION PREVIEW ============ */}
      <section className="py-20 border-t border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-[12px] text-[#10b981] block mb-4 tracking-wide">
                PRIVACY
              </span>
              <h2 className="font-mono text-[24px] md:text-[32px] text-white leading-[1.2] mb-4">
                Your identity never
                <br />
                <span className="text-[#888]">leaves the box.</span>
              </h2>
              <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-6">
                PII like emails and device IDs are masked inside the Box before anything reaches the
                cloud. Non-sensitive content passes through untouched. The AI understands intent,
                not identity.
              </p>
              <Link
                to="/privacy-security"
                className="inline-flex items-center gap-2 font-mono text-[14px] text-[#00F0FF] hover:underline"
              >
                Learn about our privacy architecture
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Code diff preview */}
            <div className="border border-[#222] bg-[#0a0a0a] overflow-hidden">
              <div className="flex border-b border-[#222]">
                <div className="flex-1 px-4 py-2 border-r border-[#222]">
                  <span className="font-mono text-[11px] text-[#ef4444]">Raw input</span>
                </div>
                <div className="flex-1 px-4 py-2">
                  <span className="font-mono text-[11px] text-[#10b981]">After obfuscation</span>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="border-r border-[#222] font-mono text-[12px] text-[#888] p-4 space-y-1">
                  <div>from: john@gmail.com</div>
                  <div>msg: "Let's open a company in SF"</div>
                  <div>to: sarah@work.com</div>
                  <div>location: "San Francisco, CA"</div>
                  <div>device: iPhone_15_Pro</div>
                </div>
                <div className="font-mono text-[12px] p-4 space-y-1">
                  <div className="text-[#10b981]">from: [USER_A_EMAIL]</div>
                  <div className="text-[#888]">msg: "Let's open a company in SF"</div>
                  <div className="text-[#10b981]">to: [USER_B_EMAIL]</div>
                  <div className="text-[#888]">location: "San Francisco, CA"</div>
                  <div className="text-[#10b981]">device: [DEVICE_HASH_A]</div>
                </div>
              </div>
              <div className="px-4 py-2 border-t border-[#222] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#444]">
                  Obfuscation layer v3.1 — runs inside the Box
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-[#10b981]">Inside the Box</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 border-t border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <span className="font-mono text-[12px] text-[#444] block mb-4 tracking-wide">
            BETA FEEDBACK
          </span>
          <h2 className="font-mono text-[24px] md:text-[32px] text-white mb-12">From the field</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.metric}
                className="border border-[#1a1a1a] p-6 flex flex-col justify-between hover:border-[#222] transition-colors"
              >
                <div>
                  <span className="font-mono text-[12px] text-[#00F0FF] block mb-4">
                    {t.metric}
                  </span>
                  <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="border-t border-[#1a1a1a] pt-4">
                  <div className="font-mono text-[13px] text-white">{t.author}</div>
                  <div className="font-mono text-[12px] text-[#555] mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPLORE SECTIONS ============ */}
      <section className="py-20 border-t border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <h2 className="font-mono text-[24px] md:text-[32px] text-white mb-12">Go deeper</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Our Approach",
                desc: "How we think about context and capability — the two prerequisites for building a real AI agent.",
                path: "/approach",
                accent: "#FF5A00",
              },
              {
                title: "Privacy & Security",
                desc: "What privacy actually means, how we obfuscate data locally, and why architecture matters more than promises.",
                path: "/privacy-security",
                accent: "#10b981",
              },
              {
                title: "Unix Philosophy",
                desc: "Why we build small, focused agents instead of one monolithic AI that tries to do everything at once.",
                path: "/unix-philosophy",
                accent: "#00F0FF",
              },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="border border-[#1a1a1a] p-6 md:p-8 hover:border-[#333] transition-colors group block"
              >
                <h3
                  className="font-mono text-[16px] text-white mb-3"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </h3>
                <p className="font-mono text-[14px] text-[#888] leading-[1.8] mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 font-mono text-[13px] text-[#666] group-hover:text-white transition-colors">
                  Read more
                  <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 border-t border-[#1a1a1a]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <div className="border border-[#222] p-8 md:p-16 text-center">
            <h2 className="font-mono text-[24px] md:text-[36px] text-white mb-4">
              Ready to think inside the Box?
            </h2>
            <p className="font-mono text-[14px] text-[#888] mb-8 max-w-[500px] mx-auto">
              Join our closed beta. We onboard new users weekly based on use-case fit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <BetaButton className="px-8 py-4">Join the Beta</BetaButton>
              <Link
                to="/hiring"
                className="inline-flex items-center gap-2 font-mono text-[14px] px-8 py-4 border border-[#333] text-[#888] hover:border-[#FF5A00] hover:text-[#FF5A00] transition-all"
              >
                We Are Hiring
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
