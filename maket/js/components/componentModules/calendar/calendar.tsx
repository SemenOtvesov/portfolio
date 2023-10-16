import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@js/hooks/useAppDispatch";
import calendarButtonClick from '@events/click/calendarButtonClick/calendarButtonClick'
import { Tpoints } from "@js/types/state/calendarsTypes";
import Image from "@componentModules/image/image";
import { useSelector } from "react-redux";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import stateCalendar from "./stateCalendar";
import CalendarContent from "./calendarContent";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

const date = new Date();

type Tprops = {
    scrollWidth: number, 
    endPoints: Tpoints, 
    setEndPoints: ActionCreatorWithPayload<Tpoints, "calendarsRouter/setSelectBikeCalendar">
}

export default function({scrollWidth, endPoints, setEndPoints}: Tprops){
    const dispatch = useAppDispatch()

    const [current, setCurrent] = useState({currYear: date.getFullYear(), currMonth: date.getMonth()})
    const [currentTwo, setCurrentTwo] = useState({
        currYear: current.currMonth !== 11 ? current.currYear : current.currYear + 1,
        currMonth: current.currMonth !== 11 ? current.currMonth + 1 : 0
        })
    const timeStart = useSelector((state:userStateInterfase)=>state.calendarsRouter.timeStart)

    useEffect(()=>{
        const numbers: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-number]')
        numbers.forEach(numberEl=>{
            numberEl.classList.remove('active', 'jumper')
            const number:number = numberEl.dataset.number ? +numberEl.dataset.number : NaN
            const calendarOneGen: HTMLDivElement | null = numberEl.closest('#calendarOneGen')
            
            if(!calendarOneGen){return}
            const calendarYear = numberEl.dataset.year ? +numberEl.dataset.year : NaN
            const calendarMonth = numberEl.dataset.month ? +numberEl.dataset.month : NaN

            if(calendarOneGen.dataset.curent){
                stateCalendar(endPoints, calendarYear, calendarMonth, number, numberEl)
            }
            if(calendarOneGen.dataset.twoCurent){
                stateCalendar(endPoints, calendarYear, calendarMonth, number, numberEl)
            }
        })

        const startTimeInput: HTMLInputElement | null = document.querySelector('#startTimeInput')
        const finishTimeInput: HTMLDivElement | null = document.querySelector('#finishTimeInput')
        const typeRentButton:HTMLElement | null = document.querySelector('.active#typeRentButton')
        const typeRent: string | undefined = typeRentButton?.dataset.rentType

        if(startTimeInput && finishTimeInput){
            if(!typeRent){return}
            if(typeRent === 'day'){
                startTimeInput.value = timeStart
                finishTimeInput.innerHTML = timeStart
            }else{
                startTimeInput.value = timeStart
                finishTimeInput.innerHTML = `${+timeStart.split(':')[0] + 2}:${timeStart.split(':')[1]}` 
            }
        }
    })

    useEffect(()=>{
        const timeStartRent: HTMLButtonElement | null = document.querySelector('#timeStartRent')
        const timeFinishRent: HTMLButtonElement | null = document.querySelector('#timeFinishRent')

        if(!(timeFinishRent && timeStartRent)){return}

        const typeRentButton:HTMLElement | null = document.querySelector('.active#typeRentButton')
        const typeRent: string | undefined = typeRentButton?.dataset.rentType
        innerRent(timeFinishRent, endPoints.endPoint, 'finish')
        innerRent(timeStartRent, endPoints.startPoint)

        function innerRent(el:HTMLButtonElement, point: {year?:number, month?: number, day?: number}, type?: string){
            if(!point.year){el.innerHTML = ''; return}
            const Day = point.day;
            const Month = point.month;
            const Year = point.year % 100;

            const finistTime = type ? 
                typeRent === 'hour' ? `${+timeStart.split(':')[0] + 2}:${timeStart.split(':')[1]}` : timeStart
            : timeStart

            if(!(Day !== undefined && Month !== undefined && Year !== undefined)){return}
            el.innerHTML = `${Day}.${Month + 1}.${Year} ${finistTime}`
        }
    }, [endPoints])

    if(scrollWidth > 768){return (
        <CalendarContent 
            dispatch={dispatch}
            current={current}
            setCurrent={setCurrent}
            currentTwo={currentTwo}
            setCurrentTwo={setCurrentTwo}
            timeStart={timeStart}
            endPoints={endPoints}
            setEndPoints={setEndPoints}
        />
    )}
    if(scrollWidth < 769){
        return <>
            <div className="calendar__box">
                <div id="calendarButton" onClick={calendarButtonClick} className="calendar__box-close"><span></span></div>
                <div className="calendar__box-title">Свободные даты для бронирования</div>
                <div className="calendar__box-text">Городской велосипед Schwinn Traveler 20” </div>
                <div className="calendar__box-content">
                    <CalendarContent 
                        dispatch={dispatch}
                        current={current}
                        setCurrent={setCurrent}
                        currentTwo={currentTwo}
                        setCurrentTwo={setCurrentTwo}
                        timeStart={timeStart}
                        endPoints={endPoints}
                        setEndPoints={setEndPoints}
                    />
                </div>
                <div className="calendar__box-notification">
                    <Image imageType="icon" imageName="notification" sourseMod={true}/>
                    <div className="calendar__box-notification-text">При изменении дат выбранные велосипеды сбрасываются.</div>
                </div>
                <button id="calendarButton" onClick={calendarButtonClick} className="calendar__box-button">Применить</button>
            </div>
        </>
    }
}