import { TauthState } from '@app/locTypes/state/authState';
import { PayloadAction } from '@reduxjs/toolkit';
import { CaseReducer } from '@reduxjs/toolkit';

type Tpaylod = { name: string; logo: string; OAuthToken?: string };
const reduser: CaseReducer<TauthState, PayloadAction<Tpaylod>> = (state, { payload }) => {
    if (payload) {
        state.logo = payload.logo;
        state.name = payload.name;
    }
};
export default reduser;
