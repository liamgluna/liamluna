import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';

function getInitialTheme(): 'dark' | 'light' {
  const stored = window.localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
      <Toaster theme={theme} position="top-right" />

      <nav className="mx-auto w-full max-w-3xl px-4 py-8 font-mono sm:py-12">
        <div className="grid grid-cols-3 items-center">
          <div />

          <div className="min-w-0 justify-self-center">
            <div className="flex items-center justify-center gap-3 sm:gap-6">
              <Link
                to="/"
                className="text-sm text-zinc-600 hover:text-zinc-900 sm:text-base dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-sm text-zinc-600 hover:text-zinc-900 sm:text-base dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                Projects
              </Link>
              {/* <Link
                to="/contact"
                className="text-sm text-zinc-600 hover:text-zinc-900 sm:text-base dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                Contact
              </Link> */}
            </div>
          </div>

          <div className="justify-self-end">
            <button
              type="button"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-200/40 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:outline-none sm:p-3 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-zinc-200 dark:focus-visible:ring-zinc-600"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <FaSun className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              ) : (
                <FaMoon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
