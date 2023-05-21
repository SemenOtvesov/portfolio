import React from "react";
import { NavLink } from "react-router-dom";

export default ({title, prise, imageName, сhapter, chapterName, charpeterSection, charpeterSectionName})=>{
    return <>
        <NavLink 
            to={`/catalog/product/${imageName}`} 
            state={{сhapter, chapterName, charpeterSection, charpeterSectionName, imageName, sectionTitle: title}} 
            className="catalog__main-item"
        >

            <div className="catalog__main-item-image">
                <picture 
                    className="loading-img" 
                    id="equalSides" 
                    data-image-type='catalogItem' 
                    data-charpeter-section={charpeterSection} 
                    data-charpeter={сhapter} 
                    data-image-name={imageName}
                >
                    <div id="equalSidesRev" className="img-mask"></div>
                    <source srcSet=""/>
                    <img src='' alt="" />
                </picture>
            </div>
            <div className="catalog__main-item-text">
                <div>{title}</div>
                <div className="catalog__main-item-prise">от {prise} руб.</div>
            </div>
        </NavLink>
        </>
}