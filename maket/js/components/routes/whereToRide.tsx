import React, { useEffect } from "react";
import { ToutletContext } from "@js/types/outletContext";
import { useOutletContext } from "react-router-dom";

import { equalSidesFn } from "@mainFunctions/setDOM/equalSidesFn/equalSidesFn";

import ridePlaceMain from "@middleComponents/ride/ridePlaceMain/ridePlaceMain";
import ridePlaceSubtitle from "@middleComponents/ride/ridePlaceSubtitle/ridePlaceSubtitle";
import jumper from "@middleComponents/jumper/jumper";

export default ()=>{
    const {scrollWidth}: ToutletContext = useOutletContext()

    useEffect(()=>{
        equalSidesFn()
    })

    return <div className="delivery__container">
        {ridePlaceMain(scrollWidth)}
        {jumper()}
        {ridePlaceSubtitle(scrollWidth)}
    </div>
}