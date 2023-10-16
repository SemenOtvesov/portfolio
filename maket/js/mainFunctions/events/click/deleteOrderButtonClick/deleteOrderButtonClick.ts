import { ReactEventHandler } from 'react';

const onClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    const deleteOrderPopap = document.getElementById('deleteOrderPopap')
    const button: HTMLElement | null = target.closest('#deleteOrderButton')
    const buttonType = button?.dataset.buttonType

    if(buttonType === 'toggle'){
        deleteOrderPopap?.classList.toggle('active')
        document.body.classList.toggle('backBlurActive')
    }
    if(buttonType === 'submit'){

    }
}
export default onClick