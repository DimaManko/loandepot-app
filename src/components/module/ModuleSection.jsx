export function ModuleSection() {
  return (
    // Главный контейнер на весь экран
    <div className="flex w-full min-h-screen lg:h-screen bg-brand-light font-sans overflow-hidden">
      {/* 
        Глобальный левый сайдбар (SideNav). 
        В будущем разработчик вынесет его в layout/AppShell.jsx 
      */}
      <aside className="z-20 flex w-14 shrink-0 flex-col items-center border-r border-brand-gray-light bg-white py-6">
        {/* Логотип — как в SideNav */}
        <div className="flex size-8 items-center justify-center">
          <svg
            viewBox="0 0 32 32"
            className="size-6 text-brand-green"
            fill="currentColor"
          >
            <path d="M22.6 11.3c0-3.1-2.5-5.6-5.6-5.6H8.5v20.6h8.5c3.1 0 5.6-2.5 5.6-5.6v-9.4zM14.1 20.7h-1.4v-9.4h1.4v9.4z" />
          </svg>
        </div>

        {/* Индикатор текущего модуля — вертикальный текст как в SideNav */}
        <div className="mt-auto flex flex-col items-center gap-6">
          <span className="rotate-180 text-[10px] font-bold tracking-[0.2em] text-brand-purple uppercase [writing-mode:vertical-rl]">
            Module #3
          </span>
          <span className="text-[11px] font-medium text-brand-gray">03</span>
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

      {/* Основной контент страницы */}
      <main className="flex-1 flex flex-col lg:flex-row">
        {/* Левая колонка — Тёмная, с фоном и видео-карточками */}
        <section className="relative z-10 flex w-full flex-col justify-start bg-black py-12 pl-[65px] pr-[44px] pt-16 lg:w-1/2">
          {/* Фоновое изображение */}
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000"
            alt="Module background"
            className="absolute inset-0 size-full object-cover opacity-50 pointer-events-none -z-10"
          />

          {/* Блок с карточками (выровнен по левому краю, ограничена ширина) */}
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
        </section>

        {/* Правая колонка — Светлая, контент и навигация */}
        <section className="w-full lg:w-1/2 flex flex-col bg-white overflow-hidden">
          {/* Шапка (Schedule) */}
          <header className="flex h-[93px] shrink-0 items-center justify-end gap-8 px-12">
            <button
              type="button"
              id="schedule-text"
              className="text-[11px] font-bold tracking-[0.15em] uppercase hover:text-brand-purple"
            >
              Schedule an appointment
            </button>
            <div className="grid cursor-pointer grid-cols-3 gap-1 group">
              <span className="size-1 rounded-full bg-brand-purple" />
              <span className="size-1 rounded-full bg-brand-purple" />
              <span className="size-1 rounded-full bg-brand-purple" />
              <span className="size-1 rounded-full bg-brand-purple" />
              <span className="size-1 rounded-full bg-brand-purple" />
              <span className="size-1 rounded-full bg-brand-purple" />
              <span className="size-1 rounded-full bg-brand-purple" />
              <span className="size-1 rounded-full bg-brand-purple" />
              <span className="size-1 rounded-full bg-brand-purple" />
            </div>
          </header>

          {/* Основная контентная часть */}
          <div className="flex flex-1 flex-col justify-start px-12 pb-8 lg:px-20">
            <h1 className="mb-6 text-4xl font-black tracking-tight text-black lg:text-5xl">
              3. Local Marketing
            </h1>

            {/* Теги */}
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase bg-brand-purple/10 text-brand-purple">
                Branding
              </span>
              <span className="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase bg-brand-purple/10 text-brand-purple">
                Marketing
              </span>
              <span className="px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase bg-brand-purple/10 text-brand-purple">
                Personal
              </span>
            </div>

            {/* Описание */}
            <p className="mb-6 max-w-xl text-sm font-bold leading-relaxed text-black">
              This module focuses on how to leverage your local muscle and
              generate leads in your local community. Topics include areas to
              develop like: your local gym, church, favorite local restaurant or
              bar, etc.. Along with local business networking groups, community
              involvement and charity work, local businesses (lender express and
              lender advantage), local lunch n learns, first time homebuyer
              education, VA and or Reno events, and more.
            </p>

            {/* Форма/Кнопка "How are you showing up?" */}
            <div className="mb-6 flex max-w-md items-center justify-between rounded-lg border border-brand-gray-light p-5">
              <span className="font-extrabold text-black text-sm">
                How are you showing up?
              </span>
              <button
                type="button"
                className="size-7 rounded-full bg-brand-green-alt flex items-center justify-center text-white shrink-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 stroke-current stroke-[3] fill-none"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>

            {/* Скачивание PDF */}
            <div className="flex max-w-xl items-center justify-between border-t border-brand-gray-light pt-6">
              <div className="flex items-start gap-4">
                <div className="size-20 bg-brand-gray-light shrink-0" />
                <div>
                  <h4 className="font-extrabold text-black text-sm mb-1.5">
                    Ebook Name
                  </h4>
                  <p className="text-xs text-brand-gray font-bold max-w-[240px] leading-snug">
                    This module focuses on how to leverage your local muscle and
                    generate leads in your local community.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="border border-brand-gray-light bg-white text-black text-xs font-bold py-3 px-5 rounded-md flex items-center gap-4 hover:bg-brand-gray-light/20 transition-colors"
              >
                <span>Download PDF</span>
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 text-brand-green-alt stroke-current stroke-[3] fill-none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Нижний бар навигации (прибит к низу правой колонки) */}
          <footer className="h-20 shrink-0 border-t border-brand-gray-light flex bg-white w-full">
            {/* Кнопка "Prev" */}
            <button
              type="button"
              className="flex-1 flex items-center justify-start gap-4 px-8 border-r border-brand-gray-light hover:bg-brand-gray-light/10 text-xs font-bold text-black"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4 fill-none stroke-brand-gray-light stroke-[3]"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span className="text-brand-gray">02</span>
              <span>Prev module</span>
            </button>

            {/* Текущий модуль */}
            <div className="flex-[2] flex items-center justify-center text-xs font-extrabold text-black">
              Module 3: Local Marketing Description
            </div>

            {/* Кнопка "Next" */}
            <button
              type="button"
              className="flex-1 flex items-center justify-end gap-4 px-8 border-l border-brand-gray-light hover:bg-brand-gray-light/10 text-xs font-bold text-black"
            >
              <span>Next module</span>
              <span className="text-brand-gray">04</span>
              <svg
                viewBox="0 0 24 24"
                className="size-4 fill-none stroke-brand-gray-light stroke-[3]"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default ModuleSection;
