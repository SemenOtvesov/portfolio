import React from "react";
import { NavLink } from "react-router-dom";

export default ({title, imageName, сhapter, chapterName, charpeterSection, itemPath, catalogMainRoute})=>{
    if(!catalogMainRoute){
        return <>
            <NavLink to={itemPath} state={{сhapter, chapterName, charpeterSection, charpeterSectionName: title}} className="catalog__main-item">
                <div className="catalog__main-item-image">
                    <picture className="loading-img" id="equalSides" data-image-type='catalogItem' data-charpeter-section={charpeterSection} data-charpeter={сhapter} data-image-name={imageName}>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src='' alt="" />
                    </picture>
                </div>
                <div className="catalog__main-item-text">{title}</div>
            </NavLink>
            </>
    }else{
        return <>
            <NavLink to={itemPath} className="catalog__main-item">
                <div className="catalog__main-item-image">
                    <picture className="loading-img" id="equalSides" data-image-type='catalogItem' data-charpeter-section={charpeterSection} data-charpeter={сhapter} data-image-name='preview'>
                        <div id="equalSidesRev" className="img-mask"></div>
                        <source srcSet=""/>
                        <img src='' alt="" />
                    </picture>
                </div>
                <div className="catalog__main-item-text">{title}</div>
            </NavLink>
            </>
    }
}