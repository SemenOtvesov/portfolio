import { userStateInterfase } from "@js/types/state/userStateTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import deleteOrderRequest from "../reques/deleteOrderRequest";

export default createAsyncThunk('userRouter/deleteOrder', async (PrNull, {getState})=>{
    const state = getState() as userStateInterfase
    const uid = state.userRouter.userUid
    const deleteOrderId = state.userRouter.deleteOrderId
    if(!uid || !deleteOrderId){return}
    const reques = await deleteOrderRequest(uid, deleteOrderId)
    if(reques){return deleteOrderId}else{return undefined}
})