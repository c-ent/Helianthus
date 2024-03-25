import sunflowers from '../../../assets/images/sunflowers.png'

export const Home = () => {
  return (
    <div className="max-w-screen-2xl m-auto p-5">
      <section className='h-screen mt-20'>
        <h1 className="font-Moglan text-[#FFA800] text-[100vw] md: text-center  underline decoration-[3px] underline-offset-[50px] leading-none">Helianthus</h1>

        <img src={sunflowers} alt="Sunflowers" className="w-[100%] h-[400px] object-cover object-center " />

        <p className='text-[64px] mt-20 font-regular text-[#383838]'>
        Helianti a Vincentio van Gogh mirabile testimonium ingenii eius manet, pulchritudinem atque vitalitatem naturae aeternam capiens.
        </p>
      </section>

      <section>

      </section>
    </div>
  )
}