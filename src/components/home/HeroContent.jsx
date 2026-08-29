export function HeroContent() {
  return (
    <div className="grid flex-1 grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
      {/* Левая часть: Текст */}
      {/* Заменили justify-center на justify-start и добавили pt-12 для смещения вверх */}
      <div className="flex flex-col justify-start pt-12 px-10 lg:px-20 lg:pt-6">
        <h1 className="whitespace-nowrap text-[36px] font-black leading-[1.05] tracking-tight md:text-[48px] lg:text-[58px]">
          Show Up: <span className="text-brand-purple">Evolve</span>
        </h1>
        <p className="mt-6 max-w-sm text-sm font-semibold leading-relaxed text-brand-gray">
          A retail LO's guide to combating digital disruption
        </p>
        <div>
          <button
            type="button"
            className="mt-10 w-fit rounded-[2px] bg-brand-purple px-10 py-4 text-[10px] font-bold tracking-[0.2em] text-white uppercase transition-all hover:bg-brand-purple-dark"
          >
            Get free access
          </button>
        </div>
      </div>

      {/* Правая часть: Видео */}
      <div className="relative h-full">
        <div className="relative h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
            alt="Background"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/5">
            <button
              type="button"
              className="flex size-16 items-center justify-center rounded-full bg-white shadow-2xl transition-transform hover:scale-105"
            >
              <svg
                viewBox="0 0 24 24"
                className="ml-1 size-7 text-brand-purple"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <span className="text-sm font-black tracking-[0.4em] text-white uppercase drop-shadow-md">
              WHY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
