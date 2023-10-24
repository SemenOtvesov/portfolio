import { TuserState } from "@js/types/state/userStateTypes"

type Taction = {
    payload: string | null
}

export default (state: TuserState, action: Taction)=>{
    state.deleteOrderId = action.payload
}