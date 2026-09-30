import { skillGroups } from "@/data/profile";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {skillGroups.map((g) => (
          <div
            key={g.label}
            className="grid gap-3 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8"
          >
            <dt className="font-display text-lg font-semibold">{g.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-surface px-3 py-1 text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
