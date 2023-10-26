import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { TselectBikeList, userStateInterfase } from "@js/types/state/userStateTypes";
import { TbikeRentInfo } from "@js/types/state/rentStateTypes";

import RentParams from "@middleComponents/rent/rentParam/rentParams";
import Jumper from "@middleComponents/jumper/jumper";
import RentForm from "@middleComponents/rent/rentForm/rentForm";
import getBikeSelect from "@middleComponents/rent/rentParam/getBikeSelect";

export default ()=>{
    const bikeRentInfo:TbikeRentInfo = useSelector((state: userStateInterfase)=>state.rentRouter.bikeRentInfo)
    const selectBikeList: TselectBikeList | undefined = useSelector((state: userStateInterfase)=>state.userRouter.user.selectBikeList)

    const bikeList = useMemo(()=>
        getBikeSelect(bikeRentInfo, selectBikeList), [bikeRentInfo, selectBikeList]
    ) // отсортированный список выбраных велосипедов

    return <div className="rent__container">
        <RentParams bikeList={bikeList}/>
        <Jumper/>
        <RentForm selectBikeList={selectBikeList} bikeList={bikeList}/>
    </div> 
}
