import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import icon from '@/assets/images/icon.svg';

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Intro', href: '#introduction' },
  { label: 'Galleria', href: '#galleria' },
] as const;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const mobileMenu =
    isMenuOpen &&
    createPortal(
      <div
        id="mobile-navigation"
        className="fixed inset-0 z-[100] flex h-[100dvh] w-screen flex-col bg-white md:hidden"
        style={{ backgroundColor: '#ffffff' }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex shrink-0 justify-end px-5 py-5">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-md text-helianthus-gray transition-colors hover:text-helianthus-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-helianthus-orange focus-visible:ring-offset-2"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <span className="relative block h-6 w-6" aria-hidden="true">
              <span className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex min-h-0 flex-1 items-center justify-center"
        >
          <ul className="flex flex-col items-center gap-10 font-Moglan">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-5xl text-helianthus-gray transition-colors duration-200 hover:text-helianthus-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-helianthus-orange focus-visible:ring-offset-2 sm:text-6xl"
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>,
      document.body,
    );

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-content items-center justify-between px-5 md:h-[5.25rem] md:px-10">
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-5 text-base font-Poppins">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="nav-link px-1 py-2">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="nav-link inline-flex h-11 w-11 items-center justify-center rounded-md  md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span className="absolute left-0 top-0 h-0.5 w-5 bg-helianthus-gray" />
            <span className="absolute left-0 top-[7px] h-0.5 w-5 bg-helianthus-gray" />
            <span className="absolute left-0 top-[14px] h-0.5 w-5 bg-helianthus-gray" />
          </span>
        </button>

        <a
          href="#top"
          className="group flex items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-helianthus-orange focus-visible:ring-offset-2"
          aria-label="Helianthus home"
        >
          <img
            src={icon}
            alt=""
            className="h-[30px] w-[30px] object-contain group-hover:animate-spin md:h-[50px] md:w-[50px]"
          />
        </a>
      </div>

      {mobileMenu}
    </header>
    <div className="h-[4.75rem] md:h-[5.25rem]" aria-hidden="true" />
    </>
  );
};
