import { auth } from '@js/firebase/firebaseInit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setErrRequest } from '../userState';
import { TuserInfo } from '@js/types/state/user/userState';
import postUserInfo from '../requests/postUserInfo';

export default createAsyncThunk(
    'userState/regRequest',
    async ({ mail, pass, phone, name }: TuserInfo, { rejectWithValue, dispatch }) => {
        let check = false;
        let userUid = '';

        await createUserWithEmailAndPassword(auth, mail, pass)
            .then(user => {
                userUid = user.user.uid;
                check = true;
            })
            .catch(user => (check = false));

        if (check && userUid) {
            return await postUserInfo({ userUid, userInfo: { mail, pass, phone, name } });
        } else {
            dispatch(setErrRequest(true));
            setTimeout(() => dispatch(setErrRequest(false)), 1000);
            return rejectWithValue('');
        }
    },
);
