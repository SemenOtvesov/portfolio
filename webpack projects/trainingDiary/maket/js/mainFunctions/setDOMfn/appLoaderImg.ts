import {storage} from '@firebaseFolder/firebaseInit'
import { TgetUrlParams } from '@js/types/mainFunctionsTypes';
import { getDownloadURL, ref } from 'firebase/storage';

type TurlList = {
    previews: {
        patchWebpList: {[key: string]: {pathWebp: string, url: string}},
        patchPngList: {[key: string]: {pathPng: string, url: string}}
    }
} 

const urlList: TurlList = {
    previews:{
        patchWebpList: {},
        patchPngList: {},
    }
}

export function appLoaderImg(){
    const previews: NodeListOf<HTMLElement> = document.querySelectorAll('[data-image-type="previews"]')
    previewsEach()

    async function previewsEach(){
        let previewIterator = 0
        if(previews[0]){
            for(const el of previews){  
                let pathWebp: string = ''; let pathPng: string = ''

                const userUid = el.dataset.userUid
                const previewName = el.dataset.previewName
                const trainingNumber = el.dataset.trainingNumber || ''
                if(userUid){
                    pathWebp = `previews/usersPreviews/${userUid}/trainingList/${trainingNumber}/webp/preview`
                    pathPng = `previews/usersPreviews/${userUid}/trainingList/${trainingNumber}/png/preview`
                }
                if(previewName){
                    pathWebp = `previews/webp/${previewName}`
                    pathPng = `previews/png/${previewName}`
                }
                if(!el.dataset.previewId){
                    el.dataset.previewId = `${previewIterator++}`
                }

                let checkUrl = true
                for(const id in urlList.previews.patchWebpList){
                    const path = urlList.previews.patchWebpList[id]
                    if(path.pathWebp === pathWebp){
                        
                        el.children[1].setAttribute('srcSet', path.url)
                        el.classList.remove('loading-img')
                        if(el.firstElementChild){
                            const firstChild: any = el.firstElementChild
                            firstChild.style.maxWidth = '100%'
                        }
                        checkUrl = false
                    }
                }
                if(checkUrl){
                    if(checkContentImage(el)){
                        el.classList.add('loading-img')
                        await getUrl({el, pathWebp: pathWebp + '.webp',pathPng: pathPng + '.png', previewIterator})
                    }
                }
            }
        }
    }

    function checkContentImage(el: any){
        let check = true
        if(el.querySelector('img').getAttribute('src')){
            check = false
        }
        return check
    }

    async function getUrl({el, pathWebp, pathPng, previewIterator}: TgetUrlParams){
        if(pathWebp){
            await getDownloadURL(ref(storage, pathWebp))
            .then((url) => {
                el.children[1].setAttribute('srcSet', url)
                el.classList.remove('loading-img')
                if(el.firstElementChild){
                    const firstChild: any = el.firstElementChild
                    firstChild.style.maxWidth = '100%'
                }
                urlList.previews.patchWebpList[previewIterator] = {pathWebp: pathWebp.split('.webp')[0], url}

                getDownloadURL(ref(storage, pathPng))
                    .then((url) => {
                        el.children[2].setAttribute('src', url)
                        el.classList.remove('loading-img')
                        if(el.firstElementChild){
                            const firstChild: any = el.firstElementChild
                            firstChild.style.maxWidth = '100%'
                        }
                        urlList.previews.patchPngList[previewIterator] = {pathPng: pathPng.split('.png')[0], url}
                    })
                    .catch((error) => {
                        el.classList.add('errorDownload')
                        el.classList.remove('loading-img')
                        if(el.firstElementChild){
                            const firstChild: any = el.firstElementChild
                            firstChild.style.maxWidth = '100%'
                        }
                    });
                })
            .catch((error) => {
                el.classList.add('errorDownload')
                el.classList.remove('loading-img')
                if(el.firstElementChild){
                    const firstChild: any = el.firstElementChild
                    firstChild.style.maxWidth = '100%'
                }
            });
        }else{
            await getDownloadURL(ref(storage, pathPng))
                    .then((url) => {
                        el.children[1].setAttribute('src', url)
                        el.classList.remove('loading-img')
                        if(el.firstElementChild){
                            const firstChild: any = el.firstElementChild
                            firstChild.style.maxWidth = '100%'
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                        el.classList.add('errorDownload')
                        el.classList.remove('loading-img')
                        if(el.firstElementChild){
                            const firstChild: any = el.firstElementChild
                            firstChild.style.maxWidth = '100%'
                        }
                    });
        }
    }
}