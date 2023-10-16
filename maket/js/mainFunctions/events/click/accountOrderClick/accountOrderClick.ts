import { getScrollWidthLocal } from '@js/mainFunctions/localState/scrollWidth';
import { ReactEventHandler } from 'react';

const onClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    const order: HTMLElement | null = target.closest('#accountOrder')
    if(!order){return}
    order.querySelector('#accountOrderMore')?.classList.toggle('active')
    if(getScrollWidthLocal() > 425){
        order.querySelector('#accountOrderArrow')?.classList.toggle('active')
    }
}
export default onClick