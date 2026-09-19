export function HeroHeader() {
  return (
    <header className="flex h-[93px] shrink-0 items-center justify-between px-10">
      <div className="text-xl font-bold tracking-tight">
        showup:<span className="text-brand-purple">evolve</span>
      </div>
      <div className="flex items-center gap-8">
        <button
          type="button"
          id="schedule-text"
          className="text-[11px] font-bold tracking-[0.15em] uppercase hover:text-brand-purple"
        >
          Schedule an appointment
        </button>
        <div className="grid grid-cols-3 gap-1 cursor-pointer group">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="size-1 rounded-full bg-brand-purple" />
          ))}
        </div>
      </div>
    </header>
  );
}
