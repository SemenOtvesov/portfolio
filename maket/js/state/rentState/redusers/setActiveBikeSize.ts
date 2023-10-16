import { TactiveBikeSize, TrentState } from "@js/types/state/rentStateTypes"

export default (state: TrentState, action: {payload: TactiveBikeSize})=>{
    state.activeBikeSize = action.payload
}