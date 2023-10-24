import { TactiveBikeBrand, TrentState } from "@js/types/state/rentStateTypes"

export default (state: TrentState, action: {payload: TactiveBikeBrand})=>{
    state.activeBikeBrand = action.payload
}
export const comparisonStateBrand = {
    all: 'Все', 
    Schwinn: 'Schwinn', 
    Merida: 'Merida', 
    Trek: 'Trek', 
    Cannondale: 'Cannondale', 
    Kona: 'Kona', 
    Cube: 'Cube', 
    Scott: 'Scott', 
    Santa_Cruz: 'Santa Cruz'
}