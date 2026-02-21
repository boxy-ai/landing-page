import { useState, useEffect } from "react";

interface TOCItem {
  id: string;
  label: string;
  level?: 1 | 2;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden xl:block sticky top-24 w-[200px] shrink-0 self-start">
      <span className="font-mono text-[11px] text-[#555] block mb-4 tracking-widest">
        ON THIS PAGE
      </span>
      <div className="space-y-1 border-l border-[#222]">
        {items.map((item) => {
          const isH2 = item.level === 2;
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`block w-full text-left py-1.5 font-mono transition-all border-l-2 -ml-[1px] ${
                isH2 ? "pl-7 text-[11px]" : "pl-4 text-[12px]"
              } ${
                activeId === item.id
                  ? "border-[#00F0FF] text-[#00F0FF]"
                  : "border-transparent text-[#555] hover:text-[#888] hover:border-[#333]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
