import { Torder } from "@js/types/orderType"
import { TuserState } from "@js/types/state/userStateTypes"

type Tacton = { payload: Torder | 'err' | undefined }

export default (state: TuserState, action: Tacton)=>{
    if(action.payload && action.payload !== 'err'){
        state.user.orderList?.push(action.payload)
        state.user.selectBikeList = []
    }
}