import { TuserQuetion, TuserQuetionCall } from '@locTypes/forms/userQuestion';
import { UseFormReset } from 'react-hook-form';

type Tprops = {
    data: TuserQuetion | TuserQuetionCall;
    reset: UseFormReset<TuserQuetion | TuserQuetionCall>;
};
const onChange = ({ data, reset }: Tprops) => {
    reset();
};
export default onChange;
