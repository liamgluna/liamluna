import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-800 text-zinc-100">
      <nav className="mx-auto flex max-w-3xl items-center justify-center gap-6 px-4 py-12 font-mono">
        <Link to="/" className="text-xs text-zinc-400 hover:text-zinc-200 sm:text-base">
          Home
        </Link>
        <Link to="/projects" className="text-xs text-zinc-400 hover:text-zinc-200 sm:text-base">
          Projects
        </Link>
        <Link to="/contact" className="text-xs text-zinc-400 hover:text-zinc-200 sm:text-base">
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
