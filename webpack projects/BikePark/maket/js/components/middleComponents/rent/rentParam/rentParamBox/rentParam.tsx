import rentParamClick from "@js/mainFunctions/events/click/rentParamClick/rentParamClick";
import { Tdispatch } from "@js/types/state/allState";
import { TbikeRentParamInfo } from "@js/types/state/rentStateTypes";
import React from "react";
import testActiveCheckBox from "./testActiveCheckBox";
import { useDispatch } from "react-redux";

type Tprops = {
    bikeId: number,
    type: 'lock' | 'lantern' | 'helmet',
    bikeRentParamInfo: [] | TbikeRentParamInfo
}

export default ({bikeId, type, bikeRentParamInfo}: Tprops)=>{
    const dispatch = useDispatch()
    return (
        <div onClick={()=>rentParamClick({bikeId, type, dispatch})} className="rent__param checkbox-box">
            <div className={"rent__param-checkbox" + testActiveCheckBox({
                    bikeRentParamInfo,
                    type,
                    bikeId
                })
            }>
                <span/>
            </div>
        </div>
    )
}