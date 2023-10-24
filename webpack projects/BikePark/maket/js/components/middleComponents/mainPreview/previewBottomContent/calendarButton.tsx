import React from "react";
import calendarButtonClick from '@events/click/calendarButtonClick/calendarButtonClick'

interface Tprops extends React.HTMLAttributes<HTMLDivElement> {
    type: 'start' | 'finish'
}

export default ({type, ...props}: Tprops)=>{
    return (
        <div
            {...props}
            data-testid={'calendarButton'} 
            id="calendarButton" 
            onClick={calendarButtonClick} 
            className={`select-box ${props.className ? props.className : ''}`}
        >
            <button id={type === 'start' ? "timeStartRent" : "timeFinishRent"} className="select-button"></button>
            <div id="selectArrow" className="select-arrow"><span /></div>
        </div>
    )
}