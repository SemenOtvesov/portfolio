import { storage } from '@firebaseInit';
import {
    TgetUrl,
    TgetUrlPNGProps,
    TgetUrlParams,
    TgetUrlSVGProps,
} from '@js/types/functions/getUrl';
import { getDownloadURL, ref } from 'firebase/storage';

export default ({
    imageName,
    imageType,
    sourseMod,
    svg,
}: TgetUrlPNGProps | TgetUrlSVGProps) => {
    const pathWebp = `${imageType}/webp/${imageName}.webp`;
    const pathPng = `${imageType}/png/${imageName}.png`;
    const pathSvg = `${imageType}/svg/${imageName}.svg`;

    if (svg) {
        return getUrl({ pathSvg });
    }
    if (sourseMod) {
        return getUrl({ pathWebp, pathPng });
    } else {
        return getUrl({ pathPng });
    }
};

async function getUrl({ pathPng, pathSvg, pathWebp }: TgetUrlParams): TgetUrl {
    let webpUrl: string = 'err';
    let pngUrl: string = 'err';
    let svgUrl: string = 'err';

    if (pathSvg) {
        await getDownloadURL(ref(storage, pathSvg))
            .then(url => (svgUrl = url))
            .catch(err => (svgUrl = 'err'));
        await getDownloadURL(ref(storage, pathSvg))
            .then(url => (svgUrl = url))
            .catch(err => (svgUrl = 'err'));
        return { svgUrl };
    }
    if (pathWebp) {
        await getDownloadURL(ref(storage, pathWebp))
            .then(url => (webpUrl = url))
            .catch(err => (webpUrl = 'err'));
        await getDownloadURL(ref(storage, pathPng))
            .then(url => (pngUrl = url))
            .catch(err => (pngUrl = 'err'));
        return { webpUrl, pngUrl };
    } else if (pathPng) {
        await getDownloadURL(ref(storage, pathPng))
            .then(url => (pngUrl = url))
            .catch(err => (pngUrl = 'err'));
        return { pngUrl };
    }
    return {};
}
