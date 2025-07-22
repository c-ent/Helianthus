import sunflowers from '../../../assets/images/sunflowers.jpg';
import sunflowersfull from '../../../assets/images/sunflowers-full.webp';
import icon from '../../../assets/images/icon.svg'
import cafe from '../../../assets/images/gallery/cafe.webp';
import blue from '../../../assets/images/gallery/blue.webp';
import fields from '../../../assets/images/gallery/fields.webp';  
import vangogh from '../../../assets/images/vangogh.webp';
import { motion } from 'framer-motion';

export const Home = () => {

  return (
    <div className='relative overflow-hidden'>
      {/* Petals */}
      {Array.from({ length: 40 }).map((_, i) => {
        return (
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
        );
      })}

      <div className="max-w-[1460px] m-auto px-5 md:px-10 py-5 ">
        <header className='flex justify-between items-center'>
          <div className='flex text-[#737373] space-x-2 md:space-x-5 text-[16px] md:text-lg font-Poppins'>
            <a href='#' className='hover:text-[#FF890D] cursor-pointer'>Home</a>
            <a href='#introduction' className='hover:text-[#FF890D] cursor-pointer'>Intro</a>
            <a href='#galleria' className='hover:text-[#FF890D] cursor-pointer'>Galleria</a>
          </div>

          <div className='flex items-center hover:animate-spin'>
            <img
              src={icon}
              alt="Logo"
              className='w-[30px] md:w-[50px] md:h-[50px] object-contain'
            />
          </div>
        </header>

        {/* HERO SECTION */}
        <section className='h-[300px]   md:h-[90vh] flex flex-col'>
          <h1 className="font-Moglan text-[#FF890D] text-[clamp(50px,20vw,300px)] md:text-[clamp(100px,20vw,300px)] w-full text-center underline decoration-[2px] underline-offset-[clamp(15px,5vw,50px)] leading-tight">Helianthus</h1>
          <motion.div 
            className="w-full flex-1 bg-center bg-cover" 
            style={{ backgroundImage: `url(${sunflowers})` }}
          />  
          <p className='text-end text-[#4F4F4F] text-lg md:text-2xl'>Van Gogh's 'Sunflowers' (1888)</p>
        </section>
    
          
        {/* INTRODUCTION SECTION */}  
        <section id='introduction' className='space-y-10 py-10 md:pt-28 '>
          <div className='flex-1 '>
            <h1 className='font-Moglan text-[40px] md:text-[106px] text-[#FF890D] underline decoration-[2px] underline-offset-[20px] md:underline-offset-[30px]'>introduction</h1> 
          </div>
            
          <div className='flex-1 flex justify-end'>
            <p className='text-[16px] md:text-[22px] font-Poppins max-w-[1000px]  font-regular text-[#383838]'>
              Van Gogh's artistic legacy is often associated with his masterpieces from Arles, where the sun-drenched landscapes and vibrant yellow hues of works like "Sunflowers," "The Bedroom," and "The Yellow House" capture the essence of southern light and life. However, beyond these iconic pieces, Van Gogh's palette varied greatly throughout his career, from the earthy tones of his Dutch period to the lighter, brighter hues of his Parisian works, showcasing his versatility and evolution as an artist.
            </p>
          </div>
        </section>

        {/* GALLERIA SECTION */}
        <section id="galleria" className='space-x-0 space-y-10 py-10 md:py-28 '>
          <div className='flex-1'>
            <h1 className='font-Moglan text-[40px] md:text-[106px] text-[#FF890D] underline decoration-[2px] underline-offset-[20px] md:underline-offset-[30px]'>galleria</h1> 
          </div>

          <div className='flex flex-col md:flex-row w-full justify-between space-y-10 md:space-x-10'>
            {/* CARD 1 */}
            <div className='space-y-2'>
              <div className='overflow-hidden'>
                <img
                  src={cafe}
                  alt="Cafe"
                  className='w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-300'
                />      
              </div>
              

              <div className='inline-block bg-[#2F558B] px-2 text-white'>
                <p>café-terras 's nachts</p>
              </div>
              
              <div className='text-[#FFA800] flex items-center space-x-2'>
                <p className='text-[#FFA80] text-3xl'>
                  01
                </p>
                <p className='text-[20px] md:text-2xl'>
                  Café Terrace at Night
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className='space-y-2 pt-0 md:pt-[150px]'>
              <div className='overflow-hidden'>
                <img
                  src={blue}
                  alt="Blue"
                  className='w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-300'
                />
              </div>

              <div className='inline-block bg-[#2F558B] px-2 text-white'>
                <p>l'iris</p>
              </div>
              
              <div className='text-[#FFA800] flex items-center space-x-2'>
                <p className='text-[#FFA80] text-3xl'>
                  02
                </p>
                <p className='text-[20px] md:text-2xl'>
                  Irises
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className='space-y-2 pt-0 md:pt-[300px]'>
              <div className='overflow-hidden'>
                <img
                  src={fields}
                  alt="Fields"
                  className='w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-300'
                />
              </div>

              <div className='inline-block bg-[#2F558B] px-2 text-white'>
                <p>champs de blé</p>
              </div>
              
              <div className='text-[#FFA800] flex items-center space-x-2'>
                <p className='text-[#FFA80] text-3xl'>
                  03
                </p>
                <p className='text-[20px] md:text-2xl'>
                  Wheat Fields
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OTHER SECTION */}
        <section className='space-y-5 md:space-y-10  bg-[#FFEBA3] p-5 md:p-20 '>
          <img
            src={sunflowersfull}
            alt="Sunflowers"
            className='w-full h-[300px] md:h-[800px] object-cover hover:scale-105 transition-transform duration-300'
          />

          <p className='text-[#4F4F4F] text-[16px] md:text-3xl'>
            Sunflowers by Van Gogh remains a remarkable testament to his genius, capturing the timeless beauty and vitality of nature.
          </p>
        </section>

        {/* VAN GOGH SECTION */}
        <section className='mt-28 p-5 md:p-20 border-2 border-[#FFA800]'>
          <p className='font-Moglan text-[50px] md:text-[100px] text-center text-[#FFA800]'>Van Gogh</p>
          <div className='overflow-hidden'>
            <img
              src={vangogh}
              alt="Van Gogh"
              className='w-full h-[250px] object-contain hover:scale-105 transition-transform duration-300'
            />
          </div>
          <p className='text-center max-w-[800px] m-auto mt-10 text-[16px]  md:text-xl'>
            Vincent Willem van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade, he created approximately 2100 artworks, including around 860 oil paintings, most of them in the last two years of his life.
          </p>
        </section>


        <footer className='pt-10 text-center text-[#737373]'>
          <a href='https://c-ent.dev/' className='font-Moglan text-[24px] md:text-[30px] text-black hover:text-[#FF890D] transition-colors duration-300'>
            Cent
          </a>
        </footer>

        {/* Petals at the end */}
        {Array.from({ length: 40 }).map((_, i) => {
          return (
            <motion.div
              key={`end-${i}`}
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
          );
        })}
      </div>
    </div>
  );
};