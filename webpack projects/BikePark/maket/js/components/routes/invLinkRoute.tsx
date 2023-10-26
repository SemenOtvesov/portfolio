import setHeightChildrenOfParent from "@js/mainFunctions/setDOM/setHeightChildrenOfParent";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default ()=>{
    useEffect(()=>{
        setHeightChildrenOfParent()
    })
    return <div id="setHeightChildren" className="invLink">
        <div className="invLink__title">404</div>
        <div className="invLink__text">Страница не существует или еще не была создана</div>
        <NavLink to={'/'} className="invLink__button genButton">Вернуться на главную страницу</NavLink>
    </div>
}