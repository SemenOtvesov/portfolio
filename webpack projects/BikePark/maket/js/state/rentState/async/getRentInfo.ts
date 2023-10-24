import { firebaseConfig } from "@js/firebaseFolder/firebaseInit"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getRentInfo = createAsyncThunk('rentRouter/getRentInfo', async ()=>{
    return await fetch(`${firebaseConfig.databaseURL}/bikeRentInfo.json`).then(rez=>rez.json()).then(rez=>{
        return rez || []
    })
})