import { createAsyncThunk } from '@reduxjs/toolkit';
import postMonth from '../requests/postMonth';
import { TrootState } from '@js/state/store';
import { Tmonth } from '@js/types/state/user/userState';

type ectType = { body: Tmonth; key: string } | undefined;
type entType = Tmonth;

export default createAsyncThunk<ectType, entType, { state: TrootState }>(
    'userState/monthAddRequest',
    async (body, { getState, rejectWithValue }) => {
        const userUid = getState().userState.userUid;
        const res = await postMonth(userUid, body);
        if (res) {
            return res;
        } else {
            return rejectWithValue('');
        }
    },
);
