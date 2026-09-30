import { projects } from "@/data/profile";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Four web applications covering authentication, API data, search and filtering, state management and responsive layouts."
    >
      <div className="space-y-16">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}
