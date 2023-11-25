import { TregState } from '../forms/login';

export type TlayoutContext = {
    regState?: TregState;
    setRegState?: React.Dispatch<React.SetStateAction<TregState>>;
};
