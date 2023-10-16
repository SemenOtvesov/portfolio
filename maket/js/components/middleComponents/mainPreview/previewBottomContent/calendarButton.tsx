import React from "react";
import calendarButtonClick from '@events/click/calendarButtonClick/calendarButtonClick'

interface Tprops extends React.HTMLAttributes<HTMLDivElement> {
    type: 'start' | 'finish'
}

export default ({type}: Tprops)=>{
    return (
        <div data-testid={'calendarButton'} id="calendarButton" onClick={calendarButtonClick} className="select-box">
            <button id={type === 'start' ? "timeStartRent" : "timeFinishRent"} className="select-button"></button>
            <div id="selectArrow" className="select-arrow"><span /></div>
        </div>
    )
}