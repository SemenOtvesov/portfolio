import React from "react";
import { NavLink } from "react-router-dom";
import BasketProduct from '@elementUI/BasketProduct.jsx'

export default ({idList = [], quantityEl})=>{
    if(Object.keys(idList)[0] === undefined){
        return <div className="mainBasket__und">У вас пока что нет заказов <NavLink to={'/'}>Перейти на главную</NavLink></div>
    }
    const idListArr = []
    for(const key in idList){
        idListArr.push(idList[key])
    }
    return idListArr.map(el=>
        <BasketProduct key={`${el.idProd}${el.select}`} id={el.idProd} select={el.select} quantityEl={quantityEl}/>
    )
}