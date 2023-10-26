import React, { useEffect } from "react";
import infoMain from "@middleComponents/info/infoMain/infoMain";
import jumper from "@middleComponents/jumper/jumper";
import infoSlider from "@js/components/middleComponents/info/infoSlider/infoSlider";

export default ()=>{
    return <div className="info__container">
        {infoMain()}
        {jumper()}
        {infoSlider()}
    </div>
}