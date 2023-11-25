import { auth } from '@js/firebase/firebaseInit';
import { TuserState } from '@js/types/state/user/userState';
import { CaseReducer } from '@reduxjs/toolkit';
import { signOut } from 'firebase/auth';

const setErrRequestReduser: CaseReducer<TuserState> = async state => {
    await signOut(auth);
    state.userUid = '';
    state.user = undefined;
};
export default setErrRequestReduser;
