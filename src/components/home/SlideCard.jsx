const SlideCard = ({ module, index, isActive }) => {
  const { imageUrl, title, description } = module;
  return (
    <article className="relative h-[227px] w-[307px] shrink-0 overflow-hidden rounded-lg shadow-xl transition-all duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[#303030]/50" />
      <div className="relative z-10 flex h-full flex-col p-6 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-widest text-white/70">
            {String(index + 1).padStart(2, "0")}
          </span>
          {isActive ? (
            <svg viewBox="0 0 24 24" className="size-5 fill-current">
              <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
            </svg>
          ) : null}
        </div>
        {isActive ? (
          <>
            <div className="flex flex-1 flex-col justify-center">
              <h3 className="text-center text-xl font-bold leading-tight">
                {title}
              </h3>
            </div>
            <p className="mt-2 text-center text-[10px] font-medium leading-relaxed opacity-60">
              {description}
            </p>
          </>
        ) : (
          <div className="flex flex-1 flex-col justify-end">
            <h3 className="text-center text-xl font-bold leading-tight opacity-60">
              {title}
            </h3>
          </div>
        )}
      </div>
    </article>
  );
};

export default SlideCard;
