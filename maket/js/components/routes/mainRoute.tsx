import { ToutletContext } from "@js/types/outletContext";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import MainPreview from "@middleComponents/mainPreview/mainPreview";
import Jumper from "@middleComponents/jumper/jumper";
import SearchResult from "@middleComponents/searchResult/searchResult";
import { equalSidesFn } from "@js/mainFunctions/setDOM/equalSidesFn/equalSidesFn";
import TypeBicycle from "@middleComponents/typeBicycle/typeBicycle";

export default()=>{
    const {scrollWidth}: ToutletContext = useOutletContext()

    useEffect(()=>{
        equalSidesFn()
    })
    return <>
        <div className="main__container">
            <MainPreview scrollWidth={scrollWidth}/>
            <Jumper/>
            <TypeBicycle/>
            <Jumper/>
            <SearchResult/>
        </div>
    </>
}