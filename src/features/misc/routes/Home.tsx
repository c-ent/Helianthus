
import sunflowers from '../../../assets/images/sunflowers.jpg';
import ScaleText from "react-scale-text";
import { motion } from 'framer-motion';

export const Home = () => {

  const petalVariants = {
    hidden: { x: "100vw", y: "100vh", opacity: 0 },
    visible: { x: "-100vw", y: "-100vh", opacity: 100, rotate: Math.random() * 500 },
  };

  return (
    <div className='relative overflow-hidden'>

          {/* Petals */}
  {Array.from({ length: 40 }).map((_, i) => (
    <motion.div
      key={i}
      className="petal"
      style={{ 
        left: `${Math.random() * 100}vw`, // Random horizontal position from the left
        // bottom: `${Math.random() * 100}vh`,
        // backgroundColor: `hsl(${Math.random() * 30 + 30}, 100%, 50%)`, // Random hue similar to ffaa00
        // borderRadius: `100% 0`,
      }}
      variants={petalVariants}
      initial="hidden"
      animate="visible"
      transition={{
        repeat: Infinity,
        duration: Math.random() * 20 + 20, // Random duration for each petal
        delay: Math.random() * 10, // Random delay for each petal
      }}
    />
  ))}

    <div className="max-w-[1600px] m-auto px-10 py-5 ">
 
      <header className='flex justify-between'>
        <div className='flex space-x-5 text-lg'>
          <a>Home</a>
          <a>Galleria</a>
          <a>Dolor</a>
        </div>

        <div className='flex items-center'>
          
         
        <svg width="49" height="11" viewBox="0 0 49 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="0.5" x2="49" y2="0.5" stroke="black"/>
        <line x1="20.354" y1="9.54614" x2="49.0002" y2="9.54614" stroke="black"/>
        </svg>


        </div>
      </header>
      <section className='h-screen'>
        <ScaleText widthOnly={true} className="">
          <h1 className="font-Moglan text-[#FFA800] text-center underline decoration-[2px] underline-offset-[50px] leading-tight">Helianthus</h1>
        </ScaleText>
        <motion.div 
          className="w-[100%] h-[380px] bg-center bg-cover" 
          style={{ backgroundImage: `url(${sunflowers})` }}
          initial={{ backgroundPositionY: "0%" }} 
          animate={{ backgroundPositionY: ["0%", "100%", "0%"] }} 
          transition={{ 
            repeat: Infinity, 
            duration: 45,
            ease: "linear",
            times: [0, 0.5, 1]
          }} 
        />  
      </section>

      <section className='space-y-10 py-40'>
        <div className='flex-1'>
        <h1 className='font-Moglan text-[106px] text-[#FFA800] underline decoration-[2px] underline-offset-[20px]'>introduction</h1>
        </div>
          
        <div className='flex-1 flex justify-end'>
          <p className='text-[64px] text-[22px] font-serif max-w-[1000px]  font-regular text-[#383838]'>
            Van Gogh's artistic legacy is often associated with his masterpieces from Arles, where the sun-drenched landscapes and vibrant yellow hues of works like "Sunflowers," "The Bedroom," and "The Yellow House" capture the essence of southern light and life. However, beyond these iconic pieces, Van Gogh's palette varied greatly throughout his career, from the earthy tones of his Dutch period to the lighter, brighter hues of his Parisian works, showcasing his versatility and evolution as an artist.
          </p>
        </div>
        
      </section>

      <section>
        <div className='flex-1 border-b-4 border-[#FFA800]'>
          <h1 className='font-Moglan text-[86px] text-[#FFA800] u'>galleria</h1>
          </div>
      </section>

      
    </div>
    </div>
  );
};