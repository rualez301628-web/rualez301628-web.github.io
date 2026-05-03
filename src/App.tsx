import { Helmet } from 'react-helmet-async'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Layout } from './components/Layout'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { profile } from './data/portfolio'

function App() {
  return (
    <>
      <Helmet>
        <html lang="es-CO" />
        <title>{profile.name} | Renders 3D, videojuegos y desarrollo web</title>
        <meta
          name="description"
          content="Portfolio de Juan David Ruales Delgado: renders 3D, videojuegos, Unity3D, Unreal Engine 5 y desarrollo web."
        />
        <meta name="author" content={profile.name} />
        <meta property="og:title" content={`${profile.name} | Portfolio`} />
        <meta
          property="og:description"
          content="Renders 3D, videojuegos y desarrollo web con enfoque visual."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Layout>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </Layout>
    </>
  )
}

export default App
