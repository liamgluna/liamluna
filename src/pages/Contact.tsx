export function Contact() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="mx-2 max-w-xl text-center font-mono">
        <p className="mb-2 text-2xl font-bold underline sm:text-4xl">Contact</p>
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
