// src/features/auth/authApi.ts
import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryWithReauth from '../../utils/customBaseQuery';
import { setToken } from './authSlice';

export interface User {
    userName: string,
    userEmail: string,
    userMobileNo:string,
    isUpdateOnWhatsapp:boolean,
    termsAndConditions:boolean
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    userName: string,
    userEmail: string,
    userMobileNo:string,
    isUpdateOnWhatsapp:boolean,
    termsAndConditions:boolean
  };
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, User>({
      query: (user) => ({
        url: '/login', // API login endpoint
        method: 'POST',
        body: user,
      }),
      async onQueryStarted(user, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Save token to localStorage
          localStorage.setItem('token', data.token);
          // Optionally save to Redux state
          dispatch(setToken(data.token));
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    }),
    register: builder.mutation<AuthResponse, User>({
      query: (user) => ({
        url: '/api/v2/user/signup', // API register endpoint
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
