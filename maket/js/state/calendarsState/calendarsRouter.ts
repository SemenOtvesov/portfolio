import { Tpoints, TstateCalendars, TtypeRentPlase } from "@js/types/state/calendarsTypes";
import { createSlice } from "@reduxjs/toolkit";

const date = new Date();
const {actYear, actMonth, actDay} = {actYear: date.getFullYear(), actMonth: date.getMonth(), actDay: date.getDate()}

const initialState: TstateCalendars = {
    selectBikeCalendar: {startPoint: {year: actYear, month: actMonth, day: actDay}, endPoint: {year: actYear, month: actMonth, day: actDay + 1}},
    activeTypeRentDate: 'day',
    activeTypeRentPlase: 'address',
    timeStart: '12:00'
}

export const calendarsRouter = createSlice({
    name:'calendarsRouter',
    initialState,
    reducers: {
        setSelectBikeCalendar: (state: TstateCalendars, action: {payload: Tpoints})=>{
            state.selectBikeCalendar = action.payload
        },
        setActiveTypeRentDate: (state: TstateCalendars, action: {payload: 'day' | 'hour'})=>{
            if(action.payload === state.activeTypeRentDate){return}
            state.activeTypeRentDate = action.payload

            let newEndPoint
            if(action.payload === 'day'){
                newEndPoint = {...state.selectBikeCalendar.startPoint}
                if(!newEndPoint.day){return}
                newEndPoint.day = newEndPoint.day + 1
            }
            if(action.payload === 'hour'){
                newEndPoint = {...state.selectBikeCalendar.startPoint}
            }

            if(!newEndPoint){return}
            state.selectBikeCalendar = {...state.selectBikeCalendar, endPoint: newEndPoint}

        },
        setActiveTypeRentPlase: (state: TstateCalendars, action: {payload: TtypeRentPlase})=>{
            state.activeTypeRentPlase = action.payload
        },
        setTimeStart: (state: TstateCalendars, action: {payload: string})=>{
            state.timeStart = action.payload
        },
    }
})

export const {setSelectBikeCalendar, setActiveTypeRentDate, setTimeStart, setActiveTypeRentPlase} = calendarsRouter.actions