import { TrootState } from '@js/state/store';
import getItemId from '@js/helpers/getUserInfoCommonListItemId';
import { TuserInfoCommonListItemNames } from '@js/types/state/user/userState';
import { createAsyncThunk } from '@reduxjs/toolkit';
import deleteCommonItem from '../../requests/commonItem/deleteCommonItem';
import getMonthKey from '@js/helpers/month/getMonthKey';

export default createAsyncThunk<
    { id: number; type: TuserInfoCommonListItemNames },
    { id: number; type: TuserInfoCommonListItemNames },
    { state: TrootState }
>('userState/commonItemDeleteRequest', async ({ id, type }, { getState, rejectWithValue }) => {
    const userState = getState().userState;
    const userUid = userState.userUid;
    if (!userState.activeMonth) {
        return rejectWithValue('');
    }
    let itemId = getItemId(type, userState.activeMonth, id);

    let check = false;

    const monthKey = getMonthKey({
        activeMonth: userState.activeMonth,
        monthList: userState.user?.monthList,
        monthListKey: userState.user?.monthListKey,
    });
    if (monthKey) {
        await deleteCommonItem({ userUid, monthKey, type, id: itemId }).then(rez => (check = rez));
    }

    if (!check) {
        return rejectWithValue('');
    } else {
        return { id, type };
    }
});
