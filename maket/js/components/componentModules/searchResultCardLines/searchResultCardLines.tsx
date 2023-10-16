import React from "react";
import searchResultCard from "./searchResultCard/searchResultCard";
import { TbikeRentCard, TbikeRentInfo } from "@js/types/state/rentStateTypes";
import { Tdispatch } from "@js/types/state/allState";

export default (quantityCards: number, scrollWidth: number, bikeRentInfo: TbikeRentInfo, dispatch:Tdispatch)=>{
    let maxItemLine = scrollWidth < 1025 ? 2 : 4;

    const sortingArr: Array<Array<{card:TbikeRentCard, cardType: string}>>  = [];
    let iterArr: Array<{card:TbikeRentCard, cardType: string}> = []
    
    bikeRentInfo.forEach(category=>{
        category.cards.forEach(card=>{
            if(sortingArr.length < quantityCards){
                const lastCategory:boolean = bikeRentInfo.indexOf(category) ===  bikeRentInfo.length - 1
                if(iterArr.length < maxItemLine){
                    iterArr.push({card, cardType: category.type})
                }else{
                    sortingArr.push(iterArr)
                    iterArr = []
                    iterArr.push({card, cardType: category.type})
                }
    
                if(lastCategory){
                    const lastCard:boolean = category.cards.indexOf(card) ===  category.cards.length - 1
                    if(lastCard){
                        sortingArr.push(iterArr)
                        iterArr = []
                    }
                }
            }
        })
    })
    
    return sortingArr.map(category=>(<div key={Math.random()} className="searchResult__card-line">
        {category.map(card=>searchResultCard(card.cardType, card.card, dispatch))}
    </div>))
}