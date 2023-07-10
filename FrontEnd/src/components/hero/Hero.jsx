import SliderHero from "./SliderHero"
import dogHero from "../../assets/img/dog2.webp"
const Hero = () => {
    return (
        <>
            <section className="flex flex-col sm:flex-row justify-around sm:justify-center items-center min-h-[100vh]">
                <div className="w-[50%] sm:w-[25%] flex justify-center items-center">
                    <img src={dogHero} alt="dogHero" />
                </div>
                <div className="w-[75%] sm:w-[50%] flex flex-col justify-center items-center text-center gap-5 lg:gap-16 xl:gap-20">
                    <h2 className="text-4xl">¡Matchea ahora!</h2>
                    <p>El sitio web perfecto para encontrar el alma gemela de tu mascota</p>
                    <button className="border-2 border-[--primary-color-dark] p-2 rounded-xl w-[50%] sm:w-[75%] lg:w-[50%] hover:bg-[--primary-color]">Buscar!</button>
                </div>
            </section>
            <section>
                <SliderHero />
            </section>
        </>
    )
}

export default Hero
