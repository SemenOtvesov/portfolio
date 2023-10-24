import { TbikeRentCard } from "@js/types/state/rentStateTypes"

export default function calcFullPrise(bikeList: TbikeRentCard[]){
    let fullPrise = 0
    bikeList.forEach(bike=>fullPrise += +bike.prise)
    return fullPrise
}