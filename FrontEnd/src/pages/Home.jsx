import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import { useGetPokemonQuery } from "../store/api/apiSlice";

export const Home = () => {

  const { data } = useGetPokemonQuery('squirtle')
  console.log(data);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-violet-500 to-pink-200 ">
        <div className="sticky top-0 z-10  pt-4 w-[100%]">
          <Navbar />
        </div>
        <div className="h-auto">
          <Hero />
        </div>
        <div className="flex w-full justify-evenly items-center p-4">
          <Services/>
        </div>
      </div>
      <h1 className="text-6xl">{data?.name}</h1>
    </>
  )
}

