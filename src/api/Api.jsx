// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (data) => ({
        url: "signup",
        method: "POST",
        body: data,
      }),
    }),
    loginUser:builder.mutation({
      query:(data)=>({
        url:"user/login",
        method:"POST",
        body:data
      })
    })
  }),
});

// Export the auto-generated hook
export const { useSignUpUserMutation,useLoginUserMutation} = apiSlice;

// Export the reducer separately (for store setup)
export const userRed = apiSlice.reducer;
