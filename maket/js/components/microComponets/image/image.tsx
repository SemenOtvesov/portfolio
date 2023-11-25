import getUrl from '@js/helpers/getUrl';
import { TgetUrl, TurlState } from '@js/types/functions/getUrl';
import React, { useMemo, useState } from 'react';
import genClassName from './genClassName';

type Tprops = {
    imageType: 'image' | 'icon' | 'bikeImage';
    imageName: string;
    modClass?: string;
};
type PNGimageProps = Tprops & { sourseMod: boolean; svg?: never };
type SVGimageProps = Tprops & { svg: boolean; sourseMod?: never };

export default React.memo(
    ({ imageType, imageName, sourseMod, modClass, svg }: PNGimageProps | SVGimageProps) => {
        const [urlObj, setUrlObj] = useState<TurlState>({
            webpUrl: '',
            pngUrl: '',
            svgUrl: '',
        });
        useMemo(() => {
            const retFn = (respons: TgetUrl) => respons.then(res => setUrlObj(res));

            if (sourseMod) {
                const respons = getUrl({ imageType, imageName, sourseMod });
                return retFn(respons);
            }
            if (svg) {
                const respons = getUrl({ imageType, imageName, svg });
                return retFn(respons);
            }
        }, [imageType, imageName, sourseMod, svg]);

        if (urlObj.pngUrl === 'err') {
            return (
                <picture className="errorDownload">
                    <div className="img-mask" />
                    <img style={{ width: '100%' }} src={urlObj.pngUrl} alt="" />
                </picture>
            );
        }
        return (
            <picture className={genClassName({ urlObj, modClass })}>
                <div className="img-mask" />
                {sourseMod ? <source srcSet={urlObj.webpUrl} /> : ''}
                <img src={svg ? urlObj.svgUrl : urlObj.pngUrl} alt="" />
            </picture>
        );
    },
);
