export default function Home() {
  const contents = [
    ["overview", "Lesson overview"],
    ["goals", "Learning goals"],
    ["setup", "Setup"],
    ["utilities", "Core utilities"],
    ["responsive", "Responsive design"],
    ["states", "Hover & focus"],
    ["practice", "Practice"],
    ["summary", "Summary"],
  ];

  return (
    <div
      className="min-h-screen text-slate-100"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji",
      }}
    >
      {/* Background (dark with subtle glow) */}
      <div className="fixed inset-0 -z-10 bg-[#070A0F]" />
      <div className="fixed inset-0 -z-10 opacity-60 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(214,199,161,0.18)_0%,rgba(0,0,0,0)_60%),radial-gradient(60%_50%_at_80%_20%,rgba(99,102,241,0.12)_0%,rgba(0,0,0,0)_60%)]" />

      {/* Top Header (no progress bar) */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
            Web Development • Styling
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            How to Use Tailwind CSS
          </h1>
          <p className="mt-2 max-w-3xl text-white/70 leading-relaxed">
            A lesson-style tutorial on building modern, responsive UI using Tailwind’s
            utility classes—fast, consistent, and clean.
          </p>
        </div>
      </header>

      {/* Page Layout */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="sticky top-6">
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

            <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B0F18] p-5">
              <p className="text-xs font-semibold text-white/60 tracking-widest uppercase">
                Quick tip
              </p>
              <p className="mt-2 font-bold text-white">
                Build layout first, then style.
              </p>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Start with spacing + structure (flex/grid), then typography, then color.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-9 space-y-10">
          {/* Overview */}
          <section
            id="overview"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Lesson overview
            </h2>
            <p className="mt-3 text-white/75 leading-relaxed">
              Tailwind CSS is a <span className="font-semibold text-white">utility-first</span>{" "}
              framework. Instead of writing custom CSS for every component, you apply small
              classes like{" "}
              <span className="px-2 py-1 rounded-lg bg-black/40 border border-white/10 font-mono text-[0.9em]">
                p-4
              </span>{" "}
              and{" "}
              <span className="px-2 py-1 rounded-lg bg-black/40 border border-white/10 font-mono text-[0.9em]">
                text-white/70
              </span>{" "}
              directly in JSX.
            </p>
          </section>

          {/* Goals */}
          <section
            id="goals"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Learning goals
            </h2>
            <ul className="mt-4 space-y-3 text-white/75">
              {[
                "Install and configure Tailwind in a Next.js project",
                "Understand common utility groups (spacing, color, typography)",
                "Use responsive prefixes like sm:, md:, lg:",
                "Add hover/focus styles for better UI and accessibility",
              ].map((g) => (
                <li key={g} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#D6C7A1]" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Setup */}
          <section
            id="setup"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl font-extrabold tracking-tight text-white">Setup</h2>
            <p className="mt-2 text-white/70">
              Install Tailwind + PostCSS + Autoprefixer, then generate config files.
            </p>

            <pre className="mt-4 rounded-xl bg-black/60 border border-white/10 text-white/90 p-4 text-sm overflow-auto">
              <code>{`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}</code>
            </pre>
          </section>

          {/* Core utilities */}
          <section
            id="utilities"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Core utilities
            </h2>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["Spacing", "p-4, px-6, mt-3, gap-4"],
                ["Typography", "text-sm, text-xl, font-semibold, leading-relaxed"],
                ["Color", "bg-black/40, text-white/70, border-white/10"],
                ["Shape", "rounded-xl, shadow-sm, backdrop-blur"],
              ].map(([title, ex]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5"
                >
                  <p className="font-bold text-white">{title}</p>
                  <p className="mt-2 text-sm text-white/70 font-mono">{ex}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm font-bold text-white">Try it</p>
              <p className="mt-2 text-white/70">
                Here’s a button using a clean accent similar to your portfolio style.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition">
                  Default
                </button>

                <button className="px-4 py-2 rounded-xl font-semibold text-black bg-[#D6C7A1] hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-[#D6C7A1]/60 focus:ring-offset-2 focus:ring-offset-[#070A0F]">
                  Accent Button
                </button>
              </div>

              <pre className="mt-4 rounded-xl bg-black/60 border border-white/10 text-white/90 p-4 text-xs overflow-auto">
                <code>{`<button className="px-4 py-2 rounded-xl font-semibold text-black bg-[#D6C7A1] hover:brightness-95 transition">
  Accent Button
</button>`}</code>
              </pre>
            </div>
          </section>

          {/* Responsive */}
          <section
            id="responsive"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Responsive design
            </h2>
            <p className="mt-2 text-white/70">
              Tailwind supports breakpoints using prefixes like{" "}
              <span className="font-mono text-white/90">sm:</span>,{" "}
              <span className="font-mono text-white/90">md:</span>,{" "}
              <span className="font-mono text-white/90">lg:</span>.
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Mobile", "Tablet", "Desktop"].map((label) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5"
                >
                  <p className="font-bold text-white">{label}</p>
                  <p className="text-sm text-white/70 mt-2">
                    Layout adapts automatically.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Hover & focus */}
          <section
            id="states"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Hover & focus
            </h2>
            <p className="mt-2 text-white/70">
              Use <span className="font-mono text-white/90">hover:</span> for hover styles and{" "}
              <span className="font-mono text-white/90">focus:ring</span> for accessibility.
            </p>

            <button className="mt-4 px-4 py-2 rounded-xl font-semibold text-black bg-[#D6C7A1] hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-[#D6C7A1]/60 focus:ring-offset-2 focus:ring-offset-[#070A0F]">
              Hover + Focus Me
            </button>
          </section>

          {/* Practice */}
          <section
            id="practice"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Practice
            </h2>
            <p className="mt-2 text-white/70">
              Try making a “card” with border + blur + padding using utilities only.
            </p>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="font-bold text-white">Your Challenge Card</p>
              <p className="text-sm text-white/70 mt-2">
                Add: rounded-2xl, border-white/10, bg-black/30, p-5
              </p>
            </div>
          </section>

          {/* Summary */}
          <section
            id="summary"
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
          >
            <h2 className="text-xl font-extrabold tracking-tight text-white">
              Summary
            </h2>
            <ul className="mt-4 space-y-2 text-white/75">
              <li>• Tailwind = utility classes instead of custom CSS</li>
              <li>• Responsive design uses sm/md/lg prefixes</li>
              <li>• Hover/focus states improve UX and accessibility</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#overview"
                className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 transition font-semibold"
              >
                Review lesson
              </a>
              <button className="px-5 py-3 rounded-xl bg-[#D6C7A1] text-black font-semibold hover:brightness-95 transition">
                Next lesson →
              </button>
            </div>
          </section>

          <footer className="pb-8 text-center text-xs text-white/50">
            Built with Next.js + Tailwind CSS • Lesson-style page
          </footer>
        </main>
      </div>
    </div>
  );
}
