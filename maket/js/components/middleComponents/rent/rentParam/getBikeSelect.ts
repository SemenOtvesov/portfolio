import { TbikeRentCard, TbikeRentInfo } from "@js/types/state/rentStateTypes"
import { TselectBikeList } from "@js/types/state/userStateTypes"

export default function getBikeSelect (bikeRentInfo: TbikeRentInfo, selectBikeList:  TselectBikeList | undefined){
    const bikeList: Array<TbikeRentCard> = []
    bikeRentInfo.forEach(category=>{
        category.cards.forEach(bike=>{
            if(selectBikeList?.includes(bike.bikeId)){
                bikeList.push(bike)
            }
        })
    })
    return bikeList
}