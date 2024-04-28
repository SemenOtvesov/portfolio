'use client';
import React, { useEffect, useState } from 'react';
import genClassName from './genClassName';
import getUrl from '@app/helpers/getUrl';
import { TgetUrl, TpropsGetUrl, TurlState } from '@app/locTypes/helpers/getUrl';

interface Tprops extends React.HtmlHTMLAttributes<HTMLPictureElement>, TpropsGetUrl {
    modClass?: string;
}
type PNGimageProps = Tprops & { sourseMod: boolean; svg?: never };
type SVGimageProps = Tprops & { svg: boolean; sourseMod?: never };

export default React.memo(
    ({ imageType, imageName, sourseMod, svg, ...props }: PNGimageProps | SVGimageProps) => {
        const [urlObj, setUrlObj] = useState<TurlState>({
            webpUrl: '',
            pngUrl: '',
            svgUrl: '',
        });
        useEffect(() => {
            const retFn = (respons: TgetUrl) => respons.then(res => setUrlObj(res));

            if (sourseMod !== undefined) {
                const respons = getUrl({ imageType, imageName, sourseMod });
                retFn(respons);
            }
            if (svg) {
                const respons = getUrl({ imageType, imageName, svg });
                retFn(respons);
            }
        }, []);

        if (urlObj.pngUrl === 'err') {
            return (
                <picture {...props} className={`errorDownload ${props.className || ''}`}>
                    <div className="img-mask" />
                    <img style={{ width: '100%' }} src={urlObj.pngUrl} alt="" />
                </picture>
            );
        }
        return (
            <picture {...props} className={genClassName({ urlObj, modClass: props.className })}>
                <div className="img-mask" />
                {sourseMod ? <source srcSet={urlObj.webpUrl} /> : ''}
                <img src={svg ? urlObj.svgUrl : urlObj.pngUrl} alt="" />
            </picture>
        );
    },
);
