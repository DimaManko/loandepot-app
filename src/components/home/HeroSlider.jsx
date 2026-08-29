import { ExploreAllControl } from "./ExploreAllControl";
import { useState } from "react";
import { useGetModulesQuery } from "../../store/services/api";

import SlideCard from "./SlideCard";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data: modules = [], isLoading, isError } = useGetModulesQuery();

  const CARD_STEP = 304;

  function nextSlide() {
    setCurrentSlide((prev) => {
      if (prev >= modules.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }

  function prevSlide() {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  }

  function renderSliderArea() {
    if (isLoading) {
      return (
        <div className="flex h-[307px] w-full max-w-[1251px] items-center justify-center  shadow-2xl">
          <Loader variant="dots" />
        </div>
      );
    }

    if (isError) {
      return (
        <div className="flex h-[307px] w-full max-w-[1251px] items-center justify-center  shadow-2xl">
          <ErrorMessage />
        </div>
      );
    }

    return (
      <div
        className="flex items-center gap-6 transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentSlide * CARD_STEP}px)` }}
      >
        {modules.map((module, i) => {
          const isActive = i === currentSlide;
          return (
            <SlideCard
              key={module.id}
              module={module}
              index={i}
              isActive={isActive}
            />
          );
        })}
      </div>
    );
  }
  const element = renderSliderArea();

  return (
    <div className="absolute bottom-0 left-0 w-full pr-[104px]">
      {/* Задали фиксированную высоту h-[307px] вместо min-h */}
      <div className="flex h-[307px] w-full max-w-[1251px] overflow-hidden bg-brand-purple shadow-2xl">
        {/* Текстовая навигация */}
        <div className="flex w-[35%] shrink-0 flex-col justify-between p-10">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white">
            Explore {modules.length} Educational Modules To Evolve Your Career
          </h2>
          <div className="flex gap-4">
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-full border border-white/40 text-white/80 transition-colors hover:bg-white hover:text-brand-purple"
              onClick={prevSlide}
              disabled={isLoading || isError || modules.length === 0}
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
              onClick={nextSlide}
              disabled={isLoading || isError || modules.length === 0}
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
        <div className="flex flex-1 items-center overflow-hidden pr-6">
          {element}
        </div>

        {/* Боковая плашка */}
        <ExploreAllControl />
      </div>
    </div>
  );
}
