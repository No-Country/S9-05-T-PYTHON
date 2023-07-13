import CardMatch from "./components/CardMatch"
import dataCardSlider from "../../utils/dataCardSlider.json";
const Matchs=()=>{
    window.scrollTo(0, 0);
    return(
        <div className="w-[100%] min-h-[100vh] flex flex-col justify-center items-center">
            <div className="w-[80%] min-h-[100vh] pt-[10em] flex flex-wrap justify-center items-center ">
                {dataCardSlider.map((info)=>(
                    <CardMatch info={info} key={info.id}/>
                ))}
            </div>
        </div>
    )
}
export default Matchs