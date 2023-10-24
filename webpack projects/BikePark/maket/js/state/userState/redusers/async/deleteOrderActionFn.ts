import { TuserState } from "@js/types/state/userStateTypes"

type Taction = { payload: string | undefined }

export default (state: TuserState, action: Taction)=>{
    if(!state.user.orderList){return}
    let newOrderList = [...state.user.orderList]
    newOrderList = newOrderList.filter(order=>order.orderId !== action.payload)
    state.user.orderList = newOrderList
}