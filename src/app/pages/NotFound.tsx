import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <div className="text-center px-5">
        <div className="font-mono text-[80px] text-[#1a1a1a] mb-4">404</div>
        <h1 className="font-mono text-[24px] text-white mb-3">Page not found</h1>
        <p className="font-mono text-[14px] text-[#888] mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="font-mono text-[14px] px-6 py-3 border border-[#333] text-[#888] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
