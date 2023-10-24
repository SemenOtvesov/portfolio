import { TuserState } from "@js/types/state/userStateTypes"

type Taction = {
    payload: string
}

export default (state: TuserState, action: Taction)=>{
    state.userUid = action.payload
}