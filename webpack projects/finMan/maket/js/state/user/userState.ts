import { TuserState } from '@js/types/state/user/userState';
import { createSlice } from '@reduxjs/toolkit';
import loginRequest from './asyncThunk/loginRequest';

import loginReduserFulfilled from './extraReducers/loginReduserFulfilled';
import regReduserFulfilled from './extraReducers/regReduserFulfilled';
import logoutReduserFulfilled from './extraReducers/logoutReduserFulfilled';
import addMonthReduserFulfilled from './extraReducers/addMonthReduserFulfilled';
import setCommonItemReduserFulfiled from './extraReducers/commonItem/setCommonItemReduserFulfiled';
import addCommonItemReduserFulfilled from './extraReducers/commonItem/addCommonItemReduserFulfilled';
import deleteCommonItemReduserFulfiled from './extraReducers/commonItem/deleteCommonItemReduserFulfiled';

import setErrRequestReduser from './redusers/setErrRequestReduser';
import setUserUidReduser from './redusers/setUserUidReduser';
import setActiveMonthReduser from './redusers/setActiveMonthReduser';

import regRequest from './asyncThunk/regRequest';
import userInfoRequest from './asyncThunk/userInfoRequest';
import logoutRequest from './asyncThunk/logoutRequest';
import incomeAddRequest from './asyncThunk/commonItem/commonItemAddRequest';
import commonItemSetRequest from './asyncThunk/commonItem/commonItemSetRequest';
import commonItemDeleteRequest from './asyncThunk/commonItem/commonItemDeleteRequest';
import monthAddRequest from './asyncThunk/monthAddRequest';

const initialState: TuserState = {
    userUid: '',
    errRequest: false,
    modified: false,
};

const userState = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        setErrRequest: setErrRequestReduser,
        setUserUid: setUserUidReduser,
        setActiveMonth: setActiveMonthReduser,
    },
    extraReducers: build => {
        build.addCase(loginRequest.fulfilled, loginReduserFulfilled);
        build.addCase(regRequest.fulfilled, regReduserFulfilled);
        build.addCase(userInfoRequest.fulfilled, loginReduserFulfilled);
        build.addCase(logoutRequest.fulfilled, logoutReduserFulfilled);

        build.addCase(monthAddRequest.fulfilled, addMonthReduserFulfilled);

        build.addCase(incomeAddRequest.fulfilled, addCommonItemReduserFulfilled);
        build.addCase(commonItemSetRequest.fulfilled, setCommonItemReduserFulfiled);
        build.addCase(commonItemDeleteRequest.fulfilled, deleteCommonItemReduserFulfiled);
    },
});

export const { setErrRequest, setUserUid, setActiveMonth } = userState.actions;

export default userState;
