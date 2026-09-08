import { useParams } from "react-router-dom";
import { useGetModuleByIdQuery } from "../../store/services/api";

import { AppShell } from "../layout/AppShell";
import { ModuleBadgeList } from "./ModuleBadgeList";
import { ModuleVideoPair } from "./ModuleVideoPair";
import { PdfDownloadButton } from "./PdfDownloadButton";
import { ModuleBottomNav } from "./ModuleBottomNav";

export function ModuleSection() {
  const { modulesId } = useParams();

  const { data: { number, title, description, imageUrl } = {} } =
    useGetModuleByIdQuery(`module-${modulesId}`);

  return (
    <AppShell variant="flex" sidebar={{ label: `Module #${number}`, number }}>
      {/* Левая колонка — Тёмная, с фоном и видео-карточками */}
      <section className="relative z-10 flex w-full flex-col justify-start bg-black py-12 pl-[65px] pr-[44px] pt-16 lg:w-1/2">
        {/* Фоновое изображение модуля */}
        <img
          src={imageUrl}
          alt="Module background"
          className="absolute inset-0 size-full object-cover opacity-50 pointer-events-none -z-10"
        />

        {/* Пара видео-карточек (Show up / Evolve) + кнопка Share */}
        <ModuleVideoPair />
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
            {number}. {title}
          </h1>

          {/* Теги модуля */}
          <ModuleBadgeList />

          {/* Описание */}
          <p className="mb-6 max-w-xl text-sm font-bold leading-relaxed text-black">
            {description}
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
          <PdfDownloadButton />
        </div>

        {/* Нижний бар навигации (прибит к низу правой колонки) */}
        <ModuleBottomNav currentNumber={number} />
      </section>
    </AppShell>
  );
}

export default ModuleSection;
