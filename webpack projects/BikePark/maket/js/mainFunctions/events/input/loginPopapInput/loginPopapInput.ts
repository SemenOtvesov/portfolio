import { ReactEventHandler } from "react";

let checkMail:boolean = false; let checkPass:boolean = false; let checkName:boolean = false;let checkNum:boolean = false;

const onInput: ReactEventHandler = (event) =>{
    const target: any = event.target

    const button = target?.closest('form').querySelector('button')
    
    if(target.name === 'userMail'){
        if(target.value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z.0-9]+$')){
            checkTrue(target); checkMail = true
        }else{
            target.parentElement.querySelector('#errorTextPopap').innerHTML = 'Некорректный E-mail'
            checkFalse(target); checkMail = false
        }

        if(target.value === ''){
            checkNaN(target)
        }
    }
    if(target.name === 'userPass'){
        if(target.value.length < 10){
            checkFalse(target)
            target.parentElement.querySelector('#errorTextPopap').innerHTML = 'Минимум 10 символов'
            checkPass = false
        }else if(target.value.match('(?=.*?[a-zа-я])(?=.*?[A-ZА-Я])(?=.*?[0-9])[a-zа-яA-ZА-Я0-9]{10,}')){
            checkTrue(target)
            checkPass = true
        }else{
            checkFalse(target)
            target.parentElement.querySelector('#errorTextPopap').innerHTML = 'Пароль должен содержать хотя бы одну строчную букву, одну прописную букву и одну цифру'
            checkPass = false
        }
        if(target.value === ''){
            checkPass = false
            checkNaN(target)
        }
    }
    if(target.name === 'userName'){
        if(target.value.match('[а-яА-Я]')){
            checkTrue(target);
            checkName = true
        }else{
            checkFalse(target)
            target.parentElement.querySelector('#errorTextPopap').innerHTML = 'Пожалуйста используйте русский язык'
            checkName = false
        }
        if(target.value === ''){
            checkNaN(target)
            checkName = false
        }
    }
    if(target.name === 'userPhone'){
        let checkKey = false
        if(target.value.match('^[+7|7|8]')){
            checkNum = false
            if(target.value.length > 10){
                if(target.value.match('^[+7|7|8][0-9]{10,12}$')){
                    checkKey = false
                    checkNum = true
                }else{checkKey = true;}
            }
        }else{checkKey = true}

        if(checkKey){
            checkNum = false
            checkFalse(target)
            target.parentElement.querySelector('#errorTextPopap').innerHTML = 'Пожалуйста используйте номер Российского оператора'
        }else{
            checkTrue(target)
            checkNum = true
        }
        if(target.value === ''){
            checkNaN(target)
            checkNum = false
        }
    }

    const regInfoButton = document.getElementById('regInfoButton')
    if(target.closest('form').id === 'loginPopap-front'){
        if(checkMail && checkPass){
            button.classList.remove('disabled')
            button.disabled = false
        }else{
            button.classList.add('disabled')
            button.disabled = true
        }
    }else{
        const regState = regInfoButton?.className.split(' ').includes('active')
        if(checkMail && checkPass && checkName && checkNum && regState){
            button.classList.remove('disabled')
            button.disabled = false
        }else{
            button.classList.add('disabled')
            button.disabled = true
        }
    }
}

function checkTrue(target: HTMLElement){
    target.parentElement?.classList.add('valid')
    target.parentElement?.classList.remove('notValid')
}
function checkFalse(target: HTMLElement){
    target.parentElement?.classList.remove('valid')
    target.parentElement?.classList.add('notValid')
}
function checkNaN(target: HTMLElement){
    target.parentElement?.classList.remove('valid')
    target.parentElement?.classList.remove('notValid')
}

export default onInput