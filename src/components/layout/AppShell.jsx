import { SideNav } from "./SideNav";

/**
 * Общий каркас страницы (AppShell) с левым сайдбаром.
 *
 * Используется на всех страницах (Hero, модули). Содержит переиспользуемый
 * SideNav и оборачивает контент страницы (children).
 *
 * Пропсы:
 * - variant: "fixed" | "flex" — модель вёрстки:
 *     "fixed" — сайдбар фиксированный, контент сдвинут (lg:pl-14), страница
 *               занимает 100% высоты экрана (Hero);
 *     "flex" — сайдбар в потоке (flex-элемент), контент рядом (модули).
 * - sidebar: объект данных для SideNav (label, number, onLogoClick, onNextClick).
 * - children: контент страницы.
 */
export function AppShell({ variant = "fixed", sidebar, children }) {
  const isFlex = variant === "flex";

  const shellClasses = isFlex
    ? "flex w-full min-h-screen lg:h-screen bg-brand-light font-sans overflow-hidden"
    : "relative flex h-screen w-full flex-col overflow-hidden bg-white font-sans text-black";

  return (
    <div className={shellClasses}>
      <SideNav variant={variant} {...sidebar} />

      {isFlex ? (
        <main className="flex-1 flex flex-col lg:flex-row">{children}</main>
      ) : (
        <div className="flex flex-1 flex-col lg:pl-14">{children}</div>
      )}
    </div>
  );
}

export default AppShell;
