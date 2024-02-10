import { TurlState } from '@locTypes/helpers/getUrl';

type Tprops = {
    urlObj: TurlState;
    modClass?: string | undefined;
};
export default function genClassName({ urlObj, modClass }: Tprops) {
    if (urlObj.pngUrl || urlObj.svgUrl) {
        return modClass || '';
    } else {
        return `loading-img ${modClass || ''}`;
    }
}
