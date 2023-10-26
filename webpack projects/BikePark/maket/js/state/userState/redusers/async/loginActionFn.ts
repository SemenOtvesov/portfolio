import { Iuser, TuserState } from "@js/types/state/userStateTypes"

type Taction = { payload: Iuser }

export default(state: TuserState, action: Taction)=>{
    state.user = action.payload
}