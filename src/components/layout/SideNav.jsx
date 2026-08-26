export function SideNav() {
  return (
    <aside className="fixed top-0 left-0 z-50 hidden h-full w-14 flex-col items-center border-r border-brand-gray-light bg-white py-6 lg:flex">
      <div className="flex size-8 items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          className="size-6 text-brand-green"
          fill="currentColor"
        >
          <path d="M22.6 11.3c0-3.1-2.5-5.6-5.6-5.6H8.5v20.6h8.5c3.1 0 5.6-2.5 5.6-5.6v-9.4zM14.1 20.7h-1.4v-9.4h1.4v9.4z" />
        </svg>
      </div>

      <div className="mt-auto flex flex-col items-center gap-6">
        <span className="rotate-180 text-[10px] font-bold tracking-[0.2em] text-brand-purple uppercase [writing-mode:vertical-rl]">
          Show Up: Evolve
        </span>
        <span className="text-[11px] font-medium text-brand-gray">01</span>
        <button
          type="button"
          className="text-brand-gray-light hover:text-brand-purple"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M19 14l-7 7-7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}
