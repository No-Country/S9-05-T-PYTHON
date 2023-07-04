import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../auth';
import { Home } from '../pages';
import Register from '../pages/Register/Register';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<>
					<Route path='/auth/*' element={<Login />} />
					<Route path='/*' element={<Navigate to='auth/login' />} />
				</>
				<>
					<Route path='/' element={<Home />} />
					<Route path='/*' element={<Navigate to='/' />} />
				</>
				<Route path='/register' element={<Register />} />
			</Routes>
		</>
	);
};
