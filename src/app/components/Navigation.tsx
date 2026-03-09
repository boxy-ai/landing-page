import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Sun, Moon } from "lucide-react";
import boxyLogo from "@/assets/boxy-logo.png";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Approach", path: "/approach" },
    { label: "Privacy & Security", path: "/privacy-security" },
    { label: "Unix Philosophy", path: "/unix-philosophy" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 border-b transition-all duration-200 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-[#333]" : "bg-[#0a0a0a] border-[#222]"
      }`}
    >
      <div className="h-full max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={boxyLogo}
            alt="Boxy"
            className="w-8 h-8 opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <span className="font-mono text-[18px] tracking-wide text-white hidden sm:block">
            Boxy
          </span>
        </Link>

        {/* Center Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-mono text-[13px] transition-colors hover:text-[#00F0FF] ${
                location.pathname === link.path ? "text-[#00F0FF]" : "text-[#999]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — Theme toggle + We Are Hiring + Join Beta */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center text-[#666] hover:text-white transition-colors cursor-pointer"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <Link
            to="/hiring"
            className={`font-mono text-[13px] px-5 py-2 border border-[#FF5A00] text-[#FF5A00] hover:bg-[#FF5A00]/10 transition-all hidden sm:inline-block ${
              location.pathname === "/hiring" ? "bg-[#FF5A00]/10" : ""
            }`}
          >
            We Are Hiring
          </Link>

          <Link
            to="/join-beta"
            className={`font-mono text-[13px] px-5 py-2 bg-[#FF5A00] text-black hover:shadow-[0_0_24px_rgba(255,90,0,0.28)] transition-all hidden sm:inline-block ${
              location.pathname === "/join-beta" ? "shadow-[0_0_24px_rgba(255,90,0,0.2)]" : ""
            }`}
          >
            Join Beta
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block w-5 h-[2px] bg-white transition-transform ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[2px] bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[2px] bg-white transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-[#222] px-5 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block font-mono text-[14px] py-3 border-b border-[#111] transition-colors ${
                location.pathname === link.path ? "text-[#00F0FF]" : "text-[#999] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/hiring"
            className="block font-mono text-[14px] py-3 border-b border-[#111] text-[#FF5A00]"
          >
            We Are Hiring
          </Link>
          <Link
            to="/join-beta"
            className={`block font-mono text-[14px] py-3 border-b border-[#111] transition-colors ${
              location.pathname === "/join-beta"
                ? "text-[#FF5A00]"
                : "text-[#FF5A00] hover:text-white"
            }`}
          >
            Join Beta
          </Link>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 py-3 font-mono text-[14px] text-[#999] hover:text-white transition-colors cursor-pointer"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
