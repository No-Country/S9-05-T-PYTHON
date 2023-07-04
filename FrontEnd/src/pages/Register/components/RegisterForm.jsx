import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
	.object({
		name: yup.string().required('Por favor complete el campo requerido'),
		userName: yup.string().required('Por favor complete el campo requerido'),
		email: yup
			.string()
			.email('Por favor ingrese un email válido')
			.required('Por favor complete el campo requerido'),
		password: yup
			.string()
			.matches(
				/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
				'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula'
			)
			.required(),
		confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
	})
	.required();

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});

	const formSubmit = (data) => {
		reset();
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(formSubmit)}
			className='flex flex-col items-center justify-center gap-5 w-full'>
			<div className='w-full'>
				<input
					{...register('name')}
					placeholder='Full Name'
					autoFocus
					className='p-3 outline-none w-full border-b border-[--primary-color-light] bg-transparent'
				/>
				<p className='text-red-500 text-center text-sm'>{errors.name?.message}</p>
			</div>
			<div className='w-full'>
				<input
					{...register('userName')}
					placeholder='User Name'
					className='p-3 outline-none w-full border-b border-[--primary-color-light] bg-transparent'
				/>
				<p className='text-red-500 text-center text-sm'>
					{errors.userName?.message}
				</p>
			</div>
			<div className='w-full'>
				<input
					{...register('email')}
					placeholder='Email'
					className='p-3 outline-none w-full border-b border-[--primary-color-light] bg-transparent'
				/>
				<p className='text-red-500 text-center text-sm'>{errors.email?.message}</p>
			</div>
			<div className='w-full'>
				<input
					{...register('password')}
					type='password'
					placeholder='Password'
					className='p-3 outline-none w-full border-b border-[--primary-color-light] bg-transparent'
				/>
				<p className='text-red-500 text-center text-sm'>
					{errors.password?.message}
				</p>
			</div>
			<div className='w-full'>
				<input
					{...register('confirmPassword')}
					type='password'
					placeholder='Confirm Password'
					className='p-3 outline-none w-full border-b border-[--primary-color-light] bg-transparent'
				/>
				<p className='text-red-500 text-center text-sm'>
					{errors.confirmPassword && 'Las contraseñas no coinciden!'}
				</p>
			</div>
			<button
				type='submit'
				className='bg-[--primary-color] px-5 py-3 rounded font-semibold hover:bg-[--primary-color-dark] transition-all text-[--secondary-color-light] shadow-md min-w-[250px] mt-4 outline-none'>
				Enviar
			</button>
		</form>
	);
};
export default RegisterForm;
