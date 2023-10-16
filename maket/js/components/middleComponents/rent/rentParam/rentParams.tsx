import { TbikeRentCard } from "@js/types/state/rentStateTypes";
import React from "react";
import RentInfo from "./rentInfo";
import RentParamBox from "./rentParamBox/rentParamBox";
import RentMiddle from "./rentMiddle";

type Tprops = {
    bikeList: TbikeRentCard[]
}

export default ({bikeList}: Tprops)=>{
    return <div className="rent wrapper-component">
        <div className="rent__title">Заявка на аренду велосипедов</div>
        <RentInfo content={!!bikeList[0]}/>
        <RentParamBox complete={false} bikeList={bikeList}/>
        <RentMiddle complete={false} bikeList={bikeList}/>
    </div>
}