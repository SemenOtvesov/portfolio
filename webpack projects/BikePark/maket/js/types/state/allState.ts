import { AnyAction, CombinedState, ThunkDispatch } from "@reduxjs/toolkit";
import { TrentState } from "./rentStateTypes";
import { Dispatch } from "react";


export type Tdispatch = ThunkDispatch<CombinedState<{
    rentRouter: TrentState;
    userRouter: {
        user: {};
        userInfo: {};
        userUid: undefined;
    };
    calendarsRouter: {
        selectBikeCalendar: {
            startPoint: {};
            endPoint: {};
        };
    };
}>, undefined, AnyAction> & Dispatch<AnyAction>