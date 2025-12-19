import type { IconType } from 'react-icons';
import { FaCode, FaDatabase } from 'react-icons/fa';
import { SiGo, SiJavascript, SiReact, SiTypescript } from 'react-icons/si';

type Project = {
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  imageAlt: string;
  links: Array<{ label: string; href: string }>;
};

const PROJECTS = [
  {
    title: 'Multipoint Pathfinding Visualizer',
    description:
      'Our thesis project where we developed a route planner that visualizes pathfinding algorithms for multi-point rescue operations.',
    tech: ['React', 'JavaScript', 'Data Structures & Algorithms'],
    imageSrc: '/pathfinding.png',
    imageAlt: 'Multipoint pathfinding visualizer screenshot',
    links: [
      {
        label: 'Live Demo',
        href: 'https://pathfinding.liamluna.com',
      },
    ],
  },
  {
    title: 'Kolehiyo',
    description:
      'A catalog of universities in the Philippines, with a React + TypeScript frontend, a Go backend, and a PostgreSQL database.',
    tech: ['React', 'TypeScript', 'Go', 'PostgreSQL'],
    imageSrc: '/kolehiyo.png',
    imageAlt: 'Kolehiyo catalog screenshot',
    links: [
      {
        label: 'Frontend (GitHub)',
        href: 'https://github.com/liamgluna/kolehiyo.live',
      },
      {
        label: 'Backend (GitHub)',
        href: 'https://github.com/liamgluna/kolehiyo',
      },
    ],
  },
] satisfies Project[];

const TECH_ICONS: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Go: SiGo,
  PostgreSQL: FaDatabase,
  'Data Structures & Algorithms': FaCode,
};

export function Projects() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 font-mono">
      <div className="intro-fade-up intro-delay-1 mt-2">
        <p className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">Projects</p>
        <p className="mb-8 text-center text-sm text-zinc-400 sm:mb-10 sm:text-base">
          A few things I’ve built.
        </p>
      </div>

      <div className="grid gap-6">
        {PROJECTS.map((project, idx) => (
          <article
            key={project.title}
            className={`intro-fade-up rounded-2xl border border-zinc-200/70 bg-white/70 p-4 sm:p-6 dark:border-zinc-700/60 dark:bg-zinc-900/30 ${
              idx === 0 ? 'intro-delay-2' : 'intro-delay-3'
            }`}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="overflow-hidden rounded-md border border-zinc-200/70 bg-zinc-100/70 sm:w-56 sm:shrink-0 dark:border-zinc-700/60 dark:bg-black/20">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-lg font-bold sm:text-xl">{project.title}</h2>
                <p className="mt-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const Icon = TECH_ICONS[tech];

                    return (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-zinc-100/70 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-700/60 dark:bg-zinc-800/30 dark:text-zinc-200"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-5">
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block rounded-md border border-zinc-200 bg-white/70 px-4 py-2 text-sm text-zinc-700 hover:bg-white dark:border-zinc-700/60 dark:bg-black/20 dark:text-zinc-200 dark:hover:bg-black/30"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
