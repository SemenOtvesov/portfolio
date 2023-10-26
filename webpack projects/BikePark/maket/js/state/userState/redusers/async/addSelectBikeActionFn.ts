import { TuserState } from "@js/types/state/userStateTypes"

type Taction = {payload: number | number[] | undefined}

export default (state: TuserState, action: Taction)=>{
    if(action.payload){
        if(Array.isArray(action.payload)){
            state.user.selectBikeList = action.payload
        }else if(state.user.selectBikeList){
            state.user.selectBikeList.push(action.payload)
        }else{
            state.user.selectBikeList = [action.payload]
        }
    }
}