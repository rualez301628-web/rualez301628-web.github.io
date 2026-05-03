import { experience } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="border-t border-(--border) py-16">
      <div className="mb-10">
        <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
          Experiencia
        </p>
        <h2 className="section-title mt-3 text-4xl">Formación y trabajo.</h2>
      </div>

      <div className="soft-card rounded-3xl p-4 sm:p-8">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {experience.map((item, index) => (
            <li key={`${item.period}-${item.title}`}>
              {index !== 0 && <hr className="bg-(--border)" />}

              <div className="timeline-middle">
                <div className="grid size-4 place-items-center rounded-full bg-(--accent) shadow" />
              </div>

              <div
                className={
                  index % 2 === 0
                    ? "timeline-start mb-10 md:text-end"
                    : "timeline-end mb-10"
                }>
                <time className="text-sm accent-text">{item.period}</time>
                <h3 className="mt-2 text-xl font-semibold text-(--text-h)">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm font-medium">{item.place}</p>
                <p className="mt-3 max-w-md leading-7">{item.description}</p>
              </div>

              {index !== experience.length - 1 && (
                <hr className="bg-(--border)" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
