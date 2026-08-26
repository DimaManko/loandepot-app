export function ExploreAllControl() {
  return (
    <div className="flex w-16 flex-col items-center border-l border-white/10 bg-white py-10">
      <div className="mb-8 flex size-8 items-center justify-center rounded-full bg-brand-green">
        <svg
          viewBox="0 0 24 24"
          className="size-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-[10px] font-black tracking-[0.3em] text-brand-purple-dark uppercase [writing-mode:vertical-rl] whitespace-nowrap">
        Explore all modules
      </span>
    </div>
  );
}
