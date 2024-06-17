import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "/api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: "users/register",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useRegisterUserMutation } = userApi;
export default userApi;
