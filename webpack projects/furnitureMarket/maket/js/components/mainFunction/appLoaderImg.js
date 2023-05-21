import {storage} from '@firebaseFolder/firebaseInit.js'
import { getDownloadURL, ref } from 'firebase/storage';

export function appLoaderImg(){
    const catalogItemPrev = document.querySelectorAll('[data-image-type="catalogItem"]')
    const logo = document.querySelectorAll('[data-image-type="logo"]')
    const icons = document.querySelectorAll('[data-image-type="icon"]')
    const iconsHovered = document.querySelectorAll('[data-image-type="iconHovered"]')
    const image = document.querySelectorAll('[data-image-type="image"]')

    catalogItemsEach()
    logoesEach()
    iconsEach()
    iconsHoveredEach()
    imageEach()

    async function catalogItemsEach(){
        if(catalogItemPrev[0]){
            for(const el of catalogItemPrev){
                if(checkContentImage(el)){
                    const charpeter = el.dataset.charpeter
                    const charpeterSection = el.dataset.charpeterSection
                    const imageName = el.dataset.imageName

                    if(charpeterSection){
                        await getUrl({el,pathWebp: `catalog/${charpeter}/${charpeterSection}/webp/${imageName}.webp`,
                                        pathPng: `catalog/${charpeter}/${charpeterSection}/png/${imageName}.png`})
                    }else{
                        await getUrl({el, pathWebp: `catalog/${charpeter}/preview/webp/preview.webp`,
                                        pathPng: `catalog/${charpeter}/preview/png/preview.png`})
                    }
                }
            }
        }
    }

    async function logoesEach(){
        if(logo[0]){
            for(const el of logo){   
                if(checkContentImage(el)){
                    await getUrl({el,pathWebp: `icon/mainIcon/webp/logo.webp`,pathPng: `icon/mainIcon/png/logo.png`})
                }
            }
        }
    }

    async function iconsEach(){
        if(icons[0]){
            for(const el of icons){   
                if(checkContentImage(el)){
                    const iconName = el.dataset.iconName
                    const local = el.dataset.local
    
                    await getUrl({el,pathWebp: `icon/${local}/webp/${iconName}.webp`,pathPng: `icon/${local}/png/${iconName}.png`})
                }
            }
        }
    }

    async function iconsHoveredEach(){
        if(icons[0]){
            for(const el of iconsHovered){   
                if(checkContentImage(el)){
                    const iconName = el.dataset.iconName
                    const local = el.dataset.local
    
                    await getUrl({el, pathPng: `icon/${local}/png/${iconName}.png`})
                }
            }
        }
    }

    async function imageEach(){
        if(icons[0]){
            for(const el of image){   
                if(checkContentImage(el)){
                    const imageName = el.dataset.imageName
                    const local = el.dataset.local
    
                    await getUrl({el,pathWebp: `image/${local}/webp/${imageName}.webp`,pathPng: `image/${local}/png/${imageName}.png`})
                }
            }
        }
    }
}
function checkContentImage(el){
    let check = true
    if(el.querySelector('img').getAttribute('src')){
        check = false
    }
    return check
}

async function getUrl({el, pathWebp, pathPng}){
    if(pathWebp){
        await getDownloadURL(ref(storage, pathWebp))
        .then((url) => {
            el.children[1].setAttribute('srcSet', url)
            el.classList.remove('loading-img')
            el.firstElementChild.style.maxWidth = '100%'

            getDownloadURL(ref(storage, pathPng))
                .then((url) => {
                    el.children[2].setAttribute('src', url)
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.maxWidth = '100%'
                })
                .catch((error) => {
                    el.classList.add('errorDownload')
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.maxWidth = '100%'
                });
            })
        .catch((error) => {
            el.classList.add('errorDownload')
            el.classList.remove('loading-img')
            el.firstElementChild.style.maxWidth = '100%'
        });
    }else{
        await getDownloadURL(ref(storage, pathPng))
                .then((url) => {
                    el.children[1].setAttribute('src', url)
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.maxWidth = '100%'
                })
                .catch((error) => {
                    console.log(error)
                    el.classList.add('errorDownload')
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.maxWidth = '100%'
                });
    }
}
