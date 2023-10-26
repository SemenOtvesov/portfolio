import calendar from "@js/components/componentModules/calendar/calendar";
import { ToutletContext } from "@js/types/outletContext";
import React from "react";
import { useOutletContext } from "react-router-dom";
import calendarButtonClick from '@events/click/calendarButtonClick/calendarButtonClick'

export default ()=>{
    const {scrollWidth}:ToutletContext = useOutletContext()

    return  <div className="extendLease extendLease__container  wrapper-component">
        <div className="extendLease__main">
            <div className="wrapper-component-title">Продление аренды</div>
            
            {selectContent(scrollWidth)}
    
            <div className="rentForm__item">
                <div className="rentForm__item-title">Информация о доставке</div>
                <div className="rentForm__item-checkbox-box">
    
                    <div className="rentForm__item-checkbox inputArea">
                        <div className="rentForm__item-checkbox-mark"><span></span></div>
                        <div className="rentForm__item-checkbox-text">Онлайн</div>
                    </div>
    
                    <div className="rentForm__item-checkbox inputArea">
                        <div className="rentForm__item-checkbox-mark"><span></span></div>
                        <div className="rentForm__item-checkbox-text">На месте</div>
                    </div>
    
                </div>
            </div>
    
            <div className="extendLease__item">
                <div className="rentForm__item-title">Сумма доплаты</div>
                <div className="extendLease__item-prise">90 AED</div>
            </div>
    
            <button className="extendLease__button genButton">Продлить</button>
        </div>
    </div>
}

function selectContent(scrollWidth: number){
    if(scrollWidth > 425){
        return <>
            <div className="main__preview-bottom-card">
                <div className="main__preview-bottom-card-holder">
                    <div className="main__preview-bottom-card-title">Дата и время начала</div>
                    <div className="main__preview-bottom-card-title">Дата и время конца</div>
                </div>
                <div className="main__preview-bottom-card-holder select">

                    <div data-testid={'calendarButton'} id="calendarButton" onClick={calendarButtonClick} className="select-box extendLease__select-box">
                        <button id="timeStartRent" className="select-button"></button>
                        <div id="selectArrow" className="select-arrow"><span /></div>
                    </div>

                    <div data-testid={'calendarButton'} id="calendarButton" onClick={calendarButtonClick} className="select-box extendLease__select-box">
                        <button id="timeFinishRent" className="select-button"></button>
                        <div id="selectArrow" className="select-arrow"><span /></div>
                    </div>

                    <div  data-testid={'calendar'} id="calendar" data-select-list className="main__preview-bottom-calendar calendar">
                        {calendar(scrollWidth)}
                    </div>

                </div>
            </div>
        </>

    }else{
        return <>
            <div className="main__preview-bottom-card">
                <div className="main__preview-bottom-card-title">Дата и время начала</div>

                <div data-testid={'calendarButton'} id="calendarButton" onClick={calendarButtonClick} className="main__preview-bottom-card-input-box">
                    <button id="timeStartRent" className="select-button"></button>
                    <div id="selectArrow" className="select-arrow"><span /></div>
                </div>
            </div>

            <div className="main__preview-bottom-card">
                <div className="main__preview-bottom-card-title">Дата и время конца</div>

                <div data-testid={'calendarButton'} id="calendarButton" onClick={calendarButtonClick} className="main__preview-bottom-card-input-box">
                    <button id="timeFinishRent" className="select-button"></button>
                    <div id="selectArrow" className="select-arrow"><span /></div>
                </div>
            </div>

            <div  data-testid={'calendar'}  id="calendar" className="main__preview-bottom-calendar calendar">
                {calendar(scrollWidth)}
            </div>
            </>
    }
}