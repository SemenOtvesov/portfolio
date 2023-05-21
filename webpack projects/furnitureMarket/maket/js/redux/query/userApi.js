import {createApi, fetchBaseQuery}  from '@reduxjs/toolkit/query/react'
import { firebaseConfig } from '@firebaseFolder/firebaseInit.js'

export const userApi = createApi({
    reducerPath: 'userApi', 
    baseQuery: fetchBaseQuery({
        baseUrl: `${firebaseConfig.databaseURL}userList`,
        
    }),
    endpoints: build =>({
        postUser: build.mutation({
            query: (userUid, userObj)=>( {
                url: `${userUid}.json`,
                method: 'PUT',
                body: JSON.stringify(userObj),
            })
        })
    })
})

export const {usePostUserMutation} = userApi