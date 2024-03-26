
import sunflowers from '../../../assets/images/sunflowers.jpg';
import ScaleText from "react-scale-text";
import { motion } from 'framer-motion';

export const Home = () => {

  const petalVariants = {
    hidden: { x: "100vw", y: "10  0vh", opacity: 0 },
    visible: { x: "-100vw", y: "-100vh", opacity: 1, rotate: Math.random() * 360 },
  };

  return (
    <div className='relative overflow-hidden'>

          {/* Petals */}
  {Array.from({ length: 30 }).map((_, i) => (
    <motion.div
      key={i}
      className="petal"
      style={{ 
        left: `${Math.random() * 100}vw`, // Random horizontal position from the left
        bottom: `${Math.random() * 100}vh`,
        
      }}
      variants={petalVariants}
      initial="hidden"
      animate="visible"
      transition={{
        repeat: Infinity,
        duration: Math.random() * 9 + 9, // Random duration for each petal
        delay: Math.random() * 7, // Random delay for each petal
      }}
    />
  ))}

    <div className="max-w-[1400px] m-auto px-10 py-5 ">
 
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
      <section>
        <p className='text-[64px] mt-20 font-regular text-[#383838]'>
          Helianti a Vincentio van Gogh mirabile testimonium ingenii eius manet, pulchritudinem atque vitalitatem naturae aeternam capiens.
        </p>
      </section>

      
    </div>
    </div>
  );
};