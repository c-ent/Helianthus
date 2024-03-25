import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import trail1 from '../assets/images/trails/trail1.jpg';
import trail2 from '../assets/images/trails/trail2.jpg';
import trail3 from '../assets/images/trails/trail3.jpg';
import trail4 from '../assets/images/trails/trail4.jpg';
import trail5 from '../assets/images/trails/trail5.jpg';
import trail6 from '../assets/images/trails/trail6.jpg';

const Mousetrail = () => {
    const [positions, setPositions] = useState([]);
    const trails = [trail1, trail2, trail3, trail4, trail5, trail6];
    useEffect(() => {
      let lastPosition = { x: 0, y: 0 };
    
      const handleMouseMove = (event) => {
        const currentPosition = { x: event.clientX, y: event.clientY };
    
        // Calculate the distance between the current and last position
        const distance = Math.sqrt(
          Math.pow(currentPosition.x - lastPosition.x, 2) +
          Math.pow(currentPosition.y - lastPosition.y, 2)
        );
    
        // Set a threshold distance, adjust as needed
        const thresholdDistance = 70;
    
        // If the mouse has moved beyond the threshold distance, add a new position
        if (distance > thresholdDistance) {
          setPositions((prevPositions) => [
            ...prevPositions,
            { x: currentPosition.x, y: currentPosition.y },
          ]);
          lastPosition = currentPosition; // Update the last position
        }
      };
    
      document.addEventListener('mousemove', handleMouseMove);
    
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

  return (
    <div>


    {positions.map((position, index) => (
        <motion.div
        key={index}
        initial={{ opacity: 10 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          width: '200px',
          height: '120px',
          backgroundImage: `url(${trails[index % trails.length]})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      ))}
    </div>
  )
}

export default Mousetrail