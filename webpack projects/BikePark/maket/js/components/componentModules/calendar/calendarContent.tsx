import React from "react";

import createNumbers from "./createNumbers";
import calendarNextMonthClick from "@js/mainFunctions/events/click/calendar/calendarNextMonthClick";
import calendarLastMonthClick from "@js/mainFunctions/events/click/calendar/calendarLastMonthClick";
import calendarNumbersClick from "@js/mainFunctions/events/click/calendar/calendarNumbersClick";
import calendarListenerChange from "@js/mainFunctions/events/change/calendar/calendarListenerChange";
import { Tpoints } from "@js/types/state/calendarsTypes";
import { Tdispatch } from "@js/types/state/allState";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const DaysOfWeek = ['ПН','ВТ','СР','ЧТ','ПТ','СУ','ВС'];
const Months =['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

type Tcurrent = {currYear: number; currMonth: number;}
type Tprops = {
    dispatch: Tdispatch,
    current: Tcurrent, 
    setCurrent: (a: ((current: Tcurrent)=>Tcurrent) | Tcurrent)=>void
    currentTwo: Tcurrent,
    setCurrentTwo: (a: ((current: Tcurrent)=>Tcurrent) | Tcurrent)=>void
    timeStart: string,
    endPoints: Tpoints,
    setEndPoints: ActionCreatorWithPayload<Tpoints, "calendarsRouter/setSelectBikeCalendar">
}

export default ({dispatch, current, currentTwo, timeStart, setCurrent, setCurrentTwo, endPoints, setEndPoints}: Tprops)=>{
    return <>
        <div id="calendarOneGen" data-curent data-year={current.currYear} data-month={current.currMonth} className="calendar__item">
            
            <div className="calendar__item-top">
                <div className="calendar__item-top-right">
                    <div className="calendar__item-title">{Months[current.currMonth]}</div>
                    <div className="calendar__item-arrow-box">
                        <span id="calendarLastMonth" onClick={()=>calendarLastMonthClick(setCurrent)} className="calendar__item-arrow up"/>
                        <span id="calendarNextMonth" onClick={()=>calendarNextMonthClick(setCurrent)} className="calendar__item-arrow down"/>
                    </div>
                </div>
                <input id="startTimeInput" 
                    onChange={(e)=>calendarListenerChange(dispatch, e)}
                    value={timeStart}
                    className="calendar__item-input"
                />
            </div>

            <div onClick={(e)=>calendarNumbersClick({dispatch, endPoints, setEndPoints, event: e})} className="calendar__item-bottom">
                <ul className="calendar__item-bottom-line">
                    {DaysOfWeek.map(el=><li key={Math.random()} className="calendar__item-bottom-day">{el}</li>)}
                </ul>
                {createNumbers(current.currYear, current.currMonth)}
            </div>

        </div>

        <div id="calendarOneGen" data-two-curent data-year={currentTwo.currYear} data-month={currentTwo.currMonth}  className="calendar__item">

            <div className="calendar__item-top">
                <div className="calendar__item-top-right">
                    <div className="calendar__item-title">{Months[currentTwo.currMonth]}</div>
                    <div className="calendar__item-arrow-box">
                        <span id="calendarLastTwoMonth" onClick={()=>calendarLastMonthClick(setCurrentTwo)} className="calendar__item-arrow up"/>
                        <span id="calendarNextTwoMonth" onClick={()=>calendarNextMonthClick(setCurrentTwo)} className="calendar__item-arrow down"/>
                    </div>
                </div>
                <div id="finishTimeInput" className="calendar__item-input">12:00</div>
            </div>

            <div onClick={(e)=>calendarNumbersClick({dispatch, endPoints, setEndPoints, event: e})} className="calendar__item-bottom">
                <ul className="calendar__item-bottom-line">
                    {DaysOfWeek.map(el=><li key={Math.random()} className="calendar__item-bottom-day">{el}</li>)}
                </ul>
                {createNumbers(currentTwo.currYear, currentTwo.currMonth)}
            </div>

        </div>
    </>
}