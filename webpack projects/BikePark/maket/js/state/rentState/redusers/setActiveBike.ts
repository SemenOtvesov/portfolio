import { TactiveBikeEl, TrentState } from "@js/types/state/rentStateTypes"

export default (state: TrentState, action: {payload: TactiveBikeEl})=>{
    if(state.activeBike.includes(action.payload)){
        state.activeBike = state.activeBike.filter(el=>el !== action.payload)
    }else{
        const newActiveBike = [...state.activeBike]
        newActiveBike.push(action.payload) 
        state.activeBike = newActiveBike
    }
}