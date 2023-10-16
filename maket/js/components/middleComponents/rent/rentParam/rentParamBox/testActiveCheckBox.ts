import { TbikeRentParamInfo } from "@js/types/state/rentStateTypes"

type TparamTestActiveCheckBox = {
    bikeRentParamInfo: [] | TbikeRentParamInfo,
    bikeId: number,
    type: 'lock' | 'lantern' | 'helmet', 
}

export default function testActiveCheckBox({bikeRentParamInfo, type, bikeId}: TparamTestActiveCheckBox){
    const item = bikeRentParamInfo.find(el=>el.bikeId === bikeId)
    if(item){
        if(item[type]){
            return ' active'
        }
    }
    return ''
}