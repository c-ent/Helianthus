type GalleryCardProps = {
  image: string;
  alt: string;
  label: string;
  number: string;
  title: string;
  staggerClass?: string;
};

export const GalleryCard = ({
  image,
  alt,
  label,
  number,
  title,
  staggerClass = '',
}: GalleryCardProps) => (
  <article className={`space-y-2 ${staggerClass}`}>
    <div className="overflow-hidden rounded-sm">
      <img
        src={image}
        alt={alt}
        className="gallery-image"
        loading="lazy"
      />
    </div>

    <div className="inline-block bg-helianthus-blue px-2 py-0.5 text-sm text-white">
      <p>{label}</p>
    </div>

    <div className="flex items-center gap-2 text-helianthus-gold">
      <p className="text-3xl font-medium tabular-nums">{number}</p>
      <p className="text-[20px] md:text-2xl">{title}</p>
    </div>
  </article>
);
