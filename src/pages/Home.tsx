import type { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiBluesky } from 'react-icons/si';

const SOCIALS: Array<{ label: string; href: string; icon: IconType }> = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/liamluna',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/liamgluna',
    icon: FaGithub,
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/liamluna.com',
    icon: SiBluesky,
  },
  {
    label: 'Email',
    href: 'mailto:liamgluna@gmail.com',
    icon: FaEnvelope,
  },
];

export function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 font-mono">
      <section className="intro-fade-up mt-2 rounded-2xl border border-zinc-200/70 bg-white/70 p-6 sm:p-8 dark:border-zinc-700/60 dark:bg-zinc-900/30">
        <div className="flex flex-col items-center gap-6">
          <img
            src="/profile.jpg"
            alt="Portrait of Liam Luna"
            className="intro-fade-up intro-delay-1 h-28 w-28 rounded-full object-cover ring-1 ring-zinc-200 dark:ring-zinc-700"
            loading="eager"
          />

          <div className="text-center">
            <p className="intro-fade-up intro-delay-1 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
              Liam Luna
            </p>
            <p className="intro-fade-up intro-delay-2 mt-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
              I’m a software engineer with nearly two years of experience working as a freelancer. I have
              experience working across frontend and backend development, including deploying and maintaining
              cloud infrastructure.
            </p>

            <div className="intro-fade-up intro-delay-3 mt-6 w-full rounded-xl border border-zinc-200/70 bg-zinc-100/70 px-4 py-3 dark:border-zinc-700/60 dark:bg-zinc-800/30">
              <p className="text-xs tracking-wider text-zinc-600 uppercase dark:text-zinc-400">Welcome</p>
              <p className="mt-1 text-sm text-zinc-800 dark:text-zinc-200">
                Take a look at my projects, or reach out via the contact page.
              </p>
            </div>

            <div className="intro-fade-up intro-delay-3 mt-4 w-full rounded-xl border border-zinc-200/70 bg-zinc-100/70 px-4 py-3 dark:border-zinc-700/60 dark:bg-zinc-800/30">
              <p className="text-xs tracking-wider text-zinc-600 uppercase dark:text-zinc-400">Socials</p>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-700 hover:bg-white dark:border-zinc-700/60 dark:bg-black/20 dark:text-zinc-200 dark:hover:bg-black/30"
                  >
                    <s.icon className="h-4 w-4" aria-hidden="true" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
