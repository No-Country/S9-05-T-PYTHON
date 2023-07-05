import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import { useGetPokemonQuery } from "../store/api/apiSlice";

export const Home = () => {

  const { data } = useGetPokemonQuery('pikachu')
  console.log(data);

  return (
    <>
      <div className="min-h-screen ">
        <div className="sticky top-0 z-10 bg-[#312c2c] pt-4 w-[100v]">
          <Navbar />
        </div>
        <div className="h-[10%]">
          <Hero />
        </div>
      </div>
      <h1 className="text-6xl">{data?.name}</h1>
    </>

  )
}
