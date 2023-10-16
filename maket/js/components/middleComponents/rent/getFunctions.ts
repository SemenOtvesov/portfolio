import { Tpoints } from "@js/types/state/calendarsTypes"

export function getStartDate(selectBikeCalendar: Tpoints){
    const endPoint = selectBikeCalendar.startPoint
    return `${endPoint.day}.${endPoint.month}.${endPoint.year}`
}

export function getFinishTime(activeTypeRent: "day" | "hour", timeStart: string){
    const newTimeStart = [...timeStart]
    if(activeTypeRent === 'hour'){
        newTimeStart[1] = `${+newTimeStart[1] + 2}` 
    }
    return newTimeStart.join('')
}
export function getFinishDate(selectBikeCalendar: Tpoints){
    const endPoint = selectBikeCalendar.endPoint
    return `${endPoint.day}.${endPoint.month}.${endPoint.year}`
}