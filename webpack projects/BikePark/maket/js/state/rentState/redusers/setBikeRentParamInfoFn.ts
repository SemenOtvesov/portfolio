import { TrentState } from "@js/types/state/rentStateTypes";

type Taction = {
    payload: {
        bikeId: number
        type : 'lock' | 'lantern' | 'helmet'
    }
}

export default (state: TrentState, action: Taction)=>{
    const newBikeRentParamInfo = [...state.bikeRentParamInfo]
    const bike = newBikeRentParamInfo.find(el=>el.bikeId === action.payload.bikeId)
    if(bike){
        if(bike[action.payload.type]){
            delete bike[action.payload.type]
        }else{
            bike[action.payload.type] = true
        }
    }else{
        newBikeRentParamInfo.push({bikeId: action.payload.bikeId, [action.payload.type]: true})
    }
    state.bikeRentParamInfo = newBikeRentParamInfo
}