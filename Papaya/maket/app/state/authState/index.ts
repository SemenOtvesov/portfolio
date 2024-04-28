import { TauthState } from '@app/locTypes/state/authState';
import { createSlice } from '@reduxjs/toolkit';

import { setAuth } from './asyncThunk/setAuthThunk';
import { setOAuthToken } from './asyncThunk/setOAuthTokenThunk';

import setAuthReduser from './extraReducers/setAuthReduser';

export const initialState: TauthState = {
    name: 'Вы не авторизованны',
    logo: '',
    OAuthToken: '',
};

const authState = createSlice({
    name: 'authState',
    initialState,
    reducers: {},
    extraReducers: build => {
        build.addCase(setAuth.fulfilled, setAuthReduser);
        build.addCase(setOAuthToken.fulfilled, setAuthReduser);
    },
});

export const {} = authState.actions;
export default authState;
