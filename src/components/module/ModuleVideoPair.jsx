/**
 * Пара видео-карточек модуля (ModuleVideoPair).
 *
 * По карте architecture.md: primary/secondary видео, `secondaryLocked`.
 * Пока вёрстка статичная (Show up / Evolve) — в модели данных ещё нет полей
 * для видео, поэтому компонент без пропсов. Связывание с API — задача шага 3.
 */
export function ModuleVideoPair() {
  return (
    <div className="flex w-full flex-col gap-9">
      {/* Видео 1: Show up */}
      <div className="w-full rounded-xl bg-white p-8 shadow-xl lg:h-[242px] lg:w-[490px] lg:p-10">
        <h3 className="text-3xl font-extrabold text-black mb-10 tracking-tight">
          Show up
        </h3>
        <button type="button" className="flex items-center gap-6 group">
          <div className="size-14 rounded-full bg-brand-purple flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <svg
              viewBox="0 0 24 24"
              className="size-5 fill-current translate-x-0.5"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-sm font-extrabold tracking-widest text-black uppercase">
            Play video
          </span>
        </button>
      </div>

      {/* Видео 2: Evolve (Заблокировано) */}
      <div className="w-full rounded-xl bg-white p-8 shadow-xl lg:h-[242px] lg:w-[490px] lg:p-10">
        <h3 className="text-3xl font-extrabold text-black mb-10 tracking-tight">
          Evolve
        </h3>
        <div className="flex items-center gap-6">
          <div className="size-14 rounded-full bg-brand-gray-light flex items-center justify-center text-brand-gray shrink-0">
            <svg viewBox="0 0 24 24" className="size-6 fill-current">
              <path d="M18 10h-1V7A5 5 0 008 7v3H7a2 2 0 00-2 2v8a2 2 0 002 2h11a2 2 0 002-2v-8a2 2 0 00-2-2zM10 7a3 3 0 116 0v3h-6V7z" />
            </svg>
          </div>
          <p className="text-xs font-bold text-black max-w-[140px] leading-snug">
            Please watch the first video before
          </p>
        </div>
      </div>

      {/* Кнопка Share (выровнена по левому краю под карточками) */}
      <div>
        <button
          type="button"
          className="bg-brand-green text-white font-bold text-sm py-4 px-6 rounded-md flex items-center justify-between gap-8 shadow-lg hover:bg-brand-green-alt transition-colors"
        >
          <span>Share this module</span>
          <svg
            viewBox="0 0 24 24"
            className="size-5 fill-none stroke-current stroke-[2.5]"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ModuleVideoPair;
