import { TuserState } from "@js/types/state/userStateTypes"

type Taction = {
    payload: {
    }
}

export default (state: TuserState, action: Taction)=>{
    state.userInfo = action.payload
}