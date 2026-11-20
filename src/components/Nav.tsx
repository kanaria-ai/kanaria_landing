import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "#bidet", label: "스마트 비데" },
  { href: "#app", label: "카나리아 앱" },
  { href: "#how", label: "작동 원리" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="#top" aria-label="카나리아 홈">
          <Logo />
        </Link>
        <nav aria-label="주요 메뉴" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#download"
          className="inline-flex h-10 items-center rounded-pill bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-ink-2"
        >
          출시 알림 받기
        </a>
      </div>
    </header>
  );
}
