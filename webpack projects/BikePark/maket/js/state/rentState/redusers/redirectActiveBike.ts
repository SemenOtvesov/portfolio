import { TactiveBikeEl, TrentState } from "@js/types/state/rentStateTypes"

export default (state: TrentState, action: {payload: TactiveBikeEl})=>{
    state.activeBike = [action.payload]
}