import getUrl from "@js/mainFunctions/helpers/getUrl";
import React, { useMemo, useState } from "react";

type Tprops = {
    imageType: 'image' | 'icon' | 'bikeImage',
    imageName: string,
    sourseMod: boolean,
    modClass?: string
}

export default React.memo(({imageType, imageName, sourseMod, modClass}: Tprops)=>{
    const [urlObj, setUrlObj] = useState<{pngUrl: string, webpUrl?: string}>({webpUrl: '', pngUrl: ''})
    useMemo(()=>getUrl({imageType, imageName, sourseMod}).then(res=>setUrlObj(res)), [imageType, imageName, sourseMod])

    if(urlObj.pngUrl === 'err'){
        return (
            <picture className='errorDownload'>
                <div className='img-mask'/>
                <img style={{width: '100%'}} src={urlObj.pngUrl} alt='' />
            </picture>
        )
    }
    return (
        <picture className={!urlObj.pngUrl ? `loading-img ${modClass || ''}`: modClass || ''}>
            <div className='img-mask'/>
            {sourseMod ? <source srcSet={urlObj.webpUrl}/> : ''}
            <img src={urlObj.pngUrl} alt='' />
        </picture>
    )
})