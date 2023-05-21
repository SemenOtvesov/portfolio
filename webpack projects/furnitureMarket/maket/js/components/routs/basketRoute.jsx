import React, { useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import UndefinedUserPage from "./undefinedUserPage.jsx";
import BasketItem from "@elements/basketItem.jsx";
import { equalSidesFn } from "@mainFunction/equalSidesFn";
import { appLoaderImg } from "@mainFunction/appLoaderImg";

export default ({scrollWidth})=>{
    const {user, userUid} = useOutletContext()

    useEffect(()=>{
        equalSidesFn()
        appLoaderImg()
    })

    if(Object.values(user)[0]){
        let allPrise = 0

        const basketList = user.basketList || []
        if(basketList[0]){
            return <div className="catalog__basket">
                    {user.basketList.map(basketProd =>
                        {allPrise += +basketProd.prise
                        return <BasketItem 
                            key={basketProd.imageName} 
                            userUid={userUid}
                            сhapter={basketProd.сhapter} 
                            charpeterSection={basketProd.charpeterSection}
                            imageName={basketProd.imageName}
                            title={basketProd.title} 
                            prise={basketProd.prise}
                            itemPath={`/catalog/product/${basketProd.imageName}`}
                            state={basketProd.state}
                            scrollWidth={scrollWidth}
                        />
                        })}
                        <div className="catalog__basket-bottom">
                            <div className="catalog__basket-bottom-prise">Итого: <span>{allPrise} руб.</span></div>
                            <button id="openPopap" data-popap-type='placeOrder' className="catalog__basket-bottom-button">Оформить заказ</button>
                        </div>
            </div>
        }else{
            return <div className="undefinedUser__box">
                <div className="undefinedUser__title">Я вас пока что нет избранных товаров</div>
                <NavLink to={'/catalog'} className="undefinedUser__button">Перейти в каталог</NavLink>
            </div>
        }
    }else{
        return <UndefinedUserPage/>
    }
}