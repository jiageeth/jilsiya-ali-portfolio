import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";
import Section from "./Section";

export default function Contact() {
  const rows = [
    {
      label: "LinkedIn",
      text: "jilsiya-ali-",
      href: profile.linkedin,
      icon: <LinkedinIcon />,
      external: true,
    },
    {
      label: "GitHub",
      text: "jiageeth",
      href: profile.github,
      icon: <GithubIcon />,
      external: true,
    },
    {
      label: "Phone",
      text: profile.phone,
      href: `tel:${profile.phone}`,
      icon: <PhoneIcon />,
      external: false,
    },
  ];

  return (
    <Section
      id="contact"
      title="Contact"
      intro="Email is the fastest way to reach me."
    >
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex items-center gap-3 break-all font-display text-2xl font-semibold text-accent underline-offset-8 hover:underline sm:text-4xl"
      >
        <MailIcon width={28} height={28} className="shrink-0" />
        {profile.email}
      </a>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {rows.map((r) => (
          <li key={r.label}>
            <a
              href={r.href}
              {...(r.external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="flex items-center gap-3 text-ink/85 transition-colors hover:text-accent"
            >
              <span className="text-muted">{r.icon}</span>
              <span>
                <span className="block text-sm text-muted">{r.label}</span>
                {r.text}
              </span>
            </a>
          </li>
        ))}
        <li className="flex items-center gap-3 text-ink/85">
          <span className="text-muted">
            <PinIcon />
          </span>
          <span>
            <span className="block text-sm text-muted">Location</span>
            {profile.location}
          </span>
        </li>
      </ul>
    </Section>
  );
}
