import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Cards from "../components/cards/Cards";
import { useGetPokemonQuery } from "../store/api/apiSlice";

export const Home = () => {

  const { data } = useGetPokemonQuery('squirtle')
  console.log(data);

  return (
    <>
      <div className="min-h-screen">
        <div className="sticky top-0 z-10  pt-4 w-[100%]">
          <Navbar />
        </div>
        <div className="h-auto">
          <Hero />
        </div>
        <div className="flex w-full justify-evenly items-center p-4">
          {data ? <Cards name={data.species.name} photo={data.sprites.front_default} url={data.species.url} /> : <p>LOADING</p>}
        </div>
      </div>
      <h1 className="text-6xl">{data?.name}</h1>
    </>
  )
}

