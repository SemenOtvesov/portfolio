import { TactiveBikeSize, TrentState } from "@js/types/state/rentStateTypes"

export default (state: TrentState, action: {payload: TactiveBikeSize})=>{
    state.activeBikeSize = action.payload
}
export const comparisonStateSize = {
    all: 'Все', 
    XS: 'XS', 
    S: 'S', 
    SM: 'S/M', 
    M: 'M', 
    L: 'L', 
    XL: 'XL', 
    XXl: 'XXl'
}