import { useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    toast.success('Message sent! Thanks for reaching out.');

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-16 font-mono">
      <div className="intro-fade-up mt-2 mb-8 text-center sm:mb-10">
        <p className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Contact</p>
      </div>

      <form
        onSubmit={onSubmit}
        className="intro-fade-up intro-delay-1 mx-auto w-full max-w-xl rounded-2xl border border-zinc-200/70 bg-white/70 p-6 text-left sm:p-8 dark:border-zinc-700/60 dark:bg-zinc-900/30"
      >
        <div className="grid gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1 block text-xs text-zinc-600 sm:text-sm dark:text-zinc-400"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-500 focus:border-zinc-300 dark:border-zinc-700/60 dark:bg-black/20 dark:text-zinc-100 dark:focus:border-zinc-600"
              placeholder="Your name"
              autoComplete="name"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1 block text-xs text-zinc-600 sm:text-sm dark:text-zinc-400"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-500 focus:border-zinc-300 dark:border-zinc-700/60 dark:bg-black/20 dark:text-zinc-100 dark:focus:border-zinc-600"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-1 block text-xs text-zinc-600 sm:text-sm dark:text-zinc-400"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full resize-none rounded-md border border-zinc-200 bg-white/70 px-3 py-2 text-sm text-zinc-900 outline-none placeholder:text-zinc-500 focus:border-zinc-300 dark:border-zinc-700/60 dark:bg-black/20 dark:text-zinc-100 dark:focus:border-zinc-600"
              placeholder="What can I help with?"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-zinc-200 bg-white/70 px-4 py-2 text-sm text-zinc-700 hover:bg-white dark:border-zinc-700/60 dark:bg-black/20 dark:text-zinc-200 dark:hover:bg-black/30"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
