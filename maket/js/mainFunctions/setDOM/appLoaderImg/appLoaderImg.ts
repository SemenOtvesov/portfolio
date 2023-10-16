import { imageEach } from './imageEach/imageEach';

export function appLoaderImg(){
    const icons: NodeListOf<HTMLElement> = document.querySelectorAll('[data-image-type="icon"]')
    const image: NodeListOf<HTMLElement> = document.querySelectorAll('[data-image-type="image"]')
    const bikeImages: NodeListOf<HTMLElement> = document.querySelectorAll('[data-image-type="bikeImage"]')

    let imgIterator = 0
    imageEach(icons, imgIterator, 'icon')
    imageEach(image, imgIterator, 'image')
    imageEach(bikeImages, imgIterator, 'bikeImage')
}
