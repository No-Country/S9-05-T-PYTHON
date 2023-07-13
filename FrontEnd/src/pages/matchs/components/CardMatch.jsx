import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import {Link} from "react-router-dom"
import { useState } from "react"
const CardMatch=({info})=>{
    const [match,setMatch]=useState(false)
    return(
        <div className="flex flex-col justify-around items-center text-center min-w-[200px] max-w-[400px] min-h-[400px] px-4 my-[2em] mx-[1em] rounded-lg shadow-lg hover:shadow-primary hover:scale-[1.05] transition-all">
            <div className="w-[100%] flex flex-col md:flex-row justify-around items-center">
                <img src={info.image} alt="/" className="w-[150px] rounded-3xl" />
                <p className="text-4xl">{info.title}</p>
            </div>
            <p>{info.description}</p>
            <div className="w-[100%] flex justify-around items-center">
                <button onClick={()=>{setMatch(!match)}} className=" text-tertiary rounded-3xl m-1">
                    {!match
                        ?<AiOutlineHeart className="text-[50px] rounded-3xl p-1"/>
                        :<AiFillHeart className="text-[50px] rounded-3xl p-1"/>
                    }
                </button>
                <Link to="/petProfile" className=" text-primary hover:text-primary-light text-2xl m-1">
                    Ver más
                </Link>
            </div>
        </div>
    )
}
export default CardMatch