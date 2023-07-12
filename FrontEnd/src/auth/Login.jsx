import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Usuario:', username);
		console.log('Contraseña:', password);
	};

	return (
		<div className='w-full min-h-screen grid place-items-center'>
			<div className='flex flex-col items-center mt-8'>
				<h2 className='text-2xl font-bold mb-4'>Iniciar sesión</h2>
				<form onSubmit={handleSubmit} className='flex flex-col items-center'>
					<input
						type='text'
						placeholder='Nombre de usuario'
						value={username}
						onChange={handleUsernameChange}
						className='w-64 py-2 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<input
						type='password'
						placeholder='Contraseña'
						value={password}
						onChange={handlePasswordChange}
						className='w-64 py-2 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<button
						type='submit'
						className='bg-[--primary-color-light] text-white py-2 px-4 rounded-md hover:bg-[--primary-color-dark]'>
						Iniciar sesión
					</button>
					<p className='mt-3'>No tienes una cuenta?</p>
					<Link to='/auth/register'>
						<button className='bg-[--primary-color-light] text-white py-2 px-4 rounded-md hover:bg-[--primary-color-dark]'>
							registrarse
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};
