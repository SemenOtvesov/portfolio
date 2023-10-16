import { createAsyncThunk } from "@reduxjs/toolkit";
import postNewSelectBike from '../reques/postNewSelectBike'

export default createAsyncThunk(
    'userRouter/addSelectBike', async (id: number, {getState})=>{
        const state: any = getState()
        const userUid = state.userRouter.userUid

        return await postNewSelectBike(id, userUid)
    }
)