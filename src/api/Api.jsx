// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/" }),
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
        url:"/login",
        method:"POST",
        body:data,
         credentials: "include"
      })
    }),
    directLogin:builder.query({
      query:()=>({
        url:"/direct-login",
        credentials:"include",
        method:"GET"
      })
    }),
    searchUser:builder.query({
      query:(name)=>({
        url:`/search/${name}`,
        credentials:"include",
        method:"GET"
      })
    }),
    getMyProfile:builder.query({
      query:(page)=>({
        url:`/getprofile?page=${page}`,
        credentials:"include",
        method:"GET"
      })
    })
  }),
});

// Export the auto-generated hook
export const { useSignUpUserMutation,useLoginUserMutation,useDirectLoginQuery,useLazySearchUserQuery,useLazyGetMyProfileQuery} = apiSlice;

// Export the reducer separately (for store setup)
export const userRed = apiSlice.reducer;
