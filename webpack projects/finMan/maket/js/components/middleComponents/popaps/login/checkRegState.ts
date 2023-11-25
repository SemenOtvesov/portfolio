import { TregState } from '@js/types/forms/login';

type Tprops = {
    state: TregState;
    login: any;
    reg: any;
};

export default function checkRegState({ state, login, reg }: Tprops) {
    if (state === 'login') {
        return login;
    }
    if (state === 'reg') {
        return reg;
    }
    return '';
}
