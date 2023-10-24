import { ReactEventHandler } from 'react';

const outsideSelectItem: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement
    if(!target.closest('#select')){
        document.querySelectorAll('#select').forEach(el=>el.classList.remove('active'))
    }
}
export default outsideSelectItem