import { TurlState } from '@js/types/functions/getUrl';

type Tprops = {
    urlObj: TurlState;
    modClass: string | undefined;
};
export default function genClassName({ urlObj, modClass }: Tprops) {
    if (urlObj.pngUrl || urlObj.svgUrl) {
        return modClass || '';
    } else {
        return `loading-img ${modClass || ''}`;
    }
}
