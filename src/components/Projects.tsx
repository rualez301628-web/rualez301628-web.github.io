import { projects, type Project } from "../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="border-t border-(--border) py-16">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Proyectos
          </p>
          <h2 className="section-title mt-3 text-4xl">
            Render, juego y software.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6">
          Una base simple para mostrar trabajos. En escritorio usa 2 columnas;
          en móvil cae a 1 columna.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <article className="soft-card group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1">
      <div className="mb-6 aspect-16/10 overflow-hidden rounded-[1.2rem] border border-(--border) accent-bg">
        <div className="flex h-full items-end justify-between p-5">
          <span className="px-4 py-2 badge border-0 bg-(--bg) text-(--text-h)">
            {project.category}
          </span>
          <span className="text-4xl font-black text-(--accent)">↗</span>
        </div>
      </div>

      <h3 className="text-2xl font-semibold tracking-tight text-(--text-h)">
        {project.title}
      </h3>
      <p className="mt-3 leading-7">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="px-4 py-2 badge badge-outline rounded-full border-(--border)">
            {item}
          </span>
        ))}
      </div>
    </article>
  );

  if (!project.href) return content;

  return (
    <a href={project.href} target="_blank" rel="noreferrer" className="block">
      {content}
    </a>
  );
}
