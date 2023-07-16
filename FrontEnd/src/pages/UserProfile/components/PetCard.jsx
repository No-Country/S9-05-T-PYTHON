const PetCard = ({ info }) => {
	return (
		<div className='flex flex-col min-w-[200px] max-w-[400px] h-[420px] rounded-lg shadow-lg hover:shadow-primary hover:scale-[1.05] transition-all bg-white overflow-hidden'>
			<div className='w-full'>
				<img src={info?.img} alt='pet image' className='w-full h-40 object-cover' />
			</div>
			<div className='p-4 h-full flex flex-col justify-between gap-2 text-center'>
				<p className='text-4xl'>{info?.full_name}</p>
				<p className='text-body-light'>{info?.description}</p>
				<button className='self-end p-2 text-primary bg-white transition-all text-xl font-title font-bold border-primary hover:border-b-2'>
					Editar
				</button>
			</div>
		</div>
	);
};
export default PetCard;
