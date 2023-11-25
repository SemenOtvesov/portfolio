import { TrootState } from '@js/state/store';
import getItemId from '@js/helpers/getUserInfoCommonListItemId';
import {
    TuserInfoCommonListItem,
    TuserInfoCommonListItemNames,
} from '@js/types/state/user/userState';
import { createAsyncThunk } from '@reduxjs/toolkit';
import putCommonItem from '../../requests/commonItem/putCommonItem';
import getMonthKey from '@js/helpers/month/getMonthKey';

export default createAsyncThunk<
    { data: TuserInfoCommonListItem | undefined; type: TuserInfoCommonListItemNames },
    { body: TuserInfoCommonListItem; type: TuserInfoCommonListItemNames },
    { state: TrootState }
>('userState/commonItemSetRequest', async ({ body, type }, { getState, rejectWithValue }) => {
    const userState = getState().userState;
    const userUid = userState.userUid;
    let data: TuserInfoCommonListItem | undefined;

    if (!userState.activeMonth) {
        return rejectWithValue('');
    }
    let id = getItemId(type, userState.activeMonth, body.id);

    const monthKey = getMonthKey({
        activeMonth: userState.activeMonth,
        monthList: userState.user?.monthList,
        monthListKey: userState.user?.monthListKey,
    });
    if (monthKey) {
        await putCommonItem({ userUid, monthKey, body, type, id }).then(rez => (data = rez));
    }
    return { data, type };
});
