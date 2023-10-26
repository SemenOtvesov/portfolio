import { TcreateOrder, Torder } from "@js/types/orderType";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import postOrder from "../reques/postOrder";

export default createAsyncThunk('userRouter/createOrder', async (order: TcreateOrder, {getState})=>{
    const state = getState() as userStateInterfase
    const uid = state.userRouter.userUid
    const keysList = state.userRouter.user.orderList?.map(el=> `${el.orderId}`) || []

    const orderKey = createKey(keysList)
    if(!uid){return}; if(!orderKey){return}
    const finOrder: Torder = {...order, orderId: orderKey, user: {uid, ...order.user}}
    let chekhErr = true
    await postOrder({uid, order: finOrder, key: orderKey}).catch(err => chekhErr = false)
    return chekhErr ? finOrder : 'err'
})

function createKey(keysList: string[]){
    function callback(){
        let key = ''
        for (let i = 0; i < 28; i++) {
            let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            function randomIntFromInterval(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1) + min)
            }
            key += arr_en[randomIntFromInterval(0, arr_en.length-1)]
        }
        if(keysList.includes(key)){
            callback()
        }else{
            return key
        }
    }
    const key = callback()
    if(key){return key}
}