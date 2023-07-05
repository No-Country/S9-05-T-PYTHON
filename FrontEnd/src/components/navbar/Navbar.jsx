import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center w-full min-h-[3rem] justify-between text-white">
            <div className="w-[40%] flex justify-center">
                PetConnect
            </div>
            <div className="w-[60%] flex justify-center">
                <ul className="flex gap-2">
                    <li><Link to="/">nosotros</Link></li>
                    <li><Link to="/">contacto</Link></li>
                    <li><Link to="/auth/login">login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
