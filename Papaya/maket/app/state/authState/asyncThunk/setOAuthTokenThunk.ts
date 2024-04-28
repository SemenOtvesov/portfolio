import { TrootState } from '@app/state/store';
import { userAuth } from '@maket/api/response/userAuth';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const setOAuthToken = createAsyncThunk(
    'authState/setOAuthToken',
    async (data: string, { getState }) => {
        const state = getState() as TrootState;
        const res = await userAuth(data);
        return { ...res, OAuthToken: data };
    },
);
