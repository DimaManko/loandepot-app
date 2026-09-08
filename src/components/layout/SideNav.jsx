/**
 * Переиспользуемый левый навигационный сайдбар (SideNav).
 *
 * Используется на всех страницах (Hero, модули) через layout/AppShell.
 *
 * Пропсы:
 * - variant: "fixed" | "flex" — позиционирование (см. AppShell):
 *     "fixed" — фиксированный сайдбар (скрыт на мобильных, контент с lg:pl-14);
 *     "flex" — сайдбар в потоке (flex-элемент рядом с контентом).
 * - label: вертикальный текст (по умолчанию "Show Up: Evolve").
 * - number: номер текущей секции/модуля (по умолчанию "01").
 * - onLogoClick: клик по логотипу → первая секция (подключает разработчик, шаг 3).
 * - onNextClick: клик по стрелке → следующая страница (подключает разработчик, шаг 3).
 */
export function SideNav({
  variant = "fixed",
  label = "Show Up: Evolve",
  number = "01",
  onLogoClick,
  onNextClick,
}) {
  const isFlex = variant === "flex";

  const asideClasses = isFlex
    ? "z-20 flex w-14 shrink-0 flex-col items-center border-r border-brand-gray-light bg-white py-6"
    : "fixed top-0 left-0 z-50 hidden h-full w-14 flex-col items-center border-r border-brand-gray-light bg-white py-6 lg:flex";

  return (
    <aside className={asideClasses}>
      {/* Логотип — клик ведёт на первую секцию */}
      <button
        type="button"
        onClick={onLogoClick}
        aria-label="На первую секцию"
        className="flex size-8 items-center justify-center"
      >
        <svg
          viewBox="0 0 32 32"
          className="size-6 text-brand-green"
          fill="currentColor"
        >
          <path d="M22.6 11.3c0-3.1-2.5-5.6-5.6-5.6H8.5v20.6h8.5c3.1 0 5.6-2.5 5.6-5.6v-9.4zM14.1 20.7h-1.4v-9.4h1.4v9.4z" />
        </svg>
      </button>

      {/* Индикатор текущей секции — вертикальный текст */}
      <div className="mt-auto flex flex-col items-center gap-6">
        <span className="rotate-180 text-[10px] font-bold tracking-[0.2em] text-brand-purple uppercase [writing-mode:vertical-rl]">
          {label}
        </span>
        <span className="text-[11px] font-medium text-brand-gray">
          {number}
        </span>
        <button
          type="button"
          onClick={onNextClick}
          aria-label="Следующая страница"
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

export default SideNav;
