import React, { RefObject, useRef } from "react";
import { Control, Controller, ControllerFieldState, UseFormStateReturn } from "react-hook-form";
import { TcontactForm } from "./contactFormGeneric";

type Tprops = {
    control:  Control<TcontactForm, any>
}

export default ({control}: Tprops)=>{
    const checkBoxRef = useRef<HTMLDivElement>(null) 
    return (
        <Controller rules={{required: true}} control={control} name="approval" render={({field, fieldState, formState})=>(
            <div ref={checkBoxRef}
                onClick={()=>field.onChange(!field.value)} 
                className={`contact__form-checkbox ${field.value ? 'active' : ''} 
                    ${checkBoxState({formState, fieldState, checkBoxRef})}
                `}
            >
                <span/>
            </div>
        )}/>
    )
}

type TpropsCheckBoxState = {
    formState: UseFormStateReturn<TcontactForm>
    fieldState: ControllerFieldState,
    checkBoxRef: RefObject<HTMLDivElement>
}
function checkBoxState({formState, fieldState, checkBoxRef}: TpropsCheckBoxState){
    if(formState.isSubmitting && fieldState.error){
        checkBoxRef.current?.classList.add('err')
        setTimeout(()=>{
            checkBoxRef.current?.classList.remove('err')
        }, 300)
    }
    return ''
}