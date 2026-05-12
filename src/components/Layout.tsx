import type { ReactNode } from "react";
import { profile } from "../data/portfolio";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative mx-auto flex min-h-svh w-full max-w-[1126px] flex-col border-x border-[var(--border)] bg-[var(--bg)]/80">
      <Header />

      <main className="flex-1 px-5 pt-28 sm:px-8 lg:px-12">{children}</main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="soft-card mx-auto flex max-w-[760px] items-center justify-between rounded-full px-4 py-3">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-[var(--text-h)]">
          Juan Ruales
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          <a className="btn btn-ghost btn-sm rounded-full" href="#projects">
            Proyectos
          </a>
          <a className="btn btn-ghost btn-sm rounded-full" href="#experience">
            Experiencia
          </a>
          <a className="btn btn-ghost btn-sm rounded-full" href="#contact">
            Contacto
          </a>
        </div>

        <a
          className="btn btn-sm rounded-full border-0 bg-[var(--accent)] text-white hover:bg-[var(--accent)]/85"
          href={`mailto:${profile.email}`}>
          Escribir
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--border)] px-5 py-10 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm accent-text">
            Disponible para proyectos visuales y web
          </p>
          <h2 className="section-title mt-2 text-3xl">
            Hablemos de tu próxima idea.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <a className="btn rounded-full" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a
            className="btn rounded-full"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer">
            Linked In
          </a>
          <a
            className="btn rounded-full"
            href={profile.instagram}
            target="_blank"
            rel="noreferrer">
            Instagram
          </a>
          <a
            className="btn rounded-full"
            href={profile.itch}
            target="_blank"
            rel="noreferrer">
            Itch.io
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-sm text-[var(--text)] sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Juan David Ruales Delgado.</p>
        <p>Render 3D · Videojuegos · Desarrollo Web</p>
      </div>
    </footer>
  );
}
