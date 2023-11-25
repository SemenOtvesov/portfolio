import { auth } from '@js/firebase/firebaseInit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { signOut } from 'firebase/auth';

export default createAsyncThunk('userState/logoutRequest', async () => {
    return await signOut(auth);
});
