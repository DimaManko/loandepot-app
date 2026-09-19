function VideoButton({ openVideoModal }) {
  return (
    <button
      type="button"
      className="flex items-center gap-6 group"
      onClick={openVideoModal}
    >
      <div className="size-14 rounded-full bg-brand-purple flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
        <svg
          viewBox="0 0 24 24"
          className="size-5 fill-current translate-x-0.5"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
      <span className="text-sm font-extrabold tracking-widest text-black uppercase">
        Play video
      </span>
    </button>
  );
}

export default VideoButton;
