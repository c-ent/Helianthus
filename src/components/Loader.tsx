import icon from '@/assets/images/icon.svg';

export const Loader = () => (
  <div
    className="flex h-screen w-screen items-center justify-center bg-white"
    role="status"
    aria-live="polite"
    aria-label="Loading"
  >
    <img
      src={icon}
      alt=""
      className="h-12 w-12 animate-spin md:h-16 md:w-16"
      aria-hidden="true"
    />
  </div>
);
