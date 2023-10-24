import {auth} from "@firebaseFolder/firebaseInit"
import { setUserInfo } from "@state/userState/userRouter"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { store } from '@state/state'
import { ReactEventHandler } from "react"

const onSubmit:ReactEventHandler = (event) =>{
    event.preventDefault()

    const form: any = event.target

    const name = form.querySelector('[name=userName]') ? form.querySelector('[name=userName]').value : ''
    const mail = form.querySelector('[name=userMail]') ? form.querySelector('[name=userMail]').value : ''
    const phone = form.querySelector('[name=userPhone]') ? form.querySelector('[name=userPhone]').value : ''
    const pass = form.querySelector('[name=userPass]') ? form.querySelector('[name=userPass]').value : ''

    if(!name){
        signInWithEmailAndPassword(auth, mail, pass)
            .then(userCredential=>{
                form.parentElement.classList.remove('active')
                document.body.classList.remove('backBlurActive')
            })
            .catch(error=>{
                popapError('Неверный логин или пароль')
            })
    }else{
        createUserWithEmailAndPassword(auth, mail, pass)
            .then(userCredential=>{
                form.parentElement.classList.remove('active')
                document.body.classList.remove('backBlurActive')

                store.dispatch(setUserInfo({name, mail, phone, pass}))
            })
            .catch(error=>{
                popapError('Аккаунт с такой почтой уже существует')
            })
    }

    function popapError(errorValue = ''){
        const errorNotif:HTMLElement = form.querySelector('#popapError')
        errorNotif.innerHTML = errorValue
        errorNotif.classList.add('active')
        setTimeout(()=>errorNotif.classList.remove('active'),2000)
    }
}

export default onSubmit