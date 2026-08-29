/**
 * Универсальный компонент отображения ошибки (ErrorMessage).
 *
 * Пропсы:
 * - title: заголовок ошибки (по умолчанию "Что-то пошло не так");
 * - message: подробное описание ошибки (по умолчанию "Не удалось загрузить данные. Попробуйте ещё раз.");
 * - error: объект ошибки (например, из RTK Query) — из него извлекается статус и текст;
 * - onRetry: функция повторной попытки (если передана, отображается кнопка "Повторить");
 * - fullScreen: растянуть на весь экран (по умолчанию false);
 * - className: дополнительные классы для корневого контейнера.
 */
export function ErrorMessage({
  title = "Что-то пошло не так",
  message = "Не удалось загрузить данные. Попробуйте ещё раз.",
  error,
  onRetry,
  fullScreen = false,
  className = "",
}) {
  // Извлекаем статус и текст из объекта ошибки RTK Query / fetch
  const status = error?.status;
  const errorText =
    error?.data?.message ||
    error?.error ||
    (typeof error === "string" ? error : null);

  const containerClasses = fullScreen
    ? "fixed inset-0 z-50 flex items-center justify-center bg-white/80 p-6 backdrop-blur-sm"
    : "flex items-center justify-center p-6";

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`${containerClasses} ${className}`}
    >
      <div className="flex w-full max-w-md flex-col items-center rounded-lg border border-red-200 bg-red-50 p-8 text-center shadow-sm">
        {/* Иконка ошибки */}
        <div className="flex size-14 items-center justify-center rounded-full bg-red-100">
          <svg
            viewBox="0 0 24 24"
            className="size-7 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        {/* Заголовок */}
        <h3 className="mt-4 text-lg font-bold text-brand-purple-dark">
          {title}
        </h3>

        {/* Статус ошибки, если доступен */}
        {status ? (
          <span className="mt-2 rounded bg-red-100 px-2 py-0.5 text-xs font-bold tracking-widest text-red-600 uppercase">
            Ошибка {status}
          </span>
        ) : null}

        {/* Описание */}
        <p className="mt-3 text-sm font-medium leading-relaxed text-brand-gray">
          {errorText || message}
        </p>

        {/* Кнопка повторной попытки */}
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="mt-6 w-fit rounded-[2px] bg-brand-purple px-8 py-3 text-[10px] font-bold tracking-[0.2em] text-white uppercase transition-all hover:bg-brand-purple-dark"
          >
            Повторить
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default ErrorMessage;
