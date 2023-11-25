import { TuseAppDispatch } from '@js/hooks/useAppDispatch';
import loginRequest from '@js/state/user/asyncThunk/loginRequest';
import regRequest from '@js/state/user/asyncThunk/regRequest';
import { TloginForm } from '@js/types/forms/login';

type Tprops = {
    data: TloginForm;
    dispatch: TuseAppDispatch;
};
const loginHandleSubmit = ({ data, dispatch }: Tprops) => {
    if (data.name) {
        dispatch(
            regRequest({ mail: data.mail, pass: data.pass, name: data.name, phone: data.phone }),
        );
    } else {
        dispatch(loginRequest({ mail: data.mail, pass: data.pass }));
    }
};
export default loginHandleSubmit;
