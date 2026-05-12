import { skills } from "../data/portfolio";

export function Skills() {
  return (
    <section className="border-t border-(--border) py-16">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="accent-text text-sm font-semibold uppercase tracking-[0.3em]">
            Stack
          </p>
          <h2 className="section-title mt-3 text-4xl">
            Herramientas y enfoque.
          </h2>
        </div>

        <div className="soft-card rounded-3xl p-6">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 badge badge-lg rounded-full border-(--accent-border) accent-bg text-(--text-h)">
                {skill}
              </span>
            ))}
          </div>

          <p className="mt-6 leading-8"></p>
        </div>
      </div>
    </section>
  );
}
