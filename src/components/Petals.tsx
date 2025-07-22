import { motion } from 'framer-motion';

export const Petals = () => (
    <>
        {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
            key={i}
            className="petal"
            style={{ 
            left: `${Math.random() * 100}vw`, 
            }}
            variants={{
            hidden: { x: "100vw", y: "100vh", opacity: 0.8, rotate: Math.random() * 360 },
            visible: { x: "-100vw", y: "-100vh", opacity: 0.8, rotate: Math.random() * 360 },
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
    </>
);