import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rentRouter } from "./rentState/rentRouter";
import { userRouter } from "./userState/userRouter";
import { calendarsRouter } from "./calendarsState/calendarsRouter";

const rootReduser = combineReducers({
    [rentRouter.name]: rentRouter.reducer,
    [userRouter.name]: userRouter.reducer,
    [calendarsRouter.name]: calendarsRouter.reducer
})

export const store = configureStore({
    reducer: rootReduser
})

export type AppDispatch = typeof store.dispatch