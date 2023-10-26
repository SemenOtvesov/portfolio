import React from "react";
import typeRentButtonClick from '@events/click/typeRentButtonClick/typeRentButtonClick'
import { Tdispatch } from "@js/types/state/allState";
import { TtypeRentDate } from "@js/types/state/calendarsTypes";

interface Tprops extends React.HTMLAttributes<HTMLButtonElement> {
    dispatch: Tdispatch,
    activeTypeRentDate: TtypeRentDate,
    typeButton: TtypeRentDate
}

export default ({dispatch, activeTypeRentDate, typeButton, ...props}: Tprops)=>{
    return (
        <button 
            {...props}
            id="typeRentButton" 
            onClick={(e)=>typeRentButtonClick({dispatch, event: e})} 
            data-rent-type={typeButton === 'day' ? 'day' : 'hour'}
            className={`main__preview-bottom-card-radio-item ${textButtonActive(activeTypeRentDate, typeButton)}`}
        >
                {typeButton === 'day' ? 'По дням' : '2 часа'}
        </button>
    )
}

function textButtonActive(activeTypeRentDate: TtypeRentDate, typeButton: TtypeRentDate){
    if(typeButton === 'day'){
        return activeTypeRentDate === 'day' && 'active'
    }else{
        return activeTypeRentDate === 'hour' && 'active'
    }
}