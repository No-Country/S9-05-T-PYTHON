import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import { useGetPokemonQuery } from "../store/api/apiSlice";
import Footer from "../components/footer/Footer";
import FindPet from "../components/findpet/FindPet";
import CustomerSlider from "../components/customers/CustomerSlider";

export const Home = () => {
  const { data } = useGetPokemonQuery('squirtle')

  console.log(data);
  // const names = data.species.name
  // const urls = data.species.species
  // const photos = data.sprites.front_default
  return (
    <>
      <div className="className="min-h-screen bg-gradient-to-b from-[--primary-color-light] to-[--white]"">
        <div className="sticky top-0 z-10  pt-4 w-[100%]">
          <Navbar />
        </div>
        <div className="min-h-[100vh]">
          <Hero />
        </div>
        <div className="flex w-full min-h-[100vh] justify-evenly items-center p-4">
          <Services/>
        </div>
        <section>
          <FindPet />
        </section>
        <section>
          <h2 className="ml-6 text-2xl mt-6">Que dicen nuestros usuarios</h2>
          <CustomerSlider />
        </section>
        <section className="flex">
          <Footer />
        </section>
      </div>
    </>
  )
}

