import React from "react";
import Button from "./button";
import { useDispatch, useSelector } from "react-redux";
import { userStateInterfase } from "@js/types/state/userStateTypes";


export default ()=>{
    const dispatch = useDispatch()
    const activeTypeRentDate = useSelector((state: userStateInterfase)=>state.calendarsRouter.activeTypeRentDate)
    return (
        <div className="main__preview-bottom-card-radio">
            <Button dispatch={dispatch} activeTypeRentDate={activeTypeRentDate} typeButton='day'/>
            <Button dispatch={dispatch} activeTypeRentDate={activeTypeRentDate} typeButton='hour'/>
        </div>
    )
}