import { profile } from "@/data/profile";
import { ArrowDownIcon, GithubIcon, LinkedinIcon } from "./Icons";
import ViewStatesDemo from "./ViewStatesDemo";

const rise = (delay: number) => ({ animationDelay: `${delay}ms` });

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-5xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-28"
    >
      <div>
        <p
          className="motion-safe:animate-rise text-base text-muted"
          style={rise(0)}
        >
          {profile.title}
        </p>
        <h1
          className="motion-safe:animate-rise mt-3 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl"
          style={rise(80)}
        >
          {profile.name}
        </h1>
        <p
          className="motion-safe:animate-rise mt-6 max-w-xl text-lg leading-relaxed text-ink/85 sm:text-xl"
          style={rise(160)}
        >
          {profile.statement}
        </p>
        <p
          className="motion-safe:animate-rise mt-4 max-w-xl text-base text-muted"
          style={rise(220)}
        >
          B.Tech Computer Science student at Rajiv Gandhi Institute of
          Technology, Kottayam, graduating in 2027.
        </p>

        <div
          className="motion-safe:animate-rise mt-8 flex flex-wrap items-center gap-3"
          style={rise(300)}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            See my projects
            <ArrowDownIcon />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Email me
          </a>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Download resume
            </a>
          )}
        </div>

        <div
          className="motion-safe:animate-rise mt-6 flex items-center gap-4 text-muted"
          style={rise(360)}
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="transition-colors hover:text-accent"
          >
            <GithubIcon width={22} height={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="transition-colors hover:text-accent"
          >
            <LinkedinIcon width={22} height={22} />
          </a>
        </div>
      </div>

      <div className="motion-safe:animate-rise" style={rise(240)}>
        <ViewStatesDemo />
      </div>
    </section>
  );
}
