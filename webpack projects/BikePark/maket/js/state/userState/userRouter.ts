import { createSlice, current } from "@reduxjs/toolkit";
import login from './requests/actions/login';
import addSelectBike from './requests/actions/addSelectBike';
import createOrder from './requests/actions/createOrder';
import deleteOrder from './requests/actions/deleteOrder';

import setUserInfoFn from './redusers/static/setUserInfo';
import setUserUidFn from './redusers/static/setUserUid';
import logoutFn from './redusers/static/logout';
import setDeleteOrderIdFn from './redusers/static/setDeleteOrderId';
import loginActionFn from './redusers/async/loginActionFn';
import addSelectBikeActionFn from './redusers/async/addSelectBikeActionFn';
import createOrderActonFn from './redusers/async/createOrderActonFn';
import deleteOrderActionFn from './redusers/async/deleteOrderActionFn';
import requestSetUserInfo from "./requests/actions/requestSetUserInfo";
import requestSetUserInfoActionFn from "./redusers/async/requestSetUserInfoActionFn";

export const userRouter = createSlice({
    name: 'userRouter',
    initialState: {
        user: {},
        userInfo: {},
        userUid: undefined,
        deleteOrderId: null
    },
    reducers: {
        setUserInfo: setUserInfoFn,
        setUserUid: setUserUidFn,
        logout: logoutFn,
        setDeleteOrderId: setDeleteOrderIdFn
    },
    extraReducers: (builder)=>{
        builder.addCase(login.fulfilled, loginActionFn)
        builder.addCase(addSelectBike.fulfilled, addSelectBikeActionFn)
        builder.addCase(createOrder.fulfilled, createOrderActonFn)
        builder.addCase(deleteOrder.fulfilled, deleteOrderActionFn)
        builder.addCase(requestSetUserInfo.fulfilled, requestSetUserInfoActionFn)
    }
})

export const {setUserInfo, setUserUid, logout, setDeleteOrderId} = userRouter.actions
