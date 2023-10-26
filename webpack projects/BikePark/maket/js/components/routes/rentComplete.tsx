import React from "react";
import RentInfo from "@middleComponents/rent/rentParam/rentInfo";
import RentParamBox from "@middleComponents/rent/rentParam/rentParamBox/rentParamBox";
import RentMiddle from "@middleComponents/rent/rentParam/rentMiddle";
import { useLocation } from "react-router-dom";

export default ()=>{
    const {state: {bikeList}} = useLocation()
    return <div className="__container">
        <div className="rent wrapper-component">
            <div className="rent__title">Ваш заказ успешно оформлен</div>
            <RentInfo content={true}/>
            <RentParamBox complete={true} bikeList={bikeList}/>
            <RentMiddle complete={true} bikeList={bikeList}/>
        </div>
    </div>
}