import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto max-w-5xl border-t border-line px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mb-10 max-w-2xl">
        <h2 id={`${id}-title`} className="text-3xl font-semibold sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-3 text-base text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
