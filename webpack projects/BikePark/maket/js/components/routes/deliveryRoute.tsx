import React from "react";
import deliveryRules from "@middleComponents/deliveryRules/deliveryRules";
import { ToutletContext } from "@js/types/outletContext";
import { useOutletContext } from "react-router-dom";

export default ()=>{
    const {scrollWidth}: ToutletContext = useOutletContext()

    return <div className="delivery__container">
        {deliveryRules(scrollWidth)}
    </div>
}