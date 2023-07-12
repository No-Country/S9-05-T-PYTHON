import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center w-full min-h-[3rem] justify-between text-white">
      <div className="w-[40%] md:w-auto flex justify-center">PetConnect</div>
      <div className="w-[90%] md:w-auto flex justify-center">
        <ul className="flex gap-5">
          <li>
            <Link to="/">Nosotros</Link>
          </li>
          <li>
            <Link to="/">Contacto</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="w-[50%] md:w-auto flex justify-center">
        <div className="flex gap-7">
          <button className="px-4 py-2 bg-primary-color-light text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
            <Link to="/auth/login">Ingresar</Link>
          </button>
          <button className="px-4 py-2 bg-primary-color-light text-white rounded-md shadow hover:bg-gray-100">
            <Link to="/auth/register">Registrarse</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
