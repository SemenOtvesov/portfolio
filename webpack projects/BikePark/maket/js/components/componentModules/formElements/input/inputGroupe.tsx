import React from "react";

interface Tprops extends React.HTMLAttributes<HTMLDivElement> {}
function inputGroupe({...props}: Tprops) {
    return <div 
        {...props} 
        className={`input-groupe ${props.className ? props.className : ''}`}
    />
}
export default inputGroupe