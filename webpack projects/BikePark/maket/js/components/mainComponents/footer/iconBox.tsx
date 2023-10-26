import Image from "@js/components/componentModules/image/image";
import React from "react";
import { Link } from "react-router-dom";

export default ()=>{
    return (
        <div className="footer__item-icon-box">
            <Link to={'http://facebook.com/'}>
                <Image imageName="facebook" imageType="icon" sourseMod={false}/>
            </Link>
            
            <Link to={'http://instagram.com/'}>
                <Image imageType="icon" imageName="instagram" sourseMod={false}/>
            </Link>
        </div>
    )
}