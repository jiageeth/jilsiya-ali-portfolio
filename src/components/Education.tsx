import { education } from "@/data/profile";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education and certification">
      <ol className="relative space-y-8 border-l border-line pl-6">
        {education.map((e) => (
          <li key={e.institution} className="relative">
            <span
              aria-hidden
              className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full bg-accent"
            />
            <h3 className="text-lg font-semibold">{e.institution}</h3>
            <p className="mt-1 text-ink/85">{e.title}</p>
            <p className="mt-1 text-sm text-muted">
              {e.period}
              {e.score ? `, ${e.score}` : ""}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
