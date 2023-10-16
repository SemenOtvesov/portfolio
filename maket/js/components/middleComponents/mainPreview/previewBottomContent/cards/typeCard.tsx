import React from "react";
import RadioButtons from "../radioButtons/radioButtons";

export default ()=>{
    return (
        <div className="main__preview-bottom-card">
            <div className="main__preview-bottom-card-title">Тип аренды</div>

            <div className="main__preview-bottom-card-input-box">
                <RadioButtons/>
            </div>
        </div>
    )
}