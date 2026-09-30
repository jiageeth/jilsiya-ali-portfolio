import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About", mobile: false },
  { href: "#projects", label: "Projects", mobile: true },
  { href: "#skills", label: "Skills", mobile: false },
  { href: "#education", label: "Education", mobile: false },
  { href: "#contact", label: "Contact", mobile: true },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold">
          {profile.name}
        </a>
        <div className="flex items-center gap-5">
          <nav aria-label="Primary" className="flex items-center gap-5 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-muted transition-colors hover:text-ink ${
                  l.mobile ? "" : "hidden md:inline"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
