import { SideNav } from "../layout/SideNav";
import { HeroHeader } from "./HeroHeader";
import { HeroContent } from "./HeroContent";
import { HeroSlider } from "./HeroSlider";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";

import { useGetDataHeroSectionQuery } from "../../store/services/api";
import { useState } from "react";

export function HeroSection() {
  const [isOpenVideo, setIsOpenVideo] = useState(false);

  const {
    data: { content, exploreControl } = {},
    isLoading,
    isError,
  } = useGetDataHeroSectionQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden bg-white font-sans text-black">
      {/* Левый сайдбар (SideNav) */}
      <SideNav />

      {/* Основная область (с отступом под сайдбар на десктопе) */}
      <div className="flex flex-1 flex-col lg:pl-14">
        {/* Шапка (Header) - Высота 93px */}
        <HeroHeader />

        {/* Контентная область */}
        <div className="relative flex flex-1 flex-col overflow-hidden">
          {/* Сетка Hero */}
          <HeroContent {...content} />

          {/* Блок со слайдами (Slider Section) - min-height 307px, 104px margin right */}
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
