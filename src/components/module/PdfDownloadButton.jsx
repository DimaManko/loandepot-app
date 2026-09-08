/**
 * Блок скачивания PDF модуля (PdfDownloadButton).
 *
 * По карте architecture.md: `label`, `onClick` (URL не хардкодить после шага 3).
 * Пока вёрстка статичная — название и описание PDF захардкожены до расширения
 * модели данных (поля pdfUrl/pdfName). Кнопка без обработчика (чистая вёрстка).
 */
export function PdfDownloadButton({ label = "Download PDF" }) {
  return (
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
        <span>{label}</span>
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
  );
}

export default PdfDownloadButton;
