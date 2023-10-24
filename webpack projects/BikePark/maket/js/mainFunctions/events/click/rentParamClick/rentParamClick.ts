import { setBikeRentParamInfo } from "@js/state/rentState/rentRouter"
import { Tdispatch } from "@js/types/state/allState"

type Tprops = {
    bikeId: number,
    type: 'lock' | 'lantern' | 'helmet', 
    dispatch: Tdispatch
}
const rentParamClick = ({dispatch, bikeId, type}: Tprops) => {
    dispatch(setBikeRentParamInfo({bikeId, type}))
}
export default rentParamClick