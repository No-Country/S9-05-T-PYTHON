import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../auth';
import { Home } from '../pages';
import Register from '../pages/Register/Register';
import PetProfile from '../pages/PetProfile/PetProfile';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<>
					<Route path='/auth/*' element={<Login />} />
					<Route path='/*' element={<Navigate to='auth/login' />} />
					<Route path='/auth/register' element={<Register />} />
				</>
				<>
					<Route path='/' element={<Home />} />
					<Route path='/*' element={<Navigate to='/' />} />
					<Route path='/petprofile' element={<PetProfile />} />
				</>
			</Routes>
		</>
	);
};
