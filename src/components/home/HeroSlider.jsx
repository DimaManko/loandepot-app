import { ExploreAllControl } from "./ExploreAllControl";

export function HeroSlider() {
  return (
    <div className="absolute bottom-0 left-0 w-full pr-[104px]">
      {/* Задали фиксированную высоту h-[307px] вместо min-h */}
      <div className="flex h-[307px] w-full max-w-[1251px] overflow-hidden bg-brand-purple shadow-2xl">
        {/* Текстовая навигация */}
        <div className="flex w-[35%] shrink-0 flex-col justify-between p-10">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white">
            Explore 8 Educational Modules To Evolve Your Career
          </h2>
          <div className="flex gap-4">
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border border-white/40 text-white/80 transition-colors hover:bg-white hover:text-brand-purple"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border border-white/40 text-white/80 transition-colors hover:bg-white hover:text-brand-purple"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  d="M9 18l6-6-6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Контейнер для карточек */}
        <div className="flex flex-1 items-center gap-6 overflow-hidden py-6 pr-6">
          <article className="relative h-full w-[280px] shrink-0 overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Module"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative flex h-full flex-col justify-between p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest opacity-60">
                  01
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">
                  Name of the 1st module here
                </h3>
                <p className="mt-2 text-[10px] font-medium leading-relaxed opacity-60">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </article>

          <article className="relative h-full w-[280px] shrink-0 overflow-hidden rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
              alt="Module"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative flex h-full flex-col justify-between p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest opacity-60">
                  02
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M5 12h14m-7-7l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">
                  Name of the 2nd module here
                </h3>
              </div>
            </div>
          </article>

          <article className="relative h-full w-[280px] shrink-0 overflow-hidden rounded-lg opacity-40 grayscale">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
              alt="Module"
              className="absolute inset-0 size-full object-cover"
            />
          </article>
        </div>

        {/* Боковая плашка */}
        <ExploreAllControl />
      </div>
    </div>
  );
}
