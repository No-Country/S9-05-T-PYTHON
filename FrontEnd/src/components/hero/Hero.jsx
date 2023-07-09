import SliderHero from "./SliderHero"
import dogHero from "../../assets/img/dog2.webp"

const Hero = () => {
    return (
        <>
            <section className="flex justify-evenly items-center h-screen">
                <div className="w-[25%]">
                    <img src={dogHero} alt="dogHero" />
                </div>
                <div className="w-[50%] flex flex-col justify-center items-center gap-20">
                    <h2 className="text-4xl">¡Matchea ahora!</h2>
                    <p>El sitio web perfecto para encontrar el alma gemela de tu mascota</p>
                    <button className="border p-2 rounded-xl hover:bg-violet-400">Buscar!</button>
                </div>
            </section>
            <section className="">
                <SliderHero />
            </section>

        </>
    )
}

export default Hero
