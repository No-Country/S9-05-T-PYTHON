import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://pokeapi.co/api/v2/',
	}),
	endpoints: (builder) => ({
		/* registerUser: builder.mutation({
			query: (userData) => ({
				url: 'auth/register',
				method: 'POST',
				body: userData,
			}),
		}),
		loginUser: builder.mutation({
			query: (credentials) => ({
				url: 'auth/authenticate',
				method: 'POST',
				body: credentials,
			}),
		}), */
		getPokemon: builder.query({
			query: (id) => `pokemon/${id}`,
		}),
	}),
});

export const { useGetPokemonQuery } = apiSlice;
