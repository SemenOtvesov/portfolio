import { getScrollWidthLocal } from '@mainFunctions/localState/scrollWidth';
import { ReactEventHandler } from 'react';

export const burgerClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    const nav = document.querySelector('nav')
    const header = document.querySelector('header')
    const headerContainer = document.getElementById('headerContainer')
    const burger: HTMLSpanElement | null = document.getElementById('burger')

    nav?.classList.toggle('active')
    header?.classList.toggle('indexTop')
    burger?.classList.toggle('active')
    document.body.classList.toggle('backBlurActive')

    if(getScrollWidthLocal() < 426){
        if(!nav){return}
        if(!headerContainer){return}
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        nav.style.height = scrollHeight - headerContainer.scrollHeight + 'px'
    }else{
        if(!nav){return}
        nav.style.height = '100%'
    }
}
