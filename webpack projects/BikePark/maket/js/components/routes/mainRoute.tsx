import React from "react";

import MainPreview from "@middleComponents/mainPreview/mainPreview";
import Jumper from "@middleComponents/jumper/jumper";
import SearchResult from "@middleComponents/searchResult/searchResult";
import TypeBicycle from "@middleComponents/typeBicycle/typeBicycle";

export default()=>{
    return <>
        <div className="main__container">
            <MainPreview/>
            <Jumper/>
            <TypeBicycle/>
            <Jumper/>
            <SearchResult/>
        </div>
    </>
}