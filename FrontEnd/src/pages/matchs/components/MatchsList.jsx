import {Link, useParams } from "react-router-dom"
import { useGetLikeByIdQuery } from "../../../store/api/apiSlice";
const MatchsList=()=>{
    const params = useParams()
    const { currentData } = useGetLikeByIdQuery(params.id);
    console.log(currentData)
return(
        <div className="min-h-[100vh] flex justify-center items-center bg-primary">
            <div className="w-[80%] border-lg border flex bg-white rounded-lg p-2 justify-around items-center">
                <div className="p-1 flex flex-col justify-center items-center w-[25%]">
                    <img src={currentData?.img} alt={currentData?.full_name} className="rounded-2xl"/>
                    <p className="text-3xl">{currentData?.full_name}</p>
                </div>
                <div className="w-[70%] flex flex-col justify-evenly items-center">
                    <p className="text-3xl my-2">MatchList</p>
                    <div className="flex w-[100%] justify-around p-2 text-center">
                        {currentData?.likes.map((elem)=>{
                            console.log(elem)
                            return(
                                <div key={elem.id} className="flex flex-col p-4 bg-secondary-light rounded-lg w-[25%] shadow-xl">
                                    <p className="text-lg">Dueño:
                                        <span className="text-2xl mx-1">{elem}</span>
                                    </p>
                                    <p className="text-lg">Perro:
                                        <span className="text-2xl mx-1">{elem}</span>
                                    </p>
                                    <Link to={`/pet-profile/${elem.owner}`} className="border rounded-2xl bg-primary-light p-1 m-2 hover:bg-primary">Ver Perfil</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MatchsList