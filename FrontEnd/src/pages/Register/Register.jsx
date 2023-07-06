import { Link } from 'react-router-dom';
import dog2 from '../../assets/img/dog2.webp';
import RegisterForm from './components/RegisterForm';

const Register = () => {
	return (
		<div className='flex flex-row-reverse w-[900px] min-h-[600px] rounded shadow-[--primary-color] shadow-2xl'>
			<div className='p-10 flex flex-col items-center justify-center gap-5 w-1/2'>
				<h4 className='text-4xl text-[--primary-color] font-semibold'>Registro</h4>
				<RegisterForm />
				<p>
					Ya tienes una cuenta?{' '}
					<Link to='auth/login' className='text-[--primary-color] font-semibold'>
						Login
					</Link>
				</p>
			</div>
			<div className='bg-[--secondary-color-light] relative w-1/2 rounded-s'>
				<img src={dog2} alt='dog' className='absolute bottom-0 w-3/4 ' />
			</div>
		</div>
	);
};
export default Register;
