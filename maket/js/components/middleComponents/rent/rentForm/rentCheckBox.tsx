import React from "react";
import { Control } from 'react-hook-form'
import { Controller } from "react-hook-form";
import { TrentForm } from "./rentFormGeneric";

interface Tprops extends React.HTMLAttributes<HTMLDivElement> {
    nameCheckBox: string,
    control: Control<TrentForm, any>
    checkType: 'online' | 'plase'
}

export default ({nameCheckBox, control, checkType, ...props}: Tprops)=>{
    return <Controller control={control} name="payment" render={({field})=>(
        <div onClick={()=>field.onChange(checkType)} className="rentForm__item-checkbox inputArea">
        <div className={`rentForm__item-checkbox-mark ${field.value === checkType ? 'active' : ''}`}><span/></div>
            <div className="rentForm__item-checkbox-text">{checkType === 'online' ? "Онлайн" : 'На месте'}</div>
        </div>
        )
    }/>
}