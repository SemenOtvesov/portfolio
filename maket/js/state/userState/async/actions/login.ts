import { Ilogin } from "@js/types/state/userStateTypes"
import { createAsyncThunk } from "@reduxjs/toolkit"
import postUser from "../reques/postUser"
import fetchUser from "../reques/fetchUser"

export const login = createAsyncThunk(
    'userRouter/login',
    async ({userUid, userInfo}: Ilogin)=>{
        if(Object.keys(userInfo).includes('name')){
            await postUser(userUid, userInfo)
        }
        
        return await fetchUser(userUid)
    }
)