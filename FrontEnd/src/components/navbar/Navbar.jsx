import { Link } from 'react-router-dom';
import logo from '../../assets/LogoPetConnect.svg';
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { useState } from 'react';


const Navbar = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	return (
		<nav className='flex items-center w-full h-20 justify-around py-2 fixed z-50 bg-primary-light shadow-md p-3'>
			<div className='flex flex-grow h-full'>
				<Link to='/' className=' m-2'>
					<img src={logo} alt='logo' className='object-cover h-full' />
				</Link>
			</div>
			<div className='flex lg:hidden relative'>

				{
					!isOpenMenu ?
						(
							<div className='h-8 border-2 rounded text-body-light cursor-pointer'>
								<IoIosMenu onClick={() => setIsOpenMenu(true)} className='h-8 w-8 text-body-light' />
							</div>
						)
						:
						(
							<>
								<IoMdClose onClick={() => setIsOpenMenu(false)} className=' h-8 w-8 text-body-light' />
								<div className='absolute -left-[90vw] sm:-left-[94vw] md:-left-[95vw] lg:hidden flex flex-col bg-primary-light w-[100vw] h-[30vh] mt-12'>
									<div className='mt-3  bg-primary-light  h-[100vh] w-full pl-5 md:pl-9'>
										<div onClick={() => setIsOpenMenu(false)} className=' flex flex-col gap-3 font-title lg:text-xl w-full py-3 px-3'>
											<Link className='hover:bg-primary' to='/'>Home</Link>
											<Link className='hover:bg-primary' to='/matchs'>Mascotas</Link>
											<Link className='hover:bg-primary' to='/user-profile'>User Profile</Link>
											<Link className='hover:bg-primary' to='/pet-profile'>Pet Profile</Link>
										</div>
										<div className=' gap-4 font-title flex place-items-center px-2 '>
											<button className='bg-primary text-white rounded-md hover:bg-primary-dark transition-all shadow-md py-3 px-3'>
												<Link to='/auth/login'>Ingresar</Link>
											</button>
											<button className=' text-primary bg-white rounded-md  hover:bg-hite-grey transition-all shadow-md py-3 px-3'>
												<Link to='/auth/register'>Registrarse</Link>
											</button>
										</div>
									</div>
								</div>
							</>

						)
				}
			</div>
			<div className='hidden lg:flex flex-grow justify-between items-center'>
				<div className='flex lg:gap-5 font-title lg:text-xl'>
					<Link to='/'>Home</Link>
					<Link to='/matchs'>Mascotas</Link>
					<Link to='/user-profile'>User Profile</Link>
					<Link to='/pet-profile'>Pet Profile</Link>
				</div>
				<div className=' gap-4 font-title flex place-items-center '>
					<button className='bg-primary text-white rounded-md hover:bg-primary-dark transition-all shadow-md py-3 px-3'>
						<Link to='/auth/login'>Ingresar</Link>
					</button>
					<button className=' text-primary bg-white rounded-md  hover:bg-white-grey transition-all shadow-md py-3 px-3'>
						<Link to='/auth/register'>Registrarse</Link>
					</button>
				</div>
			</div>

		</nav>
	);
};

export default Navbar;
