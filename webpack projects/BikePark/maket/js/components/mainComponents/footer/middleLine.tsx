import React from "react";
import LinkBox from "./linkBox";

export default ({scrollWidth}: {scrollWidth: number})=>{
    if(scrollWidth > 425){
        return <>
            <div className="footer__item">
                <LinkBox type='bike' classMod={'colomn'}/>
            </div>
        </>
    }

    if(scrollWidth < 426){
        return <>
            <div className="footer__item">
                <LinkBox type='bike' classMod={'colomn'}/>
            </div>
            <LinkBox type='rules' />
        </>
    }
}