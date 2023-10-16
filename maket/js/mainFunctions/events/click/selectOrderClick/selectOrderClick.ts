import { ReactEventHandler } from 'react';

const onClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    const select: HTMLElement | null = target.closest('#selectOrder')
    if(!select){return}
    const selectedId: string | undefined = select.dataset.orderId
    if(!selectedId){return}
    const selectedEl = document.getElementById(selectedId)
    document.querySelectorAll('[data-order-box]').forEach(el=>el.classList.remove('visable'))
    document.querySelectorAll('#selectOrder').forEach(el=>el.classList.remove('active'))
    select.classList.add('active')
    selectedEl?.classList.add('visable')

    if(select.dataset.orderId === 'userInfo'){
        document.getElementById('orderPreview')?.classList.add('none')
    }else{
        document.getElementById('orderPreview')?.classList.remove('none')
    }
}
export default onClick