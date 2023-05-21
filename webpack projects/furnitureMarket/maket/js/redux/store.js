import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { catalogApi } from "./query/catalogApi";
import { userApi } from "./query/userApi";
import { userSlise } from "./userRouter";

const rootReduser = combineReducers({
    [catalogApi.reducerPath]:catalogApi.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [userSlise.name]: userSlise.reducer
})

export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([catalogApi.middleware, userApi.middleware])
})