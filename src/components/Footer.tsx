import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="transition-colors hover:text-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
