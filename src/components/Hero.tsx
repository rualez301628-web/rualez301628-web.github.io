import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="grid min-h-[72svh] items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <div className="badge accent-bg accent-border mb-5 border px-4 py-3 text-(--accent)">
          {profile.location}
        </div>

        <h1 className="section-title max-w-4xl text-5xl leading-[0.96] sm:text-6xl lg:text-7xl">
          Renders 3D, videojuegos y desarrollo web con enfoque visual.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-(--text)">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="btn rounded-full border-0 bg-(--accent) px-6 text-white hover:bg-(--accent)/85"
            href="#projects">
            Ver proyectos
          </a>
          <a className="btn rounded-full px-6" href="#experience">
            Ver experiencia
          </a>
        </div>
      </div>

      <div className="soft-card relative overflow-hidden rounded-4xl p-5">
        <div className="aspect-square rounded-3xl border border-(--border) accent-bg p-6">
          <div className="grid h-full place-items-center rounded-[1.2rem] border border-(--accent-border) bg-(--bg)/70">
            <div className="text-center">
              <p className="accent-text text-sm font-semibold uppercase tracking-[0.35em]">
                Portfolio
              </p>
              <p className="mt-4 text-4xl font-black tracking-tight text-(--text-h)">
                3D / Web
              </p>
              <p className="mx-auto mt-4 max-w-60 text-sm leading-6">
                Espacio preparado para reemplazar por renders reales, mockups o
                capturas de proyectos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
