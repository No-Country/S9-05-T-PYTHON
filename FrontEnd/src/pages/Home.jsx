import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import CustomerSlider from '../components/customers/CustomerSlider';
import FindPet from '../components/findpet/FindPet';
import SliderHero from '../components/sliderhero/SliderHero';

export const Home = () => {
	return (
		<>
			<div className='bg-white'>
				<Hero />
				<SliderHero />
				<Services />
				<FindPet />
				<CustomerSlider />
			</div>
		</>
	);
};
