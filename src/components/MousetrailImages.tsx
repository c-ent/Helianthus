import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import trail1 from '@/assets/images/trails/trail1.webp';
import trail2 from '@/assets/images/trails/trail2.webp';
import trail3 from '@/assets/images/trails/trail3.webp';
import trail4 from '@/assets/images/trails/trail4.webp';
import trail5 from '@/assets/images/trails/trail5.webp';
import trail6 from '@/assets/images/trails/trail6.webp';

export const MousetrailImages = () => {
    const [positions, setPositions] = useState<{ x: number; y: number; id: number }[]>([]);
    const trails = [trail1, trail2, trail3, trail4, trail5, trail6];
    
    useEffect(() => {
      let lastPosition = { x: 0, y: 0 };
      let nextId = 0;
    
      const handleMouseMove = (event: MouseEvent) => {
        const currentPosition = { x: event.clientX, y: event.clientY };
    
        const distance = Math.sqrt(
          Math.pow(currentPosition.x - lastPosition.x, 2) +
          Math.pow(currentPosition.y - lastPosition.y, 2)
        );
    
        const thresholdDistance = 70;
    
        if (distance > thresholdDistance) {
          setPositions((prevPositions) => [
            ...prevPositions,
            { x: currentPosition.x, y: currentPosition.y, id: nextId++ },
          ]);
          lastPosition = currentPosition; 
        }
      };
    
      document.addEventListener('mousemove', handleMouseMove);
    
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    // Remove trail elements after they fade out
    const handleAnimationComplete = (id: number) => {
      setPositions(prev => prev.filter(pos => pos.id !== id));
    };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999, 
      }}
    >
      <AnimatePresence>
        {positions.map((position) => (
          <motion.div
            key={position.id}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => handleAnimationComplete(position.id)}
            style={{
              position: 'absolute',
              top: position.y - 40,
              left: position.x - 40,
              width: '80px',
              height: '80px',
              backgroundImage: `url(${trails[position.id % trails.length]})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

