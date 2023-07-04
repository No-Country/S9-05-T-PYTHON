import { useGetPokemonQuery } from "../store/api/apiSlice";

export const Home = () => {

const {data} = useGetPokemonQuery('pikachu')
console.log(data);

  return (
    <div >
      <h1 className="text-6xl">{data?.name}</h1>
    </div>
  )
}
