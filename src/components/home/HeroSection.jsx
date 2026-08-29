import { SideNav } from "../layout/SideNav";
import { HeroHeader } from "./HeroHeader";
import { HeroContent } from "./HeroContent";
import { HeroSlider } from "./HeroSlider";

export function HeroSection() {
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
          <HeroContent />

          {/* Блок со слайдами (Slider Section) - min-height 307px, 104px margin right */}
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
