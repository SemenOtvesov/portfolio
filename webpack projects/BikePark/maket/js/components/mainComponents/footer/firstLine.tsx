import React from "react";
import LinkBox from "./linkBox";


export default ({scrollWidth}: {scrollWidth: number})=>{
    if(scrollWidth > 425){
        return <>
            <div className="footer__item">
                <div className="footer__text bold">Аренда велосипедов</div>
            </div>
            <div className="footer__item revers">
                <LinkBox type='rules'/>
            </div>
        </>
    }
    if(scrollWidth < 426){
        return<>
            <div className="footer__item">
                <div className="footer__text bold">Аренда велосипедов</div>
            </div>
        </>
    }
}