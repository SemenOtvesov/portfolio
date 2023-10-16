import React, { useEffect } from "react";
import infoMain from "@middleComponents/info/infoMain/infoMain";
import { equalSidesFn } from "@mainFunctions/setDOM/equalSidesFn/equalSidesFn";
import jumper from "@middleComponents/jumper/jumper";
import infoSlider from "@js/components/middleComponents/info/infoSlider/infoSlider";

export default ()=>{
    useEffect(()=>{
        equalSidesFn()
    })

    return <div className="info__container">
        {infoMain()}
        {jumper()}
        {infoSlider()}
    </div>
}