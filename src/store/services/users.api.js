import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const usersApi = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/v1/'
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users/admin/'
        }),
        createUser: builder.mutation({
            query: (body) => ({
                url: '/auth/register',
                method: 'POST',
                body,
            })
        })
    })
})

export const { useGetUsersQuery, useCreateUserMutation } = usersApi;
