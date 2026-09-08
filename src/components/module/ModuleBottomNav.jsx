/**
 * Нижняя навигация по модулям (ModuleBottomNav).
 *
 * По карте architecture.md: `items`, `activeId`, `onSelect`. Пока номера
 * соседних модулей (prev/next) и подписи захардкожены. Из RTK Query доступен
 * только `number` текущего модуля — он выводится в центре. Кнопки без
 * обработчиков (чистая вёрстка).
 */
export function ModuleBottomNav({ currentNumber = "03" }) {
  return (
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
        Module {currentNumber}: Local Marketing Description
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
  );
}

export default ModuleBottomNav;
