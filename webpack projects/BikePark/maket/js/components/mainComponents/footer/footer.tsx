import React from "react";
import LastLine from "./lastLine";
import MiddleLine from "./middleLine";
import FirstLine from "./firstLine";

export default({scrollWidth}: {scrollWidth: number})=>{
    return <footer className="footer">
        <div className="footer__container">
            <div className="footer__item-box">
                <FirstLine scrollWidth={scrollWidth}/>
            </div>

            <div className="footer__item-box">
                <MiddleLine scrollWidth={scrollWidth}/>
            </div>

            <div className="footer__item-box last">
                <LastLine scrollWidth={scrollWidth}/>
            </div>
        </div>
    </footer>
}