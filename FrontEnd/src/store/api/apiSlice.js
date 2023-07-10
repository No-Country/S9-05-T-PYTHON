import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://127.0.0.1:8000/',
		// Comprueba si existe un token y lo envia en el header
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token;
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
				headers.set('accept', 'application/json');
			}
			return headers;
		},
	}),
	endpoints: (builder) => ({
		// Registra un usuario
		registerUser: builder.mutation({
			query: (userData) => ({
				url: 'auth/register',
				method: 'POST',
				body: userData,
			}),
		}),
		// Login de un usuario
		loginUser: builder.mutation({
			query: (userData) => ({
				url: 'auth/authenticate',
				method: 'POST',
				body: userData,
			}),
		}),
		// Trae todas las categorias
		getPets: builder.query({
			query: () => 'pet/api/list',
		}),
		// Trae una mascota por el ID de la mascota
		getPetById: builder.query({
			query: (id) => `pet/api/retri/${id}`,
		}),
		// Crea una mascota con el ID del usuario
		createPet: builder.mutation({
			query: (petData) => ({
				url: 'pet/api/create',
				method: 'POST',
				body: petData,
			}),
		}),
		// Elimina una mascota con el ID de la mascota
		eliminatePet: builder.mutation({
			query: (id) => ({
				url: `pet/api/destroy/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useCreatePetMutation,
	useEliminatePetMutation,
	useGetPetByIdQuery,
	useGetPetsQuery,
	useLoginUserMutation,
	useRegisterUserMutation,
} = apiSlice;
