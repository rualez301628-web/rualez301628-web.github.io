export type Project = {
  title: string
  category: string
  description: string
  image: string
  stack: string[]
  href?: string
}

export type ExperienceItem = {
  period: string
  title: string
  place: string
  description: string
}

export const heroImages = [
  "/home/Frame1.jpg",
  "/home/Frame2.png",
];

export const profile = {
  name: 'Juan David Ruales Delgado',
  role: '3D Artist, Game Developer & Web Developer',
  location: 'Cali, Colombia',
  email: 'Rualez301628@gmail.com',
  linkedin: 'https://www.linkedin.com/in/juan-david-ruales-583296220/',
  itch: 'https://sldavid.itch.io/bladesouls',
  instagram: "https://www.instagram.com/artist3dcolombia/",
  summary:
    'Ingeniero de Sistemas y creador autodidacta enfocado en renders 3D, videojuegos y desarrollo web.',
}

export const projects: Project[] = [
  {
    title: 'BladeSouls',
    category: 'Videojuego',
    description:
      'Proyecto de videojuego publicado en itch.io, orientado a combate, mundos 3D y experimentación con motores gráficos.',
    image: '/projects/bNSoen.jpeg',
    stack: [ 'Unreal Engine 5', 'Blueprints', 'Game Design' ],
    href: 'https://sldavid.itch.io/bladesouls',
  }
]

export const experience: ExperienceItem[] = [
  {
    period: '2023 — 2027',
    title: 'Ingeniería de Sistemas',
    place: 'Institución Universitaria Antonio José Camacho',
    description:
      'Formación universitaria en curso, con enfoque en sistemas, desarrollo de software y bases técnicas para proyectos digitales.',
  },
  {
    period: 'Feb 2022 — Nov 2022',
    title: 'Desarrollador Unity3D',
    place: 'APPYWEB',
    description:
      'Desarrollo de videojuego 3D con Unity y C#, compilación multiplataforma e integración experimental con Web3 mediante Solidity.',
  },
  {
    period: 'Abr 2021 — Oct 2021',
    title: 'Desarrollador Web Junior',
    place: 'CCXC',
    description:
      'Construcción de aplicativo web para inventario, asignación de roles y manejo operativo interno usando Laravel, Alpine y TailwindCSS.',
  },
  {
    period: '2019 — 2021',
    title: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
    place: 'SENA Colombia',
    description:
      'Levantamiento de requerimientos, documentación y desarrollo de soluciones orientadas a sistemas de información.',
  },
  {
    period: '2018 — 2019',
    title: 'Técnico en Programación de Software',
    place: 'SENA Colombia',
    description:
      'Proyecto académico de gestión de materiales, facturación y costos para producción de prendas y calzado.',
  },
]

export const skills = [
  'Blender',
  'C#',
  'Unity3D',
  'Unreal Engine 5',
  'Blueprints',
  'Node.js',
  'Laravel',
  'TailwindCSS',
  'Alpine.js',
  'Solidity',
]
