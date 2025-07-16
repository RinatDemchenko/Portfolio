// Projects data imported from separate configuration file
import { projects } from "../components/projects";
import Project from "../components/project";

export default function Projects() {
  // TODO: Add category switch for work and hobby projects when work projects are available
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 w-full">
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  );
}
