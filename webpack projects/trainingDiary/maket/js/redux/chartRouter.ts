import { TChartState, Tstate } from "@js/types/stateTypes";
import { createSlice, current } from "@reduxjs/toolkit";

export const chartRouter = createSlice({
    name: 'chartRouter',
    initialState: {
        activeApproachsDoughnut: [],
        activeApproachsBar: []
    }, 
    reducers: {
        changeActiveApproachsDoughnut: (state: TChartState, action)=>{
            state.activeApproachsDoughnut = action.payload
        },
        addActiveApproachsDoughnut: (state: TChartState, action)=>{
            state.activeApproachsDoughnut.push(action.payload)
        },
        deleteActiveApproachsDoughnut: (state: TChartState, action)=>{
            state.activeApproachsDoughnut = state.activeApproachsDoughnut.filter(el=>{
                if(el !== action.payload){
                    return el
                }
            })
        },


        changeActiveApproachsBar: (state: TChartState, action)=>{
            state.activeApproachsBar = action.payload
        },
        addActiveApproachsBar: (state: TChartState, action)=>{
            state.activeApproachsBar.push(action.payload)
        },
        deleteActiveApproachsBar: (state: TChartState, action)=>{
            state.activeApproachsBar = state.activeApproachsBar.filter(el=>{
                if(el !== action.payload){
                    return el
                }
            })
        },
    }
})

export const {
    changeActiveApproachsDoughnut, 
    addActiveApproachsDoughnut, 
    deleteActiveApproachsDoughnut,

    changeActiveApproachsBar,
    addActiveApproachsBar,
    deleteActiveApproachsBar
} = chartRouter.actions