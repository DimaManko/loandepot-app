import { AppShell } from "../layout/AppShell";
import { HeroHeader } from "./HeroHeader";
import { HeroContent } from "./HeroContent";
import { HeroSlider } from "./HeroSlider";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import VideoModal from "../ui/VideoModal";

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
    <AppShell variant="fixed">
      {/* Шапка (Header) - Высота 93px */}
      <HeroHeader />

      {/* Контентная область */}
      <div className="relative flex flex-1 flex-col overflow-hidden">
        {/* Сетка Hero */}
        <HeroContent
          {...content}
          onOpenVideoModal={() => setIsOpenVideo(true)}
        />

        {/* Блок со слайдами (Slider Section) - min-height 307px, 104px margin right */}
        <HeroSlider />
        <VideoModal
          onCloseVideoModal={() => setIsOpenVideo(false)}
          isOpen={isOpenVideo}
          videoLink={content.videoUrl}
        />
      </div>
    </AppShell>
  );
}
