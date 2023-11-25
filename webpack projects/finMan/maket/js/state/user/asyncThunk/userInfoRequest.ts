import { createAsyncThunk } from '@reduxjs/toolkit';
import getUserInfo from '../requests/getUserInfo';

export default createAsyncThunk('userState/userInfoRequest', async (userUid: string) => {
    return await getUserInfo(userUid);
});
