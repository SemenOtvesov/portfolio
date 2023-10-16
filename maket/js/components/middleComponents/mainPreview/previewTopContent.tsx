import Image from "@js/components/componentModules/image/image";
import React from "react";

export default ({scrollWidth}: {scrollWidth: number})=>{
    if(scrollWidth > 425){
        return <>
            <div className="main__preview-top-item">
                <div className="main__preview-title">Аренда велосипедов <br/> c доставкой</div>
            </div>

            <div className="main__preview-top-item">

                <div id="aspectSides" data-aspect="1.5" className="main__preview-top-card">
                    <Image imageType="image" imageName="helmet" sourseMod={true}/>
                    <div className="main__preview-top-card-title">Шлем</div>
                    <div className="main__preview-top-card-prise">Бесплатно</div>
                </div>
                
                <div id="aspectSides" data-aspect="1.5" className="main__preview-top-card">
                    <Image imageType="image" imageName="lantern" sourseMod={true}/>
                    <div className="main__preview-top-card-title">Фонарик</div>
                    <div className="main__preview-top-card-prise">Бесплатно</div>
                </div>

                <div id="aspectSides" data-aspect="1.5" className="main__preview-top-card">
                    <Image imageType="image" imageName="lock" sourseMod={true}/>
                    <div className="main__preview-top-card-title">Замок</div>
                    <div className="main__preview-top-card-prise">Бесплатно</div>
                </div>

            </div>
        </>
    }else{
        return <>
            <div className="main__preview-top-item">
                        <div className="main__preview-title">Аренда велосипедов <br/> c доставкой</div>
            </div>

            <div className="main__preview-top-item">

                <div id='equalSides' className="main__preview-top-card">
                    <Image imageType="image" imageName="helmet" sourseMod={true}/>
                    <div className="main__preview-top-card-prise">Бесплатно</div>
                </div>
                
                <div id='equalSides' className="main__preview-top-card">
                    <Image imageType="image" imageName="lantern" sourseMod={true}/>
                    <div className="main__preview-top-card-prise">Бесплатно</div>
                </div>

                <div id="equalSides" className="main__preview-top-card">
                    <Image imageType="image" imageName="lock" sourseMod={true}/>
                    <div className="main__preview-top-card-prise">Бесплатно</div>
                </div>

            </div>
        </>
    }
}