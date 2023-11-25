import { auth } from '@js/firebase/firebaseInit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword } from 'firebase/auth';
import getUserInfo from '../requests/getUserInfo';
import { setErrRequest } from '../userState';

type Tprops = {
    mail: string;
    pass: string;
};

export default createAsyncThunk(
    'userState/loginRequest',
    async ({ mail, pass }: Tprops, { rejectWithValue, dispatch }) => {
        let check = false;
        let userUid = '';

        await signInWithEmailAndPassword(auth, mail, pass)
            .then(user => {
                userUid = user.user.uid;
                check = true;
            })
            .catch(user => (check = false));

        if (check && userUid) {
            return await getUserInfo(userUid);
        } else {
            dispatch(setErrRequest(true));
            setTimeout(() => dispatch(setErrRequest(false)), 1000);
            return rejectWithValue('');
        }
    },
);
