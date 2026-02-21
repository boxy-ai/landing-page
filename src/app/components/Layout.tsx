import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { SeoHead } from "./SeoHead";

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to let the page render before scrolling to hash
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      <SeoHead pathname={pathname} />
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
