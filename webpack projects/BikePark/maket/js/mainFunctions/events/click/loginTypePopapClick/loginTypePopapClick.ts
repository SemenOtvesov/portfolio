import { ReactEventHandler } from 'react';

const onClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    const button: HTMLElement | null = target.closest('#loginTypePopap')
    if(!button){return}
        if(!button.className.includes('active')){
            const buttons = document.querySelectorAll('#loginTypePopap')
            buttons.forEach(el=>el.classList.remove('active'))

            const front = document.getElementById('loginPopap-front')
            const back = document.getElementById('loginPopap-back')
            if(button.dataset.loginType === 'login'){
                front?.classList.add('active')
                back?.classList.remove('active')

                document.querySelectorAll('[data-login-type="login"]').forEach(el=>el.classList.add('active'))
                
            }else if(button.dataset.loginType === 'reg'){
                front?.classList.remove('active')
                back?.classList.add('active')

                document.querySelectorAll('[data-login-type="reg"]').forEach(el=>el.classList.add('active'))
                
            }
        }
}
export default onClick