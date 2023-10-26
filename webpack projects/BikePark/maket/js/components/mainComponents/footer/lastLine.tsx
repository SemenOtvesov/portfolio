import React from "react";
import IconBox from "./iconBox";

export default ({scrollWidth}: {scrollWidth: number})=>{
    if(scrollWidth > 768){
        return <>
            <div className="footer__item">
                <div className="footer__text big">© BikePark, 2021</div>
                <div className="footer__text big">Политика конфиденциальности</div>
            </div>
            <div className="footer__item"> 
                <IconBox/>
            </div>
        </>
    }
    if(scrollWidth <= 768 && scrollWidth > 425){
        return<>
            <div className="footer__text big">© BikePark, 2021</div>
            <div className="footer__text big">Политика конфиденциальности</div>
            <IconBox/>
        </>
    }
    if(scrollWidth < 426){
        return <>
            <div className="footer__item">
                <div className="footer__text big">© BikePark, 2021</div>
            </div>
            <div className="footer__item"> 
                <div className="footer__text big">Политика конфиденциальности</div>
                <IconBox/>
            </div>
        </>
    }
}