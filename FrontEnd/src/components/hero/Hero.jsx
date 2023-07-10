import SliderHero from "../sliderhero/SliderHero"


const Hero = () => {
    return (
        <>
            <section className="">
                < SliderHero />
            </section>
            <section className="bg-gradient-to-tl from-red-200 to-violet-300 flex justify-evenly items-center h-screen">
                <div className="w-[50%] flex flex-col justify-center items-center">
                    <p>Matchea ahora!</p>
                    <p>El sitio web perfecto para encontrar el alma gemela de tu mascota</p>
                    <button className="border p-2 rounded-xl hover:bg-violet-400">Buscar!</button>
                </div>
                <div className="w-[50%] ">
                    <img src="/hero.webp" alt="dogHero" />
                </div>
            </section>

        </>
    )
}

export default Hero
