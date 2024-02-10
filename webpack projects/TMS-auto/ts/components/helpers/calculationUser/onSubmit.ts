import { TcalcCarForm } from '@locTypes/forms/calcCarForm';
import { TbrandList, Tcountry } from '@locTypes/state/carState';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { UseFormReset } from 'react-hook-form';

type Tprops = {
    data: TcalcCarForm;
    router: AppRouterInstance;
    brandList: TbrandList;
    reset: UseFormReset<TcalcCarForm>;
};
const onSubmit = ({ data, router, brandList, reset }: Tprops) => {
    let country: Tcountry = 'japan';
    brandList.forEach(el => el.brand === data.brand && (country = el.loc));
    router.replace(
        `/${country === 'japan' ? 'statisticsJapan' : 'statisticsKorea'}/${data.brand}/`,
    );
    reset();
};
export default onSubmit;
