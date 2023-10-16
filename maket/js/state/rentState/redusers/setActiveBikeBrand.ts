import { TactiveBikeBrand, TrentState } from "@js/types/state/rentStateTypes"

export default (state: TrentState, action: {payload: TactiveBikeBrand})=>{
    state.activeBikeBrand = action.payload
}