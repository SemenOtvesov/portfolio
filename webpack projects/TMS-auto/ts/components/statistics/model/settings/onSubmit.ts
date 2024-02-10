import { TsettingsForm } from '@locTypes/forms/settingsForm';
import { setActiveModelList } from '@store/carState';
import { TappDispatch } from '@store/index';

type Tprops = {
    data: TsettingsForm;
    dispatch: TappDispatch;
};
const onSubmit = ({ data, dispatch }: Tprops) => {
    console.log(data);
    dispatch(setActiveModelList(data));
};
export default onSubmit;
