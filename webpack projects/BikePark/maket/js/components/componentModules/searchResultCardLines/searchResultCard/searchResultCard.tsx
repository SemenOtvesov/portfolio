import React from "react";
import Image from "@componentModules/image/image";
import { TbikeRentCard } from "@js/types/state/rentStateTypes";
import bikeCardClick from "@js/mainFunctions/events/click/bikeCardClick/bikeCardClick";
import { useAppDispatch } from "@js/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import { ToutletContext } from "@js/types/outletContext";
import { useOutletContext } from "react-router-dom";

type Tprops = {
    type: string, 
    card: TbikeRentCard, 
}

export default ({type, card}: Tprops)=>{
    const dispatch = useAppDispatch()
    const {userUid}: ToutletContext = useOutletContext()
    const selectList = useSelector((state: userStateInterfase)=>state.userRouter.user.selectBikeList)

    return <div className="searchResult__card-box">
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
            <button 
                onClick={(e)=>bikeCardClick({dispatch, bikeId: card.bikeId, userUid, event: e})} 
                className={`searchResult__card-button ${selectList?.includes(card.bikeId) ? 'blue' : ''}`}>
                <span>Выбрать</span>
            </button>
        </div>
}