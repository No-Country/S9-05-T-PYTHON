import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import { useGetPokemonQuery } from "../store/api/apiSlice";

export const Home = () => {

  const { data } = useGetPokemonQuery('pikachu')
  console.log(data);

  return (
    <>
      <div className="min-h-screen ">
        <div className="sticky top-0 z-10  pt-4 w-[100%]">
          <Navbar />
        </div>
        <section className="h-[20%] w-[100%]">
          <Hero />
        </section>
      </div>
      <h1 className="text-6xl">{data?.name}</h1>
    </>

  )
}
