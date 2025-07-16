import { projects } from "../components/projects";
import Project from "../components/project";

export default function Projects() {
  // there will be a cetegory switch for work and hobby projects, i just don't have any work projects yet
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 w-full">
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  );
}