import TypeBicycleItem from "@js/components/componentModules/typeBicycleItem/typeBicycleItem";
import { ToutletContext } from "@js/types/outletContext";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import { TactiveBike } from "@js/types/state/rentStateTypes";

import React, { useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { useAppDispatch } from "@js/hooks/useAppDispatch";

import { Tpoints } from "@js/types/state/calendarsTypes";
import typeBicycleSlideButtonClick from "@events/click/typeBicycleSlideButtonClick/typeBicycleSlideButtonClick";
import { setLocalBikeInfo } from "@js/state/rentState/rentRouter";
import Image from "@componentModules/image/image";

const bikeInfo = [
    {imgName: 'aluminiumBike', title: 'Алюминий', prise: 90, moreText: 'Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.'},
    {imgName: 'carbonBike', title: 'Карбон', prise: 180, moreText: 'Легкие и хорошо заглушают вибрацию неровностей. Хорошо подходят для крупных людей – для мало весящих езда будет жесткой.'},
    {imgName: 'mountainBike', title: 'Горный/городской', prise: 90, moreText: 'Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.'},
    {imgName: 'economBike', title: 'Городской эконом', prise: 45, moreText: 'Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.'},
]

export default memo(()=>{
    const dispatch = useAppDispatch()
    const {scrollWidth}: ToutletContext = useOutletContext()

    const activeBike: TactiveBike = useSelector((state: userStateInterfase)=>state.rentRouter.activeBike)
    const selectBikeCalendar: Tpoints = useSelector((state: userStateInterfase)=> state.calendarsRouter.selectBikeCalendar)

    useEffect(()=>{
        const addTypeBikeButtons: NodeListOf<HTMLElement> = document.querySelectorAll('#addTypeBike')
        addTypeBikeButtons.forEach(el=>{
            const typeBike = el.dataset.typeBike
            if(!((typeBike === 'alum') || (typeBike === 'carbon') || (typeBike === 'mountain') || (typeBike === 'city'))){return}
            if(activeBike.includes(typeBike)){
                el.classList.add('active')
            }else{el.classList.remove('active')}
        }) 
    })

    return <div className="typeBicycle wrapper-component"> 
        <div className="typeBicycle__title-box">
            <div className="typeBicycle__title">Тип велосипеда</div>
            {scrollWidth > 1024 ? '' : 
                <div id="typeBicycleSlideButton" onClick={typeBicycleSlideButtonClick} className="typeBicycle__title-slide">
                    <Image imageType="icon" imageName="click" sourseMod={false}/>
                    <span></span>
                </div>}
        </div>
        <ul id="typeBicycleList" className="typeBicycle__list">
            <TypeBicycleItem bikeInfo={bikeInfo}/>
        </ul>

        <button onClick={()=>dispatch(setLocalBikeInfo(selectBikeCalendar))} className="typeBicycle__button">
            Найти
        </button>
    </div>
})