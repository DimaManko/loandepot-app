/**
 * Универсальный компонент загрузки (Loader).
 *
 * Поддерживает несколько вариантов отображения:
 * - "spinner" — классический крутящийся индикатор (по умолчанию);
 * - "dots" — три пульсирующие точки;
 * - "skeleton" — скелетон-заглушка для контента.
 *
 * Пропсы:
 * - variant: "spinner" | "dots" | "skeleton" (по умолчанию "spinner");
 * - label: текст под индикатором (по умолчанию "Загрузка...");
 * - showLabel: показывать ли подпись (по умолчанию true);
 * - fullScreen: растянуть на весь экран с полупрозрачным фоном (по умолчанию false);
 * - className: дополнительные классы для корневого контейнера;
 * - size: размер индикатора "sm" | "md" | "lg" (по умолчанию "md").
 */
export function Loader({
  variant = "spinner",
  label = "Загрузка...",
  showLabel = true,
  fullScreen = false,
  className = "",
  size = "md",
}) {
  const sizeClasses = {
    sm: "size-5 border-2",
    md: "size-10 border-[3px]",
    lg: "size-14 border-4",
  };

  const dotSizeClasses = {
    sm: "size-2",
    md: "size-3",
    lg: "size-4",
  };

  const labelSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const containerClasses = fullScreen
    ? "fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-white/80 backdrop-blur-sm"
    : "flex flex-col items-center justify-center gap-4";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={`${containerClasses} ${className}`}
    >
      {variant === "spinner" && (
        <div
          className={`${sizeClasses[size]} animate-spin rounded-full border-brand-gray-light border-t-brand-purple`}
        />
      )}

      {variant === "dots" && (
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`${dotSizeClasses[size]} animate-bounce rounded-full bg-brand-purple`}
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      )}

      {variant === "skeleton" && (
        <div className="w-full max-w-md space-y-4">
          <div className="h-4 w-3/4 animate-pulse rounded bg-brand-gray-light" />
          <div className="h-4 w-full animate-pulse rounded bg-brand-gray-light" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-brand-gray-light" />
          <div className="h-40 w-full animate-pulse rounded-lg bg-brand-gray-light" />
        </div>
      )}

      {showLabel && (
        <span
          className={`${labelSizeClasses[size]} font-semibold tracking-wide text-brand-gray`}
        >
          {label}
        </span>
      )}

      <span className="sr-only">{label}</span>
    </div>
  );
}

export default Loader;
