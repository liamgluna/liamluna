function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-800 text-zinc-100">
      <div className="mx-2 text-center font-mono">
        <p className="mb-2 text-2xl font-bold underline sm:text-4xl">Liam Luna</p>
        <p className="mb-2 text-xs sm:text-xl">Software Engineer | Backend | Go | TypeScript</p>
        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="https://linkedin.com/in/liamluna"
            className="text-xs text-zinc-400 hover:text-zinc-200 sm:text-base"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/liamgluna"
            className="text-xs text-zinc-400 hover:text-zinc-200 sm:text-base"
          >
            GitHub
          </a>
          <a
            href="https://bsky.app/profile/liamluna.com"
            className="text-xs text-zinc-400 hover:text-zinc-200 sm:text-base"
          >
            Bluesky
          </a>
        </div>
        <a
          href="mailto:liamgluna@gmail.com"
          className="text-xs text-zinc-400 hover:text-zinc-200 sm:text-base"
        >
          liamgluna@gmail.com
        </a>
      </div>
    </div>
  );
}

export default App;
