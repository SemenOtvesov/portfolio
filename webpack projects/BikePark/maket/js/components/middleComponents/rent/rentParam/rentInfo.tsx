import { userStateInterfase } from "@js/types/state/userStateTypes";
import React from "react";
import { useSelector } from "react-redux";
import { getFinishDate, getFinishTime, getStartDate } from "../getFunctions";

export default ({content}: {content: boolean})=>{
    if(!content){return <></>}
    const selectBikeCalendar = useSelector((state: userStateInterfase)=>state.calendarsRouter.selectBikeCalendar)
    const timeStart = useSelector((state: userStateInterfase)=>state.calendarsRouter.timeStart)
    const activeTypeRentDate = useSelector((state: userStateInterfase)=>state.calendarsRouter.activeTypeRentDate)
    const activeTypeRentPlase = useSelector((state: userStateInterfase)=>state.calendarsRouter.activeTypeRentPlase)

    return (
        <div className="rent__info-box">

            <div className="rent__info">
                <div className="rent__info-title">Тип аренды</div>
                <div className="rent__info-text">{activeTypeRentDate === 'day' ? 'По дням' : '2 часа'}</div>
            </div>
            
            <div className="rent__info">
                <div className="rent__info-title">Дата и время начала</div>
                <div className="rent__info-text">
                    {getStartDate(selectBikeCalendar)}
                    {" "}
                    {timeStart}
                </div>
            </div>

            <div className="rent__info">
                <div className="rent__info-title">Дата и время конца</div>
                    {getFinishDate(selectBikeCalendar)} 
                    {" "}
                    {getFinishTime(activeTypeRentDate, timeStart)}
            </div>

            <div className="rent__info">
                <div className="rent__info-title">Доставка</div>
                <div className="rent__info-text">{activeTypeRentPlase === 'address' ? "По адресу" : 'Самовывоз'}</div>
            </div>

        </div>
    )
}