import formatDate from "@js/mainFunctions/helpers/formatDate"
import { Tpoints } from "@js/types/state/calendarsTypes"
import { TbikeRentCard, TbikeRentInfo, TrentState } from "@js/types/state/rentStateTypes"

export default (state: TrentState, action: {payload: Tpoints})=>{
    const newArr: TbikeRentInfo = []

    state.bikeRentInfo.forEach(biketype=>{
        let newBikeType = {...biketype}
        const bikeTypeCard: Array<TbikeRentCard> = []

        biketype.cards.forEach(card=>{
            let cardCheck:boolean = true

            if(card.checkRent && card.rentInfo){
                const dateStartRent = formatDate({initDate: card.rentInfo.startRent})
                const dateFinishRent = formatDate({initDate: card.rentInfo.finishRent})
                const dateStartUser = formatDate({initDate: action.payload.startPoint})
                const dateFinishUser = formatDate({initDate: action.payload.endPoint})

                if(dateStartRent && dateFinishRent && dateStartUser && dateFinishUser){
                    if(dateStartUser > dateFinishRent){
                        cardCheck = true
                    }else if(dateFinishUser < dateStartRent){
                        cardCheck = true
                    }else{cardCheck = false}
                }
            }
            if(state.activeBikeSize !== 'all' && biketype.type !== state.activeBikeSize){cardCheck = false}
            if(state.activeBikeBrand !== 'all' && card.brandName !== state.activeBikeBrand){cardCheck = false}
            if(!state.activeBike.includes(card.typeBike)){cardCheck = false}

            if(cardCheck){bikeTypeCard.push(card)}
        })
        if(bikeTypeCard[0]){
            newBikeType.cards = bikeTypeCard
            newArr.push(newBikeType)
        }
    })

    state.localBikeInfo = newArr
}