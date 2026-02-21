import { Link } from "react-router";
import boxyLogo from "@/assets/boxy-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-[#222] py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={boxyLogo} alt="Boxy" className="w-7 h-7" />
              <span className="font-mono text-[13px] text-white">
                Boxy
              </span>
            </div>
            <p className="font-mono text-[13px] text-[#555] leading-[1.8] max-w-[280px]">
              Proactive AI that ingests your digital context to anticipate needs
              and act on your behalf. Everything happens inside the Box.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <span className="font-mono text-[12px] text-[#666] block mb-4 tracking-wide">
              NAVIGATE
            </span>
            {[
              { label: "Approach", path: "/approach" },
              { label: "Privacy & Security", path: "/privacy-security" },
              { label: "Unix Philosophy", path: "/unix-philosophy" },
              { label: "About Us", path: "/about" },
              { label: "Hiring", path: "/hiring" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block font-mono text-[13px] text-[#555] py-1.5 hover:text-[#00F0FF] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div>
            <span className="font-mono text-[12px] text-[#666] block mb-4 tracking-wide">
              CONNECT
            </span>
            {[
              // Twitter / X account is currently not available.
              // Restore the link once the account becomes available again.
              { label: "LinkedIn", href: "https://www.linkedin.com/company/108696137/" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-mono text-[13px] text-[#555] py-1.5 hover:text-[#00F0FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1a1a1a] pt-6 flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-[12px] text-[#333]">
            &copy; 2026 Boxy Inc. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[12px] text-[#333] hover:text-[#666] transition-colors cursor-pointer">
              Terms
            </span>
            <span className="font-mono text-[12px] text-[#333] hover:text-[#666] transition-colors cursor-pointer">
              Privacy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
