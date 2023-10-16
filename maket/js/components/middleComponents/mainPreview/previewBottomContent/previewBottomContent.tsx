import React from "react";
import { setSelectBikeCalendar } from "@state/calendarsState/calendarsRouter";
import { useSelector } from "react-redux";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import TypeCard from "./cards/typeCard";
import DeliveryCard from "./cards/deliveryCard";
import CalendarButton from "./calendarButton";
import Calendar from "@js/components/componentModules/calendar/calendar";

type Tprops = {
    scrollWidth: number
}

export default ({scrollWidth}: Tprops)=>{
    const selectBikeCalendar = useSelector((state:userStateInterfase)=>state.calendarsRouter.selectBikeCalendar)
    
    if(scrollWidth > 1024){
        return <>
            <TypeCard/>
            <div className="main__preview-bottom-card">
                <div className="main__preview-bottom-card-holder">
                    <div className="main__preview-bottom-card-title">Дата и время начала</div>
                    <div className="main__preview-bottom-card-title">Дата и время конца</div>
                </div>
                <div className="main__preview-bottom-card-holder select">
                    <CalendarButton type="start"/>
                    <CalendarButton type="finish"/>
                    <div id="calendar" data-select-list className="main__preview-bottom-calendar calendar">
                        <Calendar scrollWidth={scrollWidth} endPoints={selectBikeCalendar} setEndPoints={setSelectBikeCalendar}/>
                    </div>
                </div>
            </div>
            <DeliveryCard/>
        </>
    }
    if(scrollWidth < 1025 && scrollWidth > 425){
        return <>
            <TypeCard/>
            <DeliveryCard/>
            <div className="main__preview-bottom-card card-calendar">
                <div className="main__preview-bottom-card-holder">
                    <div className="main__preview-bottom-card-title">Дата и время начала</div>
                    <div className="main__preview-bottom-card-title">Дата и время конца</div>
                </div>
                <div className="main__preview-bottom-card-holder select">
                    <CalendarButton type="start"/>
                    <CalendarButton type="finish"/>
                    <div id="calendar" className="main__preview-bottom-calendar calendar">
                    <Calendar scrollWidth={scrollWidth} endPoints={selectBikeCalendar} setEndPoints={setSelectBikeCalendar}/>
                    </div>
                </div>
            </div>
        </>
    }
    if(scrollWidth < 426){
        return <>
            <TypeCard/>

            <div className="main__preview-bottom-card">
                <div className="main__preview-bottom-card-title">Дата и время начала</div>
                <CalendarButton type="start"/>
            </div>

            <div className="main__preview-bottom-card">
                <div className="main__preview-bottom-card-title">Дата и время конца</div>
                <CalendarButton type="finish"/>
            </div>

            <div id="calendar" className="main__preview-bottom-calendar calendar">
                <Calendar scrollWidth={scrollWidth} endPoints={selectBikeCalendar} setEndPoints={setSelectBikeCalendar}/>
            </div>

            <DeliveryCard/>
        </>
    }
}