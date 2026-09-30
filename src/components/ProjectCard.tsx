import type { Project } from "@/data/profile";

export default function ProjectCard({ project }: { project: Project }) {
  const { name, tagline, problem, solution, contribution, outcome, tech } =
    project;

  return (
    <article className="group grid gap-6 border-l-2 border-line pl-5 transition-colors hover:border-accent md:grid-cols-[15rem_1fr] md:gap-10 md:pl-7">
      <div>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="mt-2 text-sm text-muted">{tagline}</p>
        <ul
          aria-label={`${name} technologies`}
          className="mt-4 flex flex-wrap gap-1.5"
        >
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-line bg-surface px-2 py-0.5 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
        {(project.repoUrl || project.liveUrl) && (
          <div className="mt-4 flex gap-4 text-sm font-medium">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                Live demo
              </a>
            )}
          </div>
        )}
      </div>

      <dl className="space-y-5 text-base leading-relaxed">
        <div>
          <dt className="font-semibold">The problem</dt>
          <dd className="mt-1 text-ink/85">{problem}</dd>
        </div>
        <div>
          <dt className="font-semibold">What I built</dt>
          <dd className="mt-1 text-ink/85">{solution}</dd>
        </div>
        <div>
          <dt className="font-semibold">My contribution</dt>
          <dd className="mt-1">
            <ul className="list-disc space-y-1.5 pl-5 text-ink/85 marker:text-accent">
              {contribution.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-semibold">The result</dt>
          <dd className="mt-1 text-ink/85">{outcome}</dd>
        </div>
      </dl>
    </article>
  );
}
