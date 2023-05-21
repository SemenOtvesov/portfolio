import React, { useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import UndefinedUserPage from "./undefinedUserPage.jsx";
import FavouritesItem from "@elements/favouritesItem.jsx";
import { equalSidesFn } from "@mainFunction/equalSidesFn";
import { appLoaderImg } from "@mainFunction/appLoaderImg";

export default ({splitArr, scrollWidth})=>{
    const {user, userUid} = useOutletContext()

    useEffect(()=>{
        equalSidesFn()
        appLoaderImg()
    })

    if(Object.values(user)[0]){
        const favouritesList = user.favouritesList || []
        if(favouritesList[0]){
            let iteratorLine = 0
            if(scrollWidth > 425){
                return splitArr(user.favouritesList, 3).map(el=>{
                    return <div key={`catalogMainLine${iteratorLine++}`} className="catalog__main-line">
                        {el.map(favourProd =>
                            <FavouritesItem 
                                key={favourProd.imageName} 
                                userUid={userUid}
                                сhapter={favourProd.сhapter} 
                                charpeterSection={favourProd.charpeterSection}
                                imageName={favourProd.imageName}
                                title={favourProd.title} 
                                itemPath={`/catalog/product/${favourProd.imageName}`}
                                state={favourProd.state}
                            />)
                        }
                        </div>
                })
            }else{
                return user.favouritesList.map(favourProd =>
                    <FavouritesItem 
                        key={favourProd.imageName} 
                        userUid={userUid}
                        сhapter={favourProd.сhapter} 
                        charpeterSection={favourProd.charpeterSection}
                        imageName={favourProd.imageName}
                        title={favourProd.title} 
                        itemPath={`/catalog/product/${favourProd.imageName}`}
                        state={favourProd.state}
                    />)
                }
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