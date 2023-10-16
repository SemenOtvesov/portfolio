import { getScrollWidthLocal } from '@js/mainFunctions/localState/scrollWidth';
import { ReactEventHandler } from 'react';

const burgerClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    const calendar = document.getElementById('calendar')
    const buttons = document.querySelectorAll('#calendarButton')
    buttons.forEach(el=>el.classList.toggle('active'))
    calendar?.classList.toggle('active')

    if(getScrollWidthLocal() < 769){
        document.body.classList.toggle('backBlurActive')
    }
}

export default burgerClick