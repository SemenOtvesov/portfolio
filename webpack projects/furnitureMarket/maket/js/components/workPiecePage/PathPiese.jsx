import React, { useEffect, useState } from "react";
import { useGetCatalogItemQuery } from "@redux/query/catalogApi";
import { equalSidesFn } from "@mainFunction/equalSidesFn";
import { appLoaderImg } from "@mainFunction/appLoaderImg";
import { useLocation } from "react-router-dom";

let scrollWidth = Math.max(
document.body.scrollWidth, document.documentElement.scrollWidth,
document.body.offsetWidth, document.documentElement.offsetWidth,
document.body.clientWidth, document.documentElement.clientWidth
);

export default ({catalogСhapter, MainContent})=>{
    const location = useLocation()
    const state = location.state

    const [catalogObj, setCatalogObj] = useState(catalogStateValue())
    function catalogStateValue(){
        if(catalogСhapter){
            return catalogСhapter.split('/')
        }else if(location.pathname.includes('product')){
            return [state.сhapter, state.charpeterSection]
        }
        return ' '
    }

    const {data = {}} = useGetCatalogItemQuery(catalogObj)

    useEffect(()=>{
        equalSidesFn()
        appLoaderImg()
    })
    useEffect(()=>{
        if(catalogСhapter){
            if(catalogObj != catalogСhapter.split('/')){
                setCatalogObj(catalogСhapter.split('/'))
            }
        }
    }, [location.pathname])

    return <div className="catalog"> 
                <div id='catalogTitle' className="catalog__title">{catalogСhapter ? data.itemTitle ? data.itemTitle: '' : 'КАТАЛОГ ОФИСНОЙ МЕБЕЛИ'}</div>
                <div className="catalog__path">
                    {createPath(data, location)}
                </div>
                <div className="catalog__main">
                    <MainContent splitArr={splitArr} scrollWidth={scrollWidth} catalogСhapter={catalogСhapter} data={data} state={state}/>
                </div>
            </div>
}

function splitArr(oldArr, iterator){
    const newArr = []
    for (let i = 0; i < oldArr.length; i += iterator) {;
        const el = oldArr.slice(i, i + iterator)
        newArr.push(el)
    }
    return newArr
}


function createPath(data, locPath){
    const path = locPath.pathname.split('/')[1]
    const state = locPath.state || {}

    if(path === 'catalog'){
        return <>
        <div className="catalog__path-separator"></div>
        <div className="catalog__path-item">Главная</div>
        <div className="catalog__path-item">Каталог</div>
        {data.itemTitle || Object.values(state)[0] 
            ?
            <div className="catalog__path-item">
                {data.itemTitle  ? data.itemTitle : ''}
                {state ? state.chapterName ? state.chapterName : '' : ''}
            </div>
            :
            ''
        }
            {state ?  state.charpeterSectionName ? 
                <div className="catalog__path-item">
                    {state.charpeterSectionName}
                </div>
            : '' : ''}
            {state ? state.sectionTitle ? 
                <div className="catalog__path-item">
                    {state.sectionTitle}
                </div>
            : '' : ''}
        
        </>
    } 
    if(path === 'favourites'){
        return <>
        <div className="catalog__path-separator"></div>
        <div className="catalog__path-item">Главная</div>
        <div className="catalog__path-item">Избранное</div>
        </>
    }
    if(path === 'basket'){
        return <>
        <div className="catalog__path-separator"></div>
        <div className="catalog__path-item">Главная</div>
        <div className="catalog__path-item">Корзина</div>
        </>
    }
}