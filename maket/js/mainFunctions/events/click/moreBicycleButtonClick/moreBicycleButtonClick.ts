import { ReactEventHandler } from 'react';

const onClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    const button: HTMLElement | null = target.closest('#moreBicycleButton')
    if(!button){return}
    const more = button.closest('[data-item-list]')?.querySelector('#moreBicycleEl')
    button.classList.toggle('active')
    more?.classList.toggle('active')
}
export default onClick