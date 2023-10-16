import { TuserState } from '@localTypes/state/userStateTypes'
import { createSlice, current } from "@reduxjs/toolkit";
import { login } from './async/actions/login';
import addSelectBike from './async/actions/addSelectBike';
import { Torder } from '@js/types/orderType';
import createOrder from './async/actions/createOrder';

export const userRouter = createSlice({
    name: 'userRouter',
    initialState: {
        user: {},
        userInfo: {},
        userUid: undefined,
    },
    reducers: {
        setUserInfo(state, action){
            state.userInfo = action.payload
        },
        setUserUid(state, action){
            state.userUid = action.payload
        },
        logout(state){
            Object.values(state.user)[0] ? state.user = {} : '',
            Object.values(state.userInfo)[0] ? state.userInfo = {} : '',
            state.userUid ?  undefined : ''
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(login.fulfilled, (state: TuserState, action)=>{
            state.user = action.payload
        })
        builder.addCase(addSelectBike.fulfilled, (state: TuserState, action:{payload: number | undefined})=>{
            if(action.payload){
                if(state.user.selectBikeList){
                    state.user.selectBikeList.push(action.payload)
                }else{
                    state.user.selectBikeList = [action.payload]
                }
            }
        })
        builder.addCase(createOrder.fulfilled, (state: TuserState, action: {payload: Torder | 'err' | undefined})=>{
            if(action.payload && action.payload !== 'err'){
                state.user.orderList?.push(action.payload)
                state.user.selectBikeList = []
            }
        })
    }
})

export const {setUserInfo, setUserUid, logout} = userRouter.actions
