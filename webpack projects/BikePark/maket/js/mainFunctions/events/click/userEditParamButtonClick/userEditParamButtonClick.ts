import { ReactEventHandler } from 'react';

const onClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    const button = target.closest('#userEditParamButton')
    if(!button){return}
    const userInfo = document.getElementById('userInfo')
    const inputAreas = userInfo?.querySelectorAll('input')
    userInfo?.classList.toggle('edit')

    inputAreas?.forEach(el=>{
        if(!!el.disabled){
            el.disabled = false
            el.classList.remove('disabled')
            button.innerHTML = 'Сохранить'
        }else{
            el.disabled = true
            el.classList.add('disabled')
            button.innerHTML = 'Редактировать'
        }
    })
}
export default onClick