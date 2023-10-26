import { getScrollWidthLocal } from '@js/mainFunctions/localState/scrollWidth';
import { ReactEventHandler } from 'react';

const onClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    if(getScrollWidthLocal() < 769){return}

    if(!(target.closest('#number') || target.closest('#calendar') || target.closest('#calendarButton'))){
        const calendar = document.getElementById('calendar')
        const buttons = document.querySelectorAll('#calendarButton')
        buttons.forEach(el=>el.classList.remove('active'))
        calendar?.classList.remove('active')
    }
}
export default onClick