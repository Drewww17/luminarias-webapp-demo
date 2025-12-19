export default function Home() {
  const contents = [
    ["overview", "Lesson overview"],
    ["why", "Why Tailwind?"],
    ["setup", "Setup steps"],
    ["utilities", "Utility cheat sheet"],
    ["examples", "Examples (UI demos)"],
    ["responsive", "Responsive design"],
    ["states", "Hover & focus"],
    ["mistakes", "Common mistakes"],
    ["practice", "Practice + answer key"],
    ["summary", "Lesson summary"],
  ];

  const setupSteps = [
    {
      title: "Step 1 — Install Tailwind",
      desc: "Add Tailwind CSS + PostCSS + Autoprefixer, then generate config files.",
      code: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`,
    },
    {
      title: "Step 2 — Configure content paths",
      desc: "Tell Tailwind where to scan your files for class names.",
      code: `module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};`,
    },
    {
      title: "Step 3 — Add Tailwind to globals.css",
      desc: "Enable Tailwind layers in your global stylesheet.",
      code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    },
    {
      title: "Step 4 — Start using classes",
      desc: "Now you can style directly in JSX using utility classes.",
      code: `<button className="px-4 py-2 rounded-xl bg-[#D6C7A1] text-black font-semibold">
  My Tailwind Button
</button>`,
    },
  ];

  const cheatSheet = [
    { group: "Spacing", examples: "p-6, px-4, mt-3, gap-4" },
    { group: "Typography", examples: "text-sm, text-xl, font-bold, leading-relaxed" },
    { group: "Colors", examples: "bg-black/30, text-white/70, border-white/10" },
    { group: "Layout", examples: "flex, grid, items-center, justify-between" },
    { group: "Effects", examples: "shadow, backdrop-blur, hover:, transition" },
    { group: "Responsiveness", examples: "sm:, md:, lg: prefixes" },
  ];

  const mistakes = [
    {
      title: "Forgetting to add content paths",
      desc: "If Tailwind classes don’t work, Tailwind might not see your files. Check tailwind.config.js content.",
    },
    {
      title: "Using dynamic class strings incorrectly",
      desc: "Tailwind can’t detect classes built like `bg-${color}-500` unless you whitelist them.",
    },
    {
      title: "Overusing custom CSS too early",
      desc: "Try utilities first. Use custom CSS only when utilities truly can’t cover your use-case.",
    },
  ];

  const practice = [
    {
      q: "1) Make a secondary button (outline style).",
      hint: `border border-white/15 bg-white/5 text-white/80 hover:bg-white/10`,
      answer: `<button className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition">
  Secondary
</button>`,
    },
    {
      q: "2) Create a responsive grid: 1 column on mobile, 2 on small screens, 3 on large.",
      hint: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`,
      answer: `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  ...
</div>`,
    },
    {
      q: "3) Add accessible focus styles to a button.",
      hint: `focus:outline-none focus:ring-2 focus:ring-[#D6C7A1]/60 focus:ring-offset-2`,
      answer: `<button className="... focus:outline-none focus:ring-2 focus:ring-[#D6C7A1]/60 focus:ring-offset-2 focus:ring-offset-[#070A0F]">
  Focus me
</button>`,
    },
  ];

  return (
    <div className="min-h-screen text-slate-100">
      {/* Background (dark + beige glow) */}
      <div className="fixed inset-0 -z-10 bg-[#070A0F]" />
      <div className="fixed inset-0 -z-10 opacity-60 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(214,199,161,0.18)_0%,rgba(0,0,0,0)_60%),radial-gradient(60%_50%_at_80%_20%,rgba(99,102,241,0.12)_0%,rgba(0,0,0,0)_60%)]" />

      {/* Header */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-7">
          <p className="text-xs font-semibold tracking-[0.25em] text-white/55 uppercase">
            WEB DEVELOPMENT • STYLING
          </p>

          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How to Use Tailwind CSS
          </h1>

          <p className="mt-3 max-w-3xl text-white/70 leading-relaxed">
            This lesson teaches you how to build clean, modern UI fast using Tailwind’s utility classes.
            Think of Tailwind like LEGO—small pieces that combine into beautiful components.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="#setup"
              className="px-5 py-3 rounded-xl bg-[#D6C7A1] text-black font-semibold hover:brightness-95 transition"
            >
              Start lesson
            </a>
            <a
              href="#practice"
              className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white/85 hover:bg-white/10 transition font-semibold"
            >
              Jump to practice
            </a>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sticky top-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5">
              <h2 className="text-sm font-bold text-white">Lesson contents</h2>
              <nav className="mt-4 space-y-1 text-sm">
                {contents.map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block rounded-xl px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 transition"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0B0F18] p-5">
              <p className="text-xs font-semibold text-white/60 tracking-widest uppercase">
                Mini rule
              </p>
              <p className="mt-2 font-bold text-white">Layout → Typography → Color</p>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                If your UI feels “off”, fix spacing first. Good spacing makes anything look premium.
              </p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="lg:col-span-9 space-y-10">
          {/* Overview */}
          <section
            id="overview"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Lesson overview
            </h2>
           <p className="mt-3 text-white/75 leading-relaxed">
  Tailwind CSS is a{" "}
  <span className="font-semibold text-white">utility-first</span> framework.
  Instead of writing CSS like{" "}
  <code className="font-mono bg-black/40 border border-white/10 px-2 py-1 rounded-lg">
    .card {"{"} padding: 24px; border-radius: 16px; {"}"}
  </code>
  , you use classes like{" "}
  <span className="font-mono bg-black/40 border border-white/10 px-2 py-1 rounded-lg">
    p-6
  </span>{" "}
  and{" "}
  <span className="font-mono bg-black/40 border border-white/10 px-2 py-1 rounded-lg">
    rounded-2xl
  </span>
  .
</p>

          </section>

          {/* Why Tailwind */}
          <section
            id="why"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Why Tailwind?
            </h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["Speed", "Build UI faster because you don’t jump between files."],
                ["Consistency", "Spacing and colors stay consistent across components."],
                ["Responsive by default", "Breakpoints are built-in with sm:/md:/lg:."],
                ["Reusable patterns", "Once you learn the utilities, you can build anything."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="font-bold text-white">{t}</p>
                  <p className="mt-2 text-sm text-white/70">{d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Setup */}
          <section
            id="setup"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Setup steps
            </h2>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {setupSteps.map((s) => (
                <article key={s.title} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                    {s.title}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                  <pre className="mt-4 rounded-xl bg-black/60 border border-white/10 text-white/90 p-4 text-xs overflow-auto whitespace-pre-wrap break-words">
                    <code>{s.code}</code>
                  </pre>
                </article>
              ))}
            </div>
          </section>

          {/* Cheat sheet */}
          <section
            id="utilities"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Utility cheat sheet
            </h2>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cheatSheet.map((u) => (
                <div key={u.group} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="font-bold text-white">{u.group}</p>
                  <p className="mt-2 text-sm text-white/70 font-mono">{u.examples}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Examples */}
          <section
            id="examples"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Examples (UI demos)
            </h2>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Buttons */}
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="font-bold text-white">Buttons</p>
                <p className="mt-2 text-sm text-white/70">
                  Utility classes can make buttons feel polished with just spacing, color, and hover.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="px-4 py-2 rounded-xl bg-[#D6C7A1] text-black font-semibold hover:brightness-95 transition">
                    Primary
                  </button>
                  <button className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition">
                    Secondary
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-rose-600 text-white font-semibold hover:bg-rose-700 transition">
                    Danger
                  </button>
                </div>

                <pre className="mt-4 rounded-xl bg-black/60 border border-white/10 text-white/90 p-4 text-xs overflow-auto whitespace-pre-wrap break-words">
                  <code>{`<button className="px-4 py-2 rounded-xl bg-[#D6C7A1] text-black font-semibold hover:brightness-95 transition">
  Primary
</button>`}</code>
                </pre>
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="font-bold text-white">Cards</p>
                <p className="mt-2 text-sm text-white/70">
                  Cards are a common pattern: border + padding + rounded corners + subtle background.
                </p>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-semibold text-white">Tailwind Card</p>
                  <p className="mt-2 text-sm text-white/70">
                    This card uses <span className="font-mono text-white/90">bg-white/5</span>,{" "}
                    <span className="font-mono text-white/90">border-white/10</span>,{" "}
                    <span className="font-mono text-white/90">rounded-2xl</span>, and{" "}
                    <span className="font-mono text-white/90">p-5</span>.
                  </p>
                </div>

                <pre className="mt-4 rounded-xl bg-black/60 border border-white/10 text-white/90 p-4 text-xs overflow-auto whitespace-pre-wrap break-words">
                  <code>{`<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
  ...
</div>`}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Responsive */}
          <section
            id="responsive"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Responsive design
            </h2>
            <p className="mt-3 text-white/70">
              Tailwind makes responsiveness simple. Add a prefix and the style only applies at that screen size.
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="font-bold text-white">Example: Responsive grid</p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {["Card A", "Card B", "Card C"].map((x) => (
                  <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-semibold text-white">{x}</p>
                    <p className="text-sm text-white/70 mt-1">
                      1 col → 2 col → 3 col
                    </p>
                  </div>
                ))}
              </div>

              <pre className="mt-4 rounded-xl bg-black/60 border border-white/10 text-white/90 p-4 text-xs overflow-auto whitespace-pre-wrap break-words">
                <code>{`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  ...
</div>`}</code>
              </pre>
            </div>
          </section>

          {/* Hover & focus */}
          <section
            id="states"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Hover & focus
            </h2>
            <p className="mt-3 text-white/70">
              Hover makes UI feel alive, and focus rings make it accessible for keyboard users.
            </p>

            <button className="mt-4 px-4 py-2 rounded-xl font-semibold text-black bg-[#D6C7A1] hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-[#D6C7A1]/60 focus:ring-offset-2 focus:ring-offset-[#070A0F]">
              Hover + Focus Me
            </button>

            <pre className="mt-4 rounded-xl bg-black/60 border border-white/10 text-white/90 p-4 text-xs overflow-auto whitespace-pre-wrap break-words">
              <code>{`focus:outline-none focus:ring-2 focus:ring-[#D6C7A1]/60 focus:ring-offset-2 focus:ring-offset-[#070A0F]`}</code>
            </pre>
          </section>

          {/* Common mistakes */}
          <section
            id="mistakes"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Common mistakes
            </h2>

            <div className="mt-5 space-y-4">
              {mistakes.map((m) => (
                <div key={m.title} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="font-bold text-white">{m.title}</p>
                  <p className="mt-2 text-sm text-white/70">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Practice */}
          <section
            id="practice"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Practice + answer key
            </h2>

            <div className="mt-5 space-y-5">
              {practice.map((p) => (
                <div key={p.q} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                  <p className="font-bold text-white">{p.q}</p>
                  <p className="mt-2 text-sm text-white/70">
                    Hint: <span className="font-mono text-white/90">{p.hint}</span>
                  </p>

                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm font-semibold text-[#D6C7A1] hover:brightness-95">
                      Show answer
                    </summary>
                    <pre className="mt-3 rounded-xl bg-black/60 border border-white/10 text-white/90 p-4 text-xs overflow-auto whitespace-pre-wrap break-words">
                      <code>{p.answer}</code>
                    </pre>
                  </details>
                </div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section
            id="summary"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              Lesson summary
            </h2>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>• Tailwind is utility-first (small classes, big results)</li>
              <li>• Use spacing and layout utilities to build structure first</li>
              <li>• Add responsive prefixes (sm/md/lg) to adapt on different devices</li>
              <li>• Use hover/focus utilities for better UX and accessibility</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#setup"
                className="px-5 py-3 rounded-xl bg-[#D6C7A1] text-black font-semibold hover:brightness-95 transition"
              >
                Review setup
              </a>
              <a
                href="#practice"
                className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white/85 hover:bg-white/10 transition font-semibold"
              >
                Practice again
              </a>
            </div>
          </section>

          <footer className="pb-10 text-center text-xs text-white/45">
            Built with Next.js + Tailwind CSS • Tutorial lesson page
          </footer>
        </main>
      </div>
    </div>
  );
}
