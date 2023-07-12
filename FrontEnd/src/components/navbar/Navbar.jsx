import { Link } from 'react-router-dom';
import logo from '../../assets/LogoPetConnect.svg';

const Navbar = () => {
	return (
		<nav className='flex items-center w-full h-20 justify-around py-2 fixed z-50 bg-primary-light shadow-md'>
			<Link to='/' className='h-full'>
				<img src={logo} alt='logo' className='object-cover h-full' />
			</Link>
			<div className='flex gap-5 font-title text-xl'>
				<Link to='/'>Home</Link>
				<Link to='/about'>Nosotros</Link>
				<Link to='/contact'>Contacto</Link>
				<Link to='/petprofile'>Pet Profile</Link>
			</div>
			<div className='flex gap-7 font-title'>
				<button className='bg-primary px-5 py-3 rounded-md hover:bg-primary-dark transition-all text-white shadow-md'>
					<Link to='/auth/login'>Ingresar</Link>
				</button>
				<button className='px-5 py-3 text-primary bg-white rounded-md shadow-md hover:bg-white-dark transition-all'>
					<Link to='/auth/register'>Registrarse</Link>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
