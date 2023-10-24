import { ReactEventHandler } from 'react';

const selectClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement
    const select = target.closest('#select')
    if(select && !target.closest('#selectItem')){
        select.classList.toggle("active")
    }
}
export default selectClick