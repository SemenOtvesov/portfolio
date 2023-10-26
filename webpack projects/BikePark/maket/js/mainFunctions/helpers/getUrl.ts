import {storage} from '@firebaseFolder/firebaseInit'
import { TgetUrlParams } from '@js/types/mainFunctionsTypes';
import { getDownloadURL, ref } from 'firebase/storage';

type Tprops = {
    imageType: 'image' | 'icon' | 'bikeImage',
    imageName: string,
    sourseMod: boolean
}
type TretObj = {
    pngUrl: string;
    webpUrl?: string | undefined;
}
type TgetUrl = Promise<TretObj>

export default ({imageName, imageType, sourseMod}: Tprops)=>{
    const pathWebp = `${imageType}/webp/${imageName}.webp`
    const pathPng = `${imageType}/png/${imageName}.png`

    if(sourseMod){
        return getUrl({pathWebp, pathPng})
    }else{
        return getUrl({pathPng})
    }
}

async function getUrl({pathPng, pathWebp}: TgetUrlParams): TgetUrl{
    let webpUrl: string = 'err'; let pngUrl: string = 'err';
    
    if(pathWebp){
        await getDownloadURL(ref(storage, pathWebp)).then((url) => webpUrl = url).catch(err=> webpUrl = 'err')
        await getDownloadURL(ref(storage, pathPng)).then(url=>pngUrl = url).catch(err=> pngUrl = 'err')
        return {webpUrl, pngUrl}
    }else{
        await getDownloadURL(ref(storage, pathPng)).then(url=>pngUrl = url).catch(err=> pngUrl = 'err')
        return {pngUrl}
    }
}