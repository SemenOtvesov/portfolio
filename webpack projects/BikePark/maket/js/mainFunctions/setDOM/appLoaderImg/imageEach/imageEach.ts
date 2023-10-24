import { checkContentImage } from "../checkContentImage/checkContentImage";
import { getUrl } from "../getUrl/getUrl";
import { setParamValue } from "../setParamValue/setParamValue";


export function imageEach(images: NodeListOf<HTMLElement>, imgIterator: number, genPath: string){
    if(images[0]){
        for(const el of images){  
            let pathWebp: string = ''; let pathPng: string = ''

            const imageName = el.dataset.imageName

            if(imageName){
                if(el.querySelector('source')){
                    pathWebp = `${genPath}/webp/${imageName}`
                }
                pathPng = `${genPath}/png/${imageName}`
            }
            
            if(!el.dataset.imageId){
                el.dataset.imageId = `${imgIterator++}`
            }else{
                if(imgIterator < +el.dataset.imageId){
                    imgIterator = +el.dataset.imageId
                }
            }


            if(checkContentImage(el)){
                el.classList.add('loading-img')
                getUrl({
                    el, 
                    pathWebp: pathWebp ? pathWebp + '.webp': '', 
                    pathPng: pathPng + '.png', imgIterator,
                })
            }
        }
    }
}