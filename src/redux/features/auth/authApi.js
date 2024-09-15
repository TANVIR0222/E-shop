import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { getBaseURL } from '../../../utils/baseURL';

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery : fetchBaseQuery({
        baseUrl:`${getBaseURL()}/api/auth`,
        credentials :  'include'
    }),
    endpoints:(builder) =>({
        // register 
        registerUser: builder.mutation({
            query:(newUser) => ({
                url: '/register',
                method: 'POST',
                body: newUser
            })
        }),
        // login user 
        loginUser : builder.mutation({
            query:(credentials) =>({
                url:'/login',
                method:'POST',
                body:credentials
            })
        }),
        // logout 
        logoutUser : builder.mutation({
            query:()=>({
                url:'/logout',
                method:'POST'
            })
        }),
    })
});

export const {useRegisterUserMutation,useLoginUserMutation} = authApi
export default authApi;

