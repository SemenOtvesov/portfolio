import { redirectActiveBike } from "@js/state/rentState/rentRouter"; 
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

type Tparam = {
    type: 'bike' | 'rules',
    classMod?: string
}

export default ({type, classMod}: Tparam)=>{
    const dispatch = useDispatch()

    if(type === 'bike'){
        return (
            <div className={`footer__item-link-box ${classMod}`}>
                <NavLink onClick={()=>dispatch(redirectActiveBike('alum'))} to="/" className="footer__item-link">Алюминий</NavLink>
                <NavLink onClick={()=>dispatch(redirectActiveBike('carbon'))} to="/" className="footer__item-link">Карбон</NavLink>
                <NavLink onClick={()=>dispatch(redirectActiveBike('mountain'))} to="/" className="footer__item-link">Горные/городские</NavLink>
                <NavLink onClick={()=>dispatch(redirectActiveBike('city'))} to="/" className="footer__item-link">Городские эконом</NavLink>
            </div>
        )
    }
    if(type === 'rules'){
        return (
            <div className="footer__item-link-box">
                <NavLink to="/delivery" className="footer__item-link bold">Правила</NavLink>
                <NavLink to="/info" className="footer__item-link bold">Отзывы</NavLink>
                <NavLink to="/contact" className="footer__item-link bold">Контакты</NavLink>
                <NavLink to="/contact" className="footer__item-link bold">Обратная связь</NavLink>
            </div>
        )
    }
}