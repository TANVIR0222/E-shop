import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getBaseURL } from "../../../utils/baseURL";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/auth`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // register
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: "/register",
        method: "POST",
        body: newUser,
      }),
    }),
    // login user
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    // logout user
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
    // get all user user
    getUser: builder.mutation({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      refatchOnMount: true,
      invalidatesTags: ["Users"],
    }),
    // Delet user
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    // update  user  Role
    updateUserRole: builder.mutation({
      query: ({ userId, role }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: { role },
      }),
      refatchOnMount: true,
      invalidatesTags: ["Users"],
    }),
    // update  user  Role
    editProfile: builder.mutation({
      query: (profileData) => ({
        url: `edit-profile`,
        method: "PATCH",
        body: profileData,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserMutation,
  useDeleteUserMutation,
  useUpdateUserRoleMutation,
  useEditProfileMutation,
} = authApi;
export default authApi;
