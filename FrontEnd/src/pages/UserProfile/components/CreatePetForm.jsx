import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as yup from 'yup';

const schema = yup
	.object({
		full_name: yup.string().required('Por favor complete el campo requerido'),
		description: yup
			.string()
			.max(150)
			.required('Por favor complete el campo requerido'),
		breed: yup.string().required('Por favor complete el campo requerido'),
		gender: yup.string().required('Por favor seleccione un género'),
		age: yup
			.number()
			.positive()
			.typeError('Por favor ingrese un número válido')
			.required('Por favor complete el campo requerido'),
		weight: yup
			.number()
			.positive()
			.typeError('Por favor ingrese un número válido')
			.required('Por favor complete el campo requerido'),
		nationality: yup.string().required('Por favor complete el campo requerido'),
	})
	.required();

const CreatePetForm = () => {
	const MySwal = withReactContent(Swal);

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

		MySwal.fire({
			title: 'Registro exitoso!!',
			icon: 'success',
			scrollbarPadding: false,
		});
	};

	return (
		<form
			onSubmit={handleSubmit(formSubmit)}
			className='flex flex-col items-center justify-center gap-5 w-full'>
			<div className='w-full'>
				<input
					{...register('full_name')}
					placeholder='Nombre de la mascota'
					autoFocus
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>
					{errors.full_name?.message}
				</p>
			</div>
			<div className='w-full'>
				<textarea
					{...register('description')}
					placeholder='Escriba una breve descripción'
					className='p-3 outline-none w-full border-b border-primary-light bg-white resize-none'
				/>
				<p className='text-tertiary text-center text-sm'>
					{errors.description?.message}
				</p>
			</div>
			<div className='w-full'>
				<input
					{...register('breed')}
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>{errors.breed?.message}</p>
			</div>
			<div className='w-full'>
				<select
					{...register('gender')}
					placeholder=''
					className='p-3 outline-none w-full border-b border-primary-light bg-white'>
					<option value='Macho'>Macho</option>
					<option value='Hembra'>Hembra</option>
				</select>
				<p className='text-tertiary text-center text-sm'>
					{errors.gender?.message}
				</p>
			</div>
			<div className='w-full'>
				<input
					{...register('age')}
					placeholder='Edad'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>{errors.age?.message}</p>
			</div>
			<div className='w-full'>
				<input
					{...register('weight')}
					placeholder='Peso'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>
					{errors.weight?.message}
				</p>
			</div>
			<div className='w-full'>
				<input
					{...register('nationality')}
					placeholder='Nacionalidad'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>
					{errors.nationality?.message}
				</p>
			</div>
			<div className='w-full'>
				<input
					{...register('img')}
					type='file'
					accept='.jpg, .jpeg, .png'
					className='p-3 outline-none w-full border-b border-primary-light bg-white'
				/>
				<p className='text-tertiary text-center text-sm'>
					{errors.nationality?.message}
				</p>
			</div>
			<button
				type='submit'
				className='bg-primary px-5 py-3 rounded hover:bg-primary-dark transition-all text-secondary-light shadow-md min-w-[250px] mt-4 outline-none'>
				Enviar
			</button>
		</form>
	);
};
export default CreatePetForm;
