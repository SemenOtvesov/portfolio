import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { addFollow, addBasket } from "@redux/userRouter";
import { useDispatch } from "react-redux";
import { equalSidesFn } from "@mainFunction/equalSidesFn";
import { appLoaderImg } from "@mainFunction/appLoaderImg";

export default ({data, state})=>{
    const dispatch = useDispatch()
    const [item, setItem] = useState()
    const {userUid, user} = useOutletContext()

    useEffect(()=>{
        equalSidesFn()
        appLoaderImg()
    })

    useEffect(()=>{
        if(Object.values(data)[0]){
            getItem(data, state, setItem)
        }
    }, [data])

    if(item){
        return <div className="catalog__main-prod">
                <div className="catalog__main-prod-left">
                    <div className="catalog__main-prod-image">
                        <picture 
                            className="loading-img" 
                            id="equalSides" 
                            data-image-type='catalogItem' 
                            data-charpeter={state.сhapter} 
                            data-charpeter-section={state.charpeterSection} 
                            data-image-name={state.imageName}
                        >
                            <div id="equalSidesRev" className="img-mask"></div>
                            <source srcSet=""/>
                            <img src='' alt="" />
                        </picture>
                    </div>
                </div>
                <div className="catalog__main-prod-rigth">
                    <div className="catalog__main-prod-prise">{item.prise} руб./шт</div>
                    <button onClick={addBasketClick.bind(this, dispatch, userUid, state, item, user)} className="catalog__main-prod-button submit">В корзину</button>
                    <button onClick={addFollowClick.bind(this, dispatch, userUid, state, item, user)} className="catalog__main-prod-button follow">
                        <picture className='loading-img' data-image-type='iconHovered' data-local="header"  data-icon-name="favourites">
                            <div id='equalSidesRev' className='img-mask'/>
                            <img src='' alt='' />
                        </picture>
                    </button>
                </div>
            </div> 
        }
}

function addFollowClick(dispatch, userUid, state, item, user){
    const favouritesList = user.favouritesList || []
    let checkFollowList = true
    favouritesList.forEach(el=>{
        if(el.imageName === state.imageName){
            checkFollowList = false
        }
    })
    if(checkFollowList){
        dispatch(addFollow(
            {
                userUid, 
                prod: {
                    сhapter: state.сhapter, 
                    charpeterSection: state.charpeterSection, 
                    sectionTitle: state.sectionTitle,
                    imageName:  state.imageName,
                    title: item.title,
                    state: state
                }
            }
            ))
    }
}
function addBasketClick(dispatch, userUid, state, item, user){
    const basketList = user.basketList || []
    let checkBasketList = true
    basketList.forEach(el=>{
        if(el.imageName === state.imageName){
            checkBasketList = false
        }
    })
    if(checkBasketList){
        dispatch(addBasket(
            {
                userUid, 
                prod: {
                    сhapter: state.сhapter, 
                    charpeterSection: state.charpeterSection, 
                    sectionTitle: state.sectionTitle,
                    imageName:  state.imageName,
                    title: item.title,
                    prise: item.prise,
                    state: state
                }
            }
            ))
    }
}


function getItem(data, state, setItem){
    const charpeter = Object.values(data)[0]
    let item
    if(charpeter){
        charpeter.subList.forEach(el=>{
            if(el.imageName === state.imageName){item = el}
        })
    }
    setItem(item)
}