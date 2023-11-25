import { onAuthStateChanged } from 'firebase/auth';
import useAppDispatch from '@js/hooks/useAppDispatch';
import useAppSelector from '@js/hooks/useAppSelector';
import { setUserUid } from './userState';
import { auth } from '@js/firebase/firebaseInit';
import userInfoRequest from './asyncThunk/userInfoRequest';

export default () => {
    const userUid = useAppSelector(state => state.userState.userUid);
    const dispatch = useAppDispatch();

    onAuthStateChanged(auth, user => {
        if (!user) {
            return;
        }
        if (userUid != user.uid) {
            dispatch(setUserUid(user.uid));
            dispatch(userInfoRequest(user.uid));
        }
    });
};
