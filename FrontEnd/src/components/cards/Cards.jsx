const Cards=({name,photo, url})=>{
    return(
        <div className="bg-blue-100 flex flex-col items-center p-8 rounded-xl border-lime-200">
            <p>{name}</p>
            <img src={photo} alt={name}/>
            <button><a href={url} target="_blank" >Ver Más</a></button>
        </div>
    )
}
export default Cards