import { createAsyncThunk } from "@reduxjs/toolkit";
import postNewSelectBike from '../reques/postNewSelectBike'
import putNewSelectBikeList from "../reques/putNewSelectBikeList";
import { TselectBikeList } from "@js/types/state/userStateTypes";

export default createAsyncThunk(
    'userRouter/addSelectBike', async (id: number, {getState})=>{
        const state: any = getState()
        const userUid = state.userRouter.userUid
        const selectList:TselectBikeList = state.userRouter.user.selectBikeList
        
        if(selectList.includes(id)){
            const newSelectList = selectList.filter(bikeId => bikeId !== id)
            return await putNewSelectBikeList(newSelectList, userUid)
        }

        return await postNewSelectBike(id, userUid)
    }
)