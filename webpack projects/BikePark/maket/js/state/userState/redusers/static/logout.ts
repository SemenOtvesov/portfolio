import { TuserState } from "@js/types/state/userStateTypes"

export default (state: TuserState)=>{
    Object.values(state.user)[0] ? state.user = {} : '',
    Object.values(state.userInfo)[0] ? state.userInfo = {} : '',
    state.userUid ?  undefined : ''
}