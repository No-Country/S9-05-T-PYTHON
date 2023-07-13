import petImg from '../../assets/img/pet.jpg';
import profileAvatar from '../../assets/img/profile.jpg';

const PetProfile = () => {
	return (
		<section className='pt-28 pb-20 flex gap-5 w-full max-w-[1300px] min-h-screen items-start justify-between mx-auto'>
			{/* Aside with pet's owner profile */}
			<div className='flex flex-col gap-3 w-64 bg-white rounded overflow-hidden shadow-md p-5'>
				<img
					src={profileAvatar}
					alt='avatar'
					className='object-cover w-40 h-40 rounded-full self-center'
				/>
				<div className='flex flex-col gap-2'>
					<h6 className='text-xl font-semibold text-primary-dark text-center'>
						Pet owner name
					</h6>
					<p className='text-lg'>Location</p>
					<div className='text-tertiary text-sm'>
						<p>User Info</p>
						<p>User Info</p>
						<p>User Info</p>
					</div>
					<button className='bg-secondary px-5 py-2 rounded font-semibold hover:bg-secondary-light transition-all shadow-md mt-2 self-center w-full'>
						Contactar
					</button>
				</div>
			</div>
			{/* Main content with pet's info and actions */}
			<div className='w-full flex flex-col gap-8'>
				<div className='bg-white flex flex-col gap-4 rounded overflow-hidden shadow-md p-6'>
					<h3 className='text-4xl font-semibold text-center text-tertiary'>
						Nombre de la mascota
					</h3>
					<img src={petImg} alt='pet' className='object-cover w-full h-80' />
					<h6 className='text-xl font-semibold text-[--primary-color-dark]'>
						Datos de la mascota
					</h6>
					<hr className='h-[3px] bg-primary-light border-none mt-[-5px]' />
					<div className='flex gap-4 items-start justify-between'>
						<p className='w-[65ch]'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit
							soluta omnis beatae corrupti totam sit, qui libero eveniet non, labore
							debitis harum aperiam quod.Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Tempora impedit soluta omnis beatae corrupti totam sit,
							qui libero eveniet non, labore debitis harum aperiam quod.
						</p>
						<div className='columns-3 w-1/3'>
							<div className='mb-2'>
								<p className='font-semibold'>Gender</p>
								<p className='text-primary'>Male</p>
							</div>
							<div className='mb-2'>
								<p className='font-semibold'>Weight</p>
								<p className='text-primary'>30 kg</p>
							</div>
							<div className='mb-2'>
								<p className='font-semibold'>Breed</p>
								<p className='text-primary'>Caniche</p>
							</div>
							<div className='mb-2'>
								<p className='font-semibold'>Age</p>
								<p className='text-primary'>5 años</p>
							</div>
							<div className='mb-2'>
								<p className='font-semibold'>Nationality</p>
								<p className='text-primary'>Argentino</p>
							</div>
							<div className='mb-2'>
								<p className='font-semibold'>Chip</p>
								<p className='text-primary'>Si</p>
							</div>
						</div>
					</div>
				</div>
				<div className='bg-tertiary flex flex-col gap-4 rounded overflow-hidden shadow-md p-6'>
					<h3 className='text-4xl font-semibold text-center text-white'>Galería</h3>
					<div className='flex flex-wrap gap-3 justify-evenly'>
						<img
							src={petImg}
							alt='gallery'
							className='object-cover w-48 h-48 rounded-lg shadow-md'
						/>
						<img
							src={petImg}
							alt='gallery'
							className='object-cover w-48 h-48 rounded-lg shadow-md'
						/>
						<img
							src={petImg}
							alt='gallery'
							className='object-cover w-48 h-48 rounded-lg shadow-md'
						/>
						<img
							src={petImg}
							alt='gallery'
							className='object-cover w-48 h-48 rounded-lg shadow-md'
						/>
						<img
							src={petImg}
							alt='gallery'
							className='object-cover w-48 h-48 rounded-lg shadow-md'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
export default PetProfile;
