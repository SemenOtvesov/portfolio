import React from "react";
import Image from "@componentModules/image/image";
import { TbikeRentCard } from "@js/types/state/rentStateTypes";
import addSelectBike from "@state/userState/async/actions/addSelectBike";
import { Tdispatch } from "@js/types/state/allState";

export default (type: string, card: TbikeRentCard, dispatch: Tdispatch)=>{

    return <div key={Math.random()} className="searchResult__card-box">
            <div className="searchResult__card-title-box">
                <div className="searchResult__card-title bold">{type}</div>
                <div className="searchResult__card-title">{card.brandName}</div>
            </div>

            <Image imageType='bikeImage' imageName={card.imgName} sourseMod={true} modClass="searchResult__card-image"/>

            <div className="searchResult__card-text">
                {card.title}
            </div>
            <div className="searchResult__card-prise">
                {card.prise} AED/день
            </div>
            <button onClick={(e)=>dispatch(addSelectBike(card.bikeId))} className="searchResult__card-button">
                <span>Выбрать</span>
            </button>
        </div>
}