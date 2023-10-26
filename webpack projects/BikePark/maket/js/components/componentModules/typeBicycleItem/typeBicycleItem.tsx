import { useAppDispatch } from "@js/hooks/useAppDispatch";
import React from "react";
import addTypeBikeClick from '@events/click/addTypeBikeClick/addTypeBikeClick'
import moreBicycleButtonClick from '@events/click/moreBicycleButtonClick/moreBicycleButtonClick'
import Image from "@componentModules/image/image";

type TbikeInfo = Array<{imgName: string, title: string,prise: number, moreText: string}>

export default React.memo(({bikeInfo}:{bikeInfo:TbikeInfo})=>{
    const dispatch = useAppDispatch()

    return bikeInfo.map(item=>(
    <li key={Math.random()} data-item-list className="typeBicycle__item">
            <Image imageType='image' imageName={item.imgName} sourseMod={true}/>
            <div className="typeBicycle__item-plug"></div>
            <div className="typeBicycle__item-content">
            <div className="typeBicycle__item-content-plug"></div>
                <div className="typeBicycle__item-title">{item.title}</div>
                <div className="typeBicycle__item-bottom-box">
                    <div className="typeBicycle__item-prise">{item.prise} AED</div>
                    <div className="typeBicycle__item-bottom-right">
    
                        <button id="moreBicycleButton" onClick={moreBicycleButtonClick} className="typeBicycle__item-button icon">
                            <Image imageType="icon" imageName='more' sourseMod={false}/>
                        </button>
    
                        <button id="addTypeBike" onClick={(e)=>addTypeBikeClick({dispatch,event: e})} data-type-bike={genTypeBike(item.title)} className="typeBicycle__item-button close"><span/></button>
                    </div>
                </div>
                <div id="moreBicycleEl" className="typeBicycle__item-more">
                    {item.moreText}
                </div>
            </div>
        </li>
        )
    )
})

function genTypeBike(title: string){
    if(title === 'Алюминий'){
        return 'alum'
    }
    if(title === 'Горный/городской'){
        return 'mountain'
    }
    if(title === 'Городской эконом'){
        return 'city'
    }
    if(title === 'Карбон'){
        return 'carbon'
    }
}