
const Navbar = () => {
    return (
        <nav className="flex items-center w-full min-h-[3rem] justify-between text-white">
            <div className="w-[40%] flex justify-center">
                PetConnect
            </div>
            <div className="w-[60%] flex justify-center">
                <ul className="flex gap-2">
                    <li>nostros</li>
                    <li>contacto</li>
                    <li>login</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
