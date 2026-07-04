import { motion } from 'framer-motion';

const PETAL_COUNT = 60;

export const Petals = () => (
  <div
    className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    aria-hidden="true"
  >
    {Array.from({ length: PETAL_COUNT }).map((_, i) => (
      <motion.div
        key={i}
        className="petal"
        style={{
          left: `${Math.random() * 100}vw`,
        }}
        variants={{
          hidden: {
            x: '100vw',
            y: '100vh',
            opacity: 0.8,
            rotate: Math.random() * 360,
          },
          visible: {
            x: '-100vw',
            y: '-100vh',
            opacity: 0.8,
            rotate: Math.random() * 360,
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          repeat: Infinity,
          duration: Math.random() * 30 + 30,
          delay: Math.random() * 7,
        }}
      />
    ))}
  </div>
);
