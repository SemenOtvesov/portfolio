import { TbikeRentCard } from "@js/types/state/rentStateTypes";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import React from "react";
import { useSelector } from "react-redux";
import createParamLine from "./createParamLine";

type Tprops = {
    complete: boolean,
    bikeList: TbikeRentCard[]
}

export default ({complete, bikeList}: Tprops)=>{
    const bikeRentParamInfo = useSelector((state: userStateInterfase)=>state.rentRouter.bikeRentParamInfo)

    if(bikeList[0]){
        return (
            <div className="rent__param-box">
    
            <div className="rent__param-line">
                <div className="rent__param image"></div>
                <div className={!complete ? "rent__param text": "rent__param text big"}>Название велосипедов</div>
                {
                    !complete ? 
                    <>
                        <div className="rent__param checkbox-box title">Шлем</div>
                        <div className="rent__param checkbox-box title">Фонарик</div>
                        <div className="rent__param checkbox-box title">Замок</div>
                    </>
                    : ''
                }
                <div className="rent__param prise prise title">Стоимость</div>
            </div>
            {bikeList.map(bike=>createParamLine({complete, bike, bikeRentParamInfo}))}
        </div>
        )
    }else{
        return <div className="rent__param-err">Не выбранно ни одного велосипеда</div>
    }
}