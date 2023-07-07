import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userRouter } from "./userRouter";
import { chartRouter } from "./chartRouter";

const rootReduser = combineReducers({
    [userRouter.name]: userRouter.reducer,
    [chartRouter.name]: chartRouter.reducer
})

export const store = configureStore({
    reducer: rootReduser,
})

export type AppDispatch = typeof store.dispatch