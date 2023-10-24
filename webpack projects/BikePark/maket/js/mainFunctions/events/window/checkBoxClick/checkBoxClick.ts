import { ReactEventHandler } from 'react';

const onClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    if(target.closest('[data-checkbox]')){
        const checkbox:HTMLElement | null = target.closest('[data-checkbox]')
        if(!checkbox){return}
        checkbox.classList.toggle('active')
        const genEvent = new Event('input', {bubbles: true})
        checkbox.dispatchEvent(genEvent)
    }
}
export default onClick