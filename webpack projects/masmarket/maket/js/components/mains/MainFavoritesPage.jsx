import React from "react";
import { NavLink } from "react-router-dom";
import Products from '@midleComponents/Products.jsx'
import AllUser from "@midleComponents/AllUser.jsx";

export default (props)=>{
    if(props.user){
        return(
            <div className="main">
                <div className="main__container">
                    <div className="mainContentFlexBox__title">Избранное</div>
                    {props.userFavoritesList[0] !== undefined ? 
                    createFavorites(props.userFavoritesList, props.quantityEl(5,4,3)): 
                    <div className="favorites__main">
                        <div className="mainOrder__list-und">
                            У вас пока что нет избранных товаров 
                            <NavLink className="mainOrder__title blue" to={'/'}>Перейти на главную</NavLink>
                        </div>
                    </div>
                    }
                </div>
            </div>
        )
    }else{
        return <AllUser/>
    }
}

function createFavorites(favoritesArr, iterator){
    const newArr = []
    const finalyComp = []
    for (let i = 0; i < favoritesArr.length; i += iterator) {;
        const el = favoritesArr.slice(i, i+iterator)
        newArr.push(el)
    }
    let lineIterator = 0
    newArr.forEach(el=>{
        if(el.length === iterator){
            finalyComp.push(<div key={'favoriteLine'+ lineIterator++} className="mainContentFlexBox"><Products idList={el} favoritCheck='true'/></div>)
        }else{
            finalyComp.push(<div key={'favoriteLine'+ lineIterator++} className="mainContentFlexBox around"><Products idList={el} favoritCheck='true'/></div>)
        }
    })
    return finalyComp
}