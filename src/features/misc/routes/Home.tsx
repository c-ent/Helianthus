import sunflowers from '@/assets/images/sunflowers.jpg';
import sunflowersfull from '@/assets/images/sunflowers-full.webp';
import cafe from '@/assets/images/gallery/cafe.webp';
import blue from '@/assets/images/gallery/blue.webp';
import fields from '@/assets/images/gallery/fields.webp';
import vangogh from '@/assets/images/vangogh.webp';
import { Petals } from '@/components/Petals';
import { Header } from '@/components/Header';
import { SectionHeading } from '@/components/SectionHeading';
import { GalleryCard } from '@/components/GalleryCard';

const GALLERY_ITEMS = [
  {
    image: cafe,
    alt: "Café Terrace at Night - Van Gogh's painting of a night café with yellow lighting",
    label: "café-terras 's nachts",
    number: '01',
    title: 'Café Terrace at Night',
    staggerClass: '',
  },
  {
    image: blue,
    alt: "Blue Irises - Van Gogh's painting of vibrant blue irises in a garden",
    label: "l'iris",
    number: '02',
    title: 'Irises',
    staggerClass: 'md:pt-[150px]',
  },
  {
    image: fields,
    alt: "Wheat Fields - Van Gogh's painting of golden wheat fields under a blue sky",
    label: 'champs de blé',
    number: '03',
    title: 'Wheat Fields',
    staggerClass: 'md:pt-[300px]',
  },
] as const;

export const Home = () => (
  <div id="top">
    <a href="#main-content" className="skip-link">
      Skip to content
    </a>

    <Header />
    <Petals />

    <div className="relative overflow-hidden">
      <div className="relative mx-auto max-w-content px-5 py-5 md:px-10">
      <main id="main-content">
        <section
          aria-labelledby="hero-heading"
          className="flex min-h-[320px] flex-col pb-10 md:min-h-[980px] md:pb-28"
        >
          <h1
            id="hero-heading"
            className="w-full text-center font-Moglan text-[clamp(50px,20vw,300px)] leading-tight text-helianthus-orange underline decoration-2 underline-offset-[clamp(15px,5vw,50px)] md:text-[clamp(100px,20vw,300px)]"
          >
            Helianthus
          </h1>
          <div
            className="mt-4 w-full flex-1 rounded-sm bg-cover bg-center"
            style={{ backgroundImage: `url(${sunflowers})` }}
            role="img"
            aria-label="Van Gogh's Sunflowers painting"
          />
          <p className="mt-3 text-end text-lg text-helianthus-gray-dark md:text-2xl">
            Van Gogh&apos;s &apos;Sunflowers&apos; (1888)
          </p>
        </section>

        <section id="introduction" className="section-padding scroll-mt-24 space-y-10">
          <SectionHeading>introduction</SectionHeading>

          <div className="flex justify-end">
            <p className="body-text max-w-[1000px]">
              Van Gogh&apos;s artistic legacy is often associated with his masterpieces from Arles,
              where the sun-drenched landscapes and vibrant yellow hues of works like
              &quot;Sunflowers,&quot; &quot;The Bedroom,&quot; and &quot;The Yellow House&quot; capture
              the essence of southern light and life. However, beyond these iconic pieces, Van
              Gogh&apos;s palette varied greatly throughout his career, from the earthy tones of his
              Dutch period to the lighter, brighter hues of his Parisian works, showcasing his
              versatility and evolution as an artist.
            </p>
          </div>
        </section>

        <section id="galleria" className="section-padding scroll-mt-24 space-y-10">
          <SectionHeading>galleria</SectionHeading>

          <div className="flex w-full flex-col justify-between gap-10 md:flex-row md:gap-10">
            {GALLERY_ITEMS.map((item) => (
              <GalleryCard key={item.number} {...item} />
            ))}
          </div>
        </section>

        <section className="section-padding mb-10 space-y-5 bg-helianthus-cream p-5 md:mb-28 md:space-y-10 md:p-20">
          <img
            src={sunflowersfull}
            alt="Sunflowers full painting by Van Gogh"
            className="gallery-image h-[300px] md:h-[800px]"
            loading="lazy"
          />

          <p className="text-base text-helianthus-gray-dark md:text-3xl">
            <i>Sunflowers</i> by Van Gogh remains a remarkable testament to his genius, capturing the
            timeless beauty and vitality of nature.
          </p>
        </section>

        <section className="mb-10 border-2 border-helianthus-gold p-5 md:p-20">
          <h2 className="text-center font-Moglan text-[50px] text-helianthus-gold md:text-[100px]">
            Van Gogh
          </h2>
          <div className="overflow-hidden">
            <img
              src={vangogh}
              alt="Portrait of Vincent van Gogh"
              className="h-[250px] w-full object-contain transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
          <p className="body-text mx-auto mt-10 max-w-[800px] text-center md:text-xl">
            Vincent Willem van Gogh was a Dutch Post-Impressionist painter who is among the most
            famous and influential figures in the history of Western art. In just over a decade, he
            created approximately 2100 artworks, including around 860 oil paintings, most of them in
            the last two years of his life.
          </p>
        </section>
      </main>

      <footer className="pb-8 text-center text-helianthus-gray">
        <a
          href="https://c-ent.dev/"
          className="font-Moglan text-2xl text-black transition-colors duration-300 hover:text-helianthus-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-helianthus-orange focus-visible:ring-offset-2 md:text-[30px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cent
        </a>
      </footer>
      </div>
    </div>
  </div>
);
