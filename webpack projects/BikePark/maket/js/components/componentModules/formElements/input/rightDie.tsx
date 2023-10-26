import React from "react";
import { FieldError } from "react-hook-form";

interface Tprops extends React.HTMLAttributes<HTMLDivElement> {
    error: FieldError | undefined,
    value: string
}

export default ({error, value, ...props}: Tprops)=>{
    return (
    <div 
        {...props}
        className={`input-rightDie ${props.className ? props.className : ''}`}
    >
        {createIcon({error, value})}
    </div>)
}

function createIcon({error, value}: Tprops){
    if(!value){return <></>}
    return <div className={`icon-${!error ? 'check' : 'plus'}`}></div>
}