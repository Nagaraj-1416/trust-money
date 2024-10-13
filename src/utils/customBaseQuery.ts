// src/utils/customBaseQuery.ts
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { RootState } from '../app/store';
import { clearToken } from '../features/auth/authSlice';

export const customBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL, // Using the URL from your environment variables
  prepareHeaders: (headers, { getState } ) => {
    const token = localStorage.getItem('token');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    
  let result = await customBaseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.log('Unauthorized access. Token expired or invalid.');
  }

  if (result.error) {
    console.error('An error occurred:', result.error.data || result.error.status);
  }

  return result;
};

export default baseQueryWithReauth;
