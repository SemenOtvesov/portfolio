import { auth } from "@firebaseFolder/firebaseInit"
import { addApproach, addExercise, deleteApproach, deleteExercise, deleteTraining, logout } from "@redux/userRouter"
import { signOut } from "firebase/auth"

import { Dispatch } from "react"
import { TsetState } from "@js/types/componentsTypes"
import { addActiveApproachsBar, addActiveApproachsDoughnut, deleteActiveApproachsBar, deleteActiveApproachsDoughnut } from "@js/redux/chartRouter"

export function windowListenerClick(dispatch: Dispatch<any>, setActiveTraining: TsetState, event: MouseEvent): void{
    const target: any = event.target

    if(target.closest('#openPopap')){
        const popap = document.getElementById('popap')
        const button = target.closest('#openPopap')

        popap?.classList.toggle('active')
        document.body.classList.toggle('backBlurActive')

        if(button.dataset.popapType === 'close'){
            popap?.classList.remove('register')
        }
    }

    if(target.closest('#registerButton')){
        const popap:HTMLDivElement = target.closest('#popap')
        const login = popap.querySelector('[data-popap-side="login"]')
        const register = popap.querySelector('[data-popap-side="reg"]')

        popap.classList.add('register')

        const loginMail:HTMLInputElement | null | undefined = login?.querySelector('[name="userMail"]')
        const registerMail:HTMLInputElement | null | undefined = register?.querySelector('[name="userMail"]')
        if(loginMail){
            if(loginMail.value === ''){return}
            if(!registerMail){return}
            registerMail.value = loginMail.value
            const ev = new Event('input', { bubbles: true })
            registerMail.dispatchEvent(ev)
        }

        const disabledList = popap.querySelectorAll('input')
        disabledList.forEach((el: HTMLInputElement)=>{
            el.disabled = false
        })
    }

    if(target.closest('#logoutButton')){
        signOut(auth)
        
        dispatch(logout())
    }

    if(target.closest('#exerciseMoreButton')){
        const exercise = target.closest('#exercise')
        exercise.querySelector('#exerciseSublist').classList.toggle('active')
        exercise.querySelector('#addApproachPopap').classList.remove('active')
    }

    if(target.closest('#addTrainingButton')){
        const mainLeft = document.querySelector('#mainLeft')

        mainLeft?.classList.toggle('addTraining')
        mainLeft?.classList.remove('active')
    }

    if(target.closest('#trainingDeleteButton')){
        const mainLeft = document.querySelector('#mainLeft')

        mainLeft?.classList.remove('active')

        dispatch(deleteTraining({und:undefined}))
        setActiveTraining(undefined)
    }

    if(!target.closest('#select')){
        document.querySelectorAll('#select').forEach(el=>el.classList.remove('active'))
    }

    if(target.closest('#training')){
        const training: HTMLDivElement = target.closest('#training')
        const trainingNumber = training.dataset.trainingNumber
        const mainLeft = document.getElementById('mainLeft')

        setActiveTraining(trainingNumber)
        if(mainLeft){
            if(mainLeft.dataset.activeTraining !== trainingNumber){
                if(mainLeft.className.split(' ')[1] !== 'active'){
                    mainLeft.classList.add('active')
                }
                mainLeft.dataset.activeTraining = trainingNumber
            }else{
                mainLeft.classList.toggle('active')
            }
            mainLeft.classList.remove('addTraining')
        }
    }
    if(target.closest('#trainingExit')){
        const mainLeft = document.getElementById('mainLeft')
        if(!mainLeft){return}
        mainLeft.classList.remove('active')
        mainLeft.dataset.activeTraining = undefined
        setActiveTraining(undefined)
    }

    if(target.closest('#addExercisePopapButton')){
        const parent: HTMLDivElement = target.closest('#addExercisePopap')
        const exerciseListBox:HTMLDivElement = target.closest('#exerciseListBox')
        const exerciseName:string = parent.querySelector('input')?.value || ''

        if(exerciseName === ''){warn()}

        const exerciseNames = exerciseListBox.querySelectorAll('#exerciseName')
        const exerciseNameArr: string[] = []
        exerciseNames.forEach(el=>{
            exerciseNameArr.push(el.innerHTML)
        })
        if(!exerciseNameArr.includes(exerciseName)){
            dispatch(
                addExercise({name: exerciseName})
            )
            target.closest('#addExercisePopapButton').disabled = true
            document.getElementById('addExercisePopapInputList')?.classList.remove('active')

            const inputEl = parent.querySelector('input')
            if(inputEl === null){return}
            inputEl.value = ''
        }else{warn()}

        function warn(){
            parent.classList.add('warning')
            setTimeout(()=>parent.classList.remove('warning'), 300)
        }
    }else if(target.closest('#addExerciseButton') && !target.closest('#addExercisePopapInput')){
        const button:HTMLButtonElement = target.closest('#addExerciseButton')
        const popap = button.querySelector('#addExercisePopap')

        button.classList.toggle('active')

        if(!button.parentElement){return}
        if(!popap){return}
        const list: HTMLUListElement | null = button.parentElement.querySelector('[data-exercise-list]')

        if(!list){return}
        if(+list.style.paddingBottom.split('px')[0] > 10){
            list.style.paddingBottom = '10px'
        }else{
            list.style.paddingBottom = popap.scrollHeight + 'px'
        }

        const listPopap = document.getElementById('addExercisePopapInputList')
        if(listPopap?.className.split(' ')[1] === 'active'){
            listPopap.classList.remove('active')
        }
    }

    if(target.closest('#exerciseCloseButton')){
        const exercise = target.closest('#exercise')
        const exerciseName: string = exercise.querySelector('#exerciseName').innerHTML
        
        dispatch(
            deleteExercise({name: exerciseName})
        )
    }

    if(target.closest('#exerciseAddApproach')){
        const exercise = target.closest('#exercise')
        exercise.querySelector('#addApproachPopap').classList.toggle('active')
        exercise.querySelector('#exerciseSublist').classList.remove('active')
    }

    if(target.closest('#addApproachButton')){
        const exercise: HTMLDivElement = target.closest('#exercise')
        const nameExercise = exercise.querySelector('#exerciseName')
        const parent: HTMLDivElement = target.closest('#addApproachPopap')
        const approachWeight: HTMLInputElement | null = parent.querySelector('#approachInputWeight')
        const approachQuantity: HTMLInputElement | null = parent.querySelector('#approachInputQuantity')

        let weigthCheck = true; let quantityCheck = true 
        if(!approachWeight){return}
        if(isNaN(+approachWeight?.value) || +approachWeight?.value > 999){
            approachWeight.classList.add('warning')
            approachWeight.value = ''
            weigthCheck = false
            setTimeout(()=>{approachWeight.classList.remove('warning')}, 300)
        }else{weigthCheck = true}

        if(!approachQuantity){return}
        if(isNaN(+approachQuantity?.value) || +approachQuantity?.value > 9999){
            approachQuantity.classList.add('warning')
            approachQuantity.value = ''
            weigthCheck = false
            setTimeout(()=>{approachQuantity.classList.remove('warning')}, 300)
        }else{quantityCheck = true}

        if(weigthCheck && quantityCheck){
            if(!nameExercise){return}
            dispatch(addApproach({
                nameExercise: nameExercise.innerHTML, 
                approachInfo: {
                    weight: +approachWeight.value, 
                    repetitions: +approachQuantity.value
                }
            }))
            target.closest('#addApproachButton').disabled = 'true'
        }
    }

    if(target.closest('#approachDeleteButton')){
        const exercise: HTMLDivElement = target.closest('#exercise')
        const nameExercise = exercise.querySelector('#exerciseName')
        const exerciseId = target.closest('[data-exercise-id]').dataset.exerciseId

        if(!nameExercise){return}
        dispatch(deleteApproach({
            nameExercise: nameExercise.innerHTML,
            exerciseId
        }))
    }

    if(target.closest('#chartCheckboxDoughnut')){
        const chartCheckbox:HTMLDivElement = target.closest('#chartCheckboxDoughnut')

        chartCheckbox.classList.toggle('active')
        if(chartCheckbox.className.split(' ')[1] === 'active'){
            dispatch(addActiveApproachsDoughnut(chartCheckbox.dataset.checkboxName))
        }else{
            dispatch(deleteActiveApproachsDoughnut(chartCheckbox.dataset.checkboxName))
        }
    }

    if(target.closest('#chartCheckboxBar')){
        const chartCheckbox:HTMLDivElement = target.closest('#chartCheckboxBar')

        chartCheckbox.classList.toggle('active')
        if(chartCheckbox.className.split(' ')[1] === 'active'){
            dispatch(addActiveApproachsBar(chartCheckbox.dataset.checkboxName))
        }else{
            dispatch(deleteActiveApproachsBar(chartCheckbox.dataset.checkboxName))
        }
    }
}