import React from "react";

import RidePlaceMain from "@middleComponents/ride/ridePlaceMain/ridePlaceMain";
import Jumper from "@middleComponents/jumper/jumper";
import RidePlaceSubtitle from "@middleComponents/ride/ridePlaceSubtitle/ridePlaceSubtitle";

export default ()=>{
    return <div className="delivery__container">
        <RidePlaceMain/>
        <Jumper/>
        <RidePlaceSubtitle/>
    </div>
}