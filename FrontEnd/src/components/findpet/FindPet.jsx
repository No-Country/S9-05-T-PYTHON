

const FindPet = () => {
    return (
        <div>
            <section className=" flex justify-evenly items-center relative">
                <img src="https://cdn.pixabay.com/photo/2018/05/30/19/29/cat-3442258_1280.jpg" className="w-full lg:h-[500px] object-cover" alt="catHero" />
                <div className=" absolute">
                    <div className="">
                        <div>
                            <h3 className="text-white lg:text-3xl block">find a match for your pet!</h3>
                        </div>
                        <div>
                            <p className="text-white text-sm">El sitio web perfecto para encontrar el alma gemela de tu mascota</p>
                        </div>
                        <div className="flex w-full justify-center">
                            <button className=" border p-2 rounded-xl bg-gradient-to-tl  from-real to-noreal text-white hover:bg-real">Buscar!</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default FindPet
