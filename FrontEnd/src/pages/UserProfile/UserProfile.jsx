import { Provider } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import banner from '../../assets/hero.webp';
import avatar from '../../assets/img/profile.jpg';
import { useGetPetsQuery } from '../../store/api/apiSlice';
import { store } from '../../store/store';
import CreatePetForm from './components/CreatePetForm';
import PetCard from './components/PetCard';
import UserEditForm from './components/UserEditForm';

const UserProfile = () => {
	const { currentData } = useGetPetsQuery();

	const MySwal = withReactContent(Swal);

	const handleEditUser = () => {
		MySwal.fire({
			html: <UserEditForm />,
			showConfirmButton: false,
			width: 'fit-content',
			scrollbarPadding: false,
		});
	};

	const handleCreatePet = () => {
		MySwal.fire({
			html: (
				<Provider store={store}>
					<CreatePetForm />
				</Provider>
			),
			showConfirmButton: false,
			width: 'fit-content',
			scrollbarPadding: false,
		});
	};

	return (
		<div className='max-w-[1300px] w-full mx-auto py-20'>
			<div className='w-full h-80'>
				<img src={banner} alt='banner' className='w-full h-full object-cover' />
			</div>
			<div className='flex items-start gap-10'>
				<div className='bg-tertiary w-80 h-[500px] relative flex flex-col justify-between'>
					<img
						src={avatar}
						alt='avatar'
						className='rounded-full object-cover w-40 h-40 absolute inset-0 translate-x-1/2 -translate-y-1/2'
					/>
					<div className='text-white mt-24 flex flex-col mx-auto w-[80%]'>
						<h6 className='self-center text-2xl font-title font-bold'>
							Nombre del Usuario
						</h6>
						<p className='text-center text-lg font-title'>Dirección</p>
						<div className='mt-5'>
							<p>Info del usuario</p>
							<p>Info del usuario</p>
							<p>Info del usuario</p>
						</div>
					</div>
					<button
						className='bg-tertiary-dark bg-opacity-50 text-white hover:bg-opacity-80 transition-all font-title font-bold py-3'
						onClick={handleEditUser}>
						Editar perfil
					</button>
				</div>
				<div className='flex-1 min-h-[600px] flex flex-col'>
					<div className='flex items-center justify-between p-6'>
						<h4 className='text-4xl font-semibold text-center text-tertiary'>
							Mis mascotas
						</h4>
						<button
							className='bg-secondary px-5 py-2 rounded-lg hover:bg-secondary-light transition-all shadow-md font-title font-bold'
							onClick={handleCreatePet}>
							Agregar mascotas
						</button>
					</div>
					<hr className='h-[2px] bg-primary-light border-none mb-10' />
					<div className='flex-1 grid grid-cols-2 place-items-center gap-y-10'>
						{currentData?.map((info, index) => (
							<PetCard info={info} key={index} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default UserProfile;
