import {auth} from "@firebaseFolder/firebaseInit"
import { addTraining, setUserInfo } from "@redux/userRouter"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { store } from "@redux/store"

export function windowListenerSubmit(event: SubmitEvent){
    event.preventDefault()

    const form: any = event.target

    if(form?.dataset.popapSide){
        if(form.dataset.popapType === 'login'){
            const name = form.querySelector('[name=userName]') ? form.querySelector('[name=userName]').value : ''
            const mail = form.querySelector('[name=userMail]') ? form.querySelector('[name=userMail]').value : ''
            const phone = form.querySelector('[name=userPhone]') ? form.querySelector('[name=userPhone]').value : ''
            const pass = form.querySelector('[name=userPass]') ? form.querySelector('[name=userPass]').value : ''

            if(!name){
                signInWithEmailAndPassword(auth, mail, pass)
                    .then(userCredential=>{
                        form.parentElement.classList.remove('active', 'register')
                        document.body.classList.remove('backBlurActive')
                    })
                    .catch(error=>{
                        popapError('Неверный логин или пароль')
                    })
            }else{
                createUserWithEmailAndPassword(auth, mail, pass)
                    .then(userCredential=>{
                        form.parentElement.classList.remove('active', 'register')
                        document.body.classList.remove('backBlurActive')

                        store.dispatch(setUserInfo({name, mail, phone, pass}))
                    })
                    .catch(error=>{
                        popapError('Аккаунт с такой почтой уже существует')
                    })
            }
        }
    }

    function popapError(errorValue = ''){
        form.closest('[data-box-popap]').classList.add('notValid')
        form.querySelector('#errorText').innerHTML = errorValue
        setTimeout(()=>form.closest('[data-box-popap]').classList.remove('notValid'),2000)
    }

    if(form?.id === 'createTrainingForm'){
        const nameTraining: HTMLInputElement = form.querySelector('#createTrainingForm-name')
        const iconTraining: HTMLButtonElement = form.querySelector('#createTrainingForm-icon')

        if(nameTraining.value === ''){
            form.classList.add('error')
            setTimeout(()=>form.classList.remove('error'), 2000)
            return
        }

        const trainingNames: Array<any> = [...document.querySelectorAll('#changeSize')]
        const checkNameArr = trainingNames.map((el: HTMLDivElement)=>{
            return el.dataset.fullContent
        })

        if(checkNameArr.includes(nameTraining.value)){
            form.classList.add('errorName')
            setTimeout(()=>form.classList.remove('errorName'), 300)
            return
        }

        store.dispatch(addTraining({
            name: nameTraining.value,
            previewName: iconTraining.innerHTML,
            quantityApproach: 0,
            exercisesList: []
        }))
        form.closest('#mainLeft').classList.remove('addTraining')
        nameTraining.value = ''

    }
}