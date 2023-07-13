import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Login } from '../auth';
import MainLayout from '../layout/MainLayout';
import { Home } from '../pages';
import Matchs from '../pages/matchs/Matchs';
import PetProfile from '../pages/PetProfile/PetProfile';
import Register from '../pages/Register/Register';

export const AppRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />}>
			<>
				<Route path='/auth/*' element={<Login />} />
				<Route path='/*' element={<Navigate to='auth/login' />} />
				<Route path='/auth/register' element={<Register />} />
			</>
			<>
				<Route path='/' element={<Home />} />
				<Route path='/*' element={<Navigate to='/' />} />
				<Route path='/matchs' element={<Matchs />} />
				<Route path='/petprofile' element={<PetProfile />} />
			</>
		</Route>
	)
);
