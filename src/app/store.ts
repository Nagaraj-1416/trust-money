// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../features/auth/authApi';
import authReducer from '../features/auth/authSlice';
// import { postsApi } from '../features/posts/postsApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    // [postsApi.reducerPath]: postsApi.reducer,
    auth: authReducer, // For token handling
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, 
        // postsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
