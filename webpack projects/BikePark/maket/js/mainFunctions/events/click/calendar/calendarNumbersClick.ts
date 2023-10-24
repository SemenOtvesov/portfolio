import { setEndpointsRet } from "@js/middleFunctions/setEndpointsRet/setEndpointsRet";
import { Tdispatch } from "@js/types/state/allState";
import { Tpoints } from "@js/types/state/calendarsTypes";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type Tprops = {
    dispatch: Tdispatch,
    endPoints: Tpoints,
    setEndPoints: ActionCreatorWithPayload<Tpoints, "calendarsRouter/setSelectBikeCalendar">,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
}
const calendarNumbersClick = ({dispatch, endPoints, setEndPoints, event}: Tprops) => {
    const target: any = event.target;
    const numberEl:HTMLDivElement = target.closest('#number')

    const year:number = numberEl.dataset.year ? +numberEl.dataset.year : NaN
    const month:number = numberEl.dataset.month ? +numberEl.dataset.month : NaN
    const day:number = numberEl.dataset.number ? +numberEl.dataset.number : NaN
    
    const typeRentButton:HTMLElement | null = document.querySelector('.active#typeRentButton')
    const typeRent: string | undefined = typeRentButton?.dataset.rentType
    dispatch(setEndPoints(setEndpointsRet({points: endPoints, year, month, day, typeRent})))
}
export default calendarNumbersClick