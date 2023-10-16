import { getUserUidLocal } from '@mainFunctions/localState/userUidLocal';
import { ReactEventHandler } from 'react';

const onClick: ReactEventHandler = (event) => {
    const target = event.target as HTMLElement

    if(getUserUidLocal()){
        const userButtonPopap = document.getElementById('userButtonPopap')
        userButtonPopap?.classList.toggle('active')
    }else{
        const loginPopap = document.getElementById('loginPopap')
        loginPopap?.classList.toggle('active')
        document.body.classList.toggle('backBlurActive')
    }
}
export default onClick