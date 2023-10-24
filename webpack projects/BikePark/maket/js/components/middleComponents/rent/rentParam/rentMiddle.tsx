import { TbikeRentCard } from "@js/types/state/rentStateTypes";
import React from "react";
import { NavLink } from "react-router-dom";
import calcFullPrise from "../calcFullPrise";

type Tprops = {
    complete: boolean,
    bikeList: TbikeRentCard[]
}

export default ({complete, bikeList}: Tprops)=>{
    return (
        <>
            <div className="rent__middle">
                {complete ? 
                <button className="rent__button exit">Назад к выбору велосипедов</button>
                : <div></div>
                }
                <div className="rent__prise-box">
                    <div className="rent__prise">
                        <div className="rent__prise-text">Доставка</div>
                        <div className="rent__prise-prise">0 AED</div>
                    </div>
                    <div className="rent__prise">
                        <div className="rent__prise-text">Итого</div>
                        <div className="rent__prise-prise blue">{calcFullPrise(bikeList)} AED</div>
                    </div>
                </div>
            </div>
            {complete ?
            <div className="rent__bottom">
                <NavLink to={'/account'} className="rent__button blue">В личный кабинет</NavLink>
                <NavLink to={'/'} className="rent__button">Назад на главную</NavLink>
            </div> 
            :''}
        </>
    )
}