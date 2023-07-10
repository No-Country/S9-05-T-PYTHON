import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Cards from "../components/cards/Cards";
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
      <div className="min-h-screen">
        <div className="sticky top-0 z-10  pt-4">
          <Navbar />
        </div>
        <div className="h-auto">
          < Hero />
        </div>
        <div className="flex w-full justify-evenly items-center p-4">
          <Cards data={data} />
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

