import { AppShell } from "../layout/AppShell";
import { HeroHeader } from "./HeroHeader";
import { HeroContent } from "./HeroContent";
import { HeroSlider } from "./HeroSlider";
import Loader from "../ui/Loader";
import ErrorMessage from "../ui/ErrorMessage";
import VideoModal from "../ui/VideoModal";

import useModal from "../../hooks/useModal";

import { useGetDataHeroSectionQuery } from "../../store/services/api";

export function HeroSection() {
  const {
    isOpenModal: isVideoOpen,
    closeModal: closeVideo,
    openModal: openVideo,
  } = useModal(false);

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
        <HeroContent {...content} onOpenVideoModal={openVideo} />

        {/* Блок со слайдами (Slider Section) - min-height 307px, 104px margin right */}
        <HeroSlider />
        <VideoModal
          onCloseVideoModal={closeVideo}
          isOpen={isVideoOpen}
          videoUrl={content.videoUrl}
        />
      </div>
    </AppShell>
  );
}
