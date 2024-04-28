import { TrootState } from '@app/state/store';
import { userAuth } from '@maket/api/response/userAuth';
import { userLogout } from '@maket/api/response/userLogout';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { initialState } from '..';

export const setAuth = createAsyncThunk(
    'authState/getAuth',
    async (data: 'login' | 'logout', { getState }) => {
        const state = getState() as TrootState;
        if (data == 'login') {
            return await userAuth(state.authState.OAuthToken);
        } else {
            await userLogout();
            return initialState;
        }
    },
);
