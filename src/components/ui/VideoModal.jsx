import { useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * UI-компонент модального окна с видео (чистая верстка).
 *
 * Только JSX без логики: без useState/useEffect, без обработчиков кликов,
 * без пропсов. Все данные (ссылка на видео, крестик) захардкожены.
 */
export function VideoModal({ onCloseVideoModal, isOpen, videoLink }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onCloseVideoModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onCloseVideoModal]);

  return isOpen
    ? createPortal(
        // Фиксированный оверлей на весь экран с полупрозрачным тёмным фоном и размытием
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onCloseVideoModal}
        >
          {/* Контейнер модального окна — адаптивное соотношение сторон 16:9 */}
          <div
            className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка-крестик в углу */}
            <button
              onClick={onCloseVideoModal}
              type="button"
              aria-label="Закрыть видео"
              className="absolute top-3 right-3 z-10 flex size-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* YouTube-видео */}
            <iframe
              className="absolute inset-0 size-full"
              src={videoLink}
              title="Видео"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>,
        document.body,
      )
    : null;
}

export default VideoModal;
