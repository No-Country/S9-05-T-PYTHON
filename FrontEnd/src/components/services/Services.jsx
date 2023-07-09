import {BiShower} from "react-icons/bi";
import {TbVaccine} from "react-icons/tb";
import {BsScissors} from "react-icons/bs";
import {GiSittingDog, GiHealthNormal} from "react-icons/gi";
import {LuHotel} from "react-icons/lu"

const Services=()=>{
    const divContainerServices="p-4 flex flex-col justify-evenly items-center text-center rounded-lg m-4 w-[75%] lg:w-[85%] gap-2 border-2"
    const iconServices="text-3xl text-violet-500"
    const titleServices="text-2xl font-bold"
    const descriptionServices="text-xl font-medium"
    const buttonServices="rounded-xl p-2 bg-violet-300 hover:bg-violet-200 font-medium"
    return(
        <div className="flex flex-col items-center w-[100%]">
            <h3>Servicios</h3>
            <p>Contamos con una gran cantidad y variedad de servicios a tu disposición.</p>
            <div className="flex flex-col items-center w-[100%] lg:flex-row">
                <div className={divContainerServices}>
                    <BsScissors className={iconServices}/>
                    <p className={titleServices}>Cortes y peinados</p>
                    <p className={descriptionServices}>El mejor look que tu mascota se merece</p>
                    <button className={buttonServices}>Ver más</button>
                </div>
                <div className={divContainerServices}>
                    <BiShower className={iconServices}/>
                    <p className={titleServices}>Baño</p>
                    <p className={descriptionServices}>La mejor limpieza y cuidado para tu mascota</p>
                    <button className={buttonServices}>Ver más</button>
                </div>
                <div className={divContainerServices}>
                    <TbVaccine className={iconServices}/>
                    <p className={titleServices}>Vacunación</p>
                    <p className={descriptionServices}>Mantén tu mascota protegida a toda hora</p>
                    <button className={buttonServices}>Ver más</button>
                </div>
            </div>
            <div className="flex flex-col items-center w-[100%] lg:flex-row">
                <div className={divContainerServices}>
                    <GiHealthNormal className={iconServices}/>
                    <p className={titleServices}>Veterinarios</p>
                    <p className={descriptionServices}>Lleva un control completo de tu mascota en todo momento</p>
                    <button className={buttonServices}>Ver más</button>
                </div>
                <div className={divContainerServices}>
                    <GiSittingDog className={iconServices}/>
                    <p className={titleServices}>Paseos</p>
                    <p className={descriptionServices}>Regalale a tu mascota el mejor paseo por los espacios verdes de tu ciudad</p>
                    <button className={buttonServices}>Ver más</button>
                </div>
                <div className={divContainerServices}>
                    <LuHotel className={iconServices}/>
                    <p className={titleServices}>Hotel de mascotas</p>
                    <p className={descriptionServices}>No te preocupes si tienes que viajar, regalale una estadia en un hotel exclusivo.</p>
                    <button className={buttonServices}>Ver más</button>
                </div>
            </div>
        </div>
    )
}
export default Services