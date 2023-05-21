import React, { useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { equalSidesFn } from "@mainFunction/equalSidesFn.js"
import { useDispatch } from "react-redux"

import Layout from "@workPiecePage/Layout.jsx"
import PathPiese from "@workPiecePage/PathPiese.jsx"
import ChapterContent from "@routs/charepterRoute.jsx" 
import CatalogContent from "@routs/catalogContent.jsx"
import FavouritesRoute from "@routs/favouritesRoute.jsx"
import BasketRoute from "@routs/basketRoute.jsx"
import MainRout from "@routs/mainRout.jsx";
import CatalogProductRoute from "@routs/catalogProductRoute.jsx"
import CompanyRoute from "@routs/companyRoute.jsx"
import DesignersRoute from "@routs/designersRoute.jsx"
import СontactsRoute from "@routs/contactsRoute.jsx"

import { appLoaderImg } from "./mainFunction/appLoaderImg"

import {auth} from '@firebaseFolder/firebaseInit.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { logOut } from "@redux/userRouter"
import { addChildHeight } from "@mainFunction/addChildHeigth"

let scrollWidth = Math.max(
document.body.scrollWidth, document.documentElement.scrollWidth,
document.body.offsetWidth, document.documentElement.offsetWidth,
document.body.clientWidth, document.documentElement.clientWidth
);


export default ()=>{
    const location = useLocation()
    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState()

    useEffect(()=>{
        equalSidesFn()
        appLoaderImg()

        scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );
    }, [location.pathname])
    useEffect(()=>{
        const clickFn = windowClick.bind(this, dispatch)
        addEventListener('click', clickFn)
        addEventListener('input', windowInput)
        const submitFn = windowSubmit.bind(this, setUserInfo)
        addEventListener('submit', submitFn)
    }, [])
    useEffect(()=>{
        addChildHeight()
        equalSidesFn()
    })

    return(
        <>
            <Routes>
                <Route path="/" element={<Layout userInfo={userInfo}/>}>
                    <Route index element={<MainRout />}/>

                    <Route path="catalog">
                        <Route index element={<PathPiese MainContent={CatalogContent} catalogСhapter=' '/>}/>
                        <Route path="tables">
                            <Route index element={<PathPiese MainContent={CatalogContent} catalogСhapter='tables'/>}/>
                            <Route path="straight" element={<PathPiese MainContent={ChapterContent} catalogСhapter='tables/StraightTables'/>}/>
                            <Route path="ergonomic" element={<PathPiese MainContent={ChapterContent} catalogСhapter='tables/ErgonomicTables'/>}/>
                            <Route path="workplaces" element={<PathPiese MainContent={ChapterContent} catalogСhapter='tables/TablesForSeveralWorkplaces'/>}/>
                            <Route path="heightAdjustment" element={<PathPiese MainContent={ChapterContent} catalogСhapter='tables/TablesWithHeightAdjustment'/>}/>
                            <Route path="negotiation" element={<PathPiese MainContent={ChapterContent} catalogСhapter='tables/NegotiationTables'/>}/>
                            <Route path="executive" element={<PathPiese MainContent={ChapterContent} catalogСhapter='tables/ExecutiveDesks'/>}/>
                            <Route path="mobileFolding" element={<PathPiese MainContent={ChapterContent} catalogСhapter='tables/MobileFoldingTables'/>}/>
                            <Route path="briefing" element={<PathPiese MainContent={ChapterContent} catalogСhapter='tables/BriefingConsoles'/>}/>
                            <Route path="coffeeBreak" element={<PathPiese MainContent={ChapterContent} catalogСhapter='tables/CoffeeBreakTables'/>}/>
                            <Route path="ahangingPedestal" element={<PathPiese MainContent={ChapterContent} catalogСhapter='tables/TablesWithAhangingPedestal'/>}/>
                        </Route>
                        <Route path="cabinetFurniture">
                            <Route index element={<PathPiese MainContent={CatalogContent} catalogСhapter='cabinetFurniture'/>}/>
                            <Route path="bedsideTables" element={<PathPiese MainContent={ChapterContent} catalogСhapter='cabinetFurniture/BedsideTables'/>}/>
                            <Route path="lockers" element={<PathPiese MainContent={ChapterContent} catalogСhapter='cabinetFurniture/Lockers'/>}/>
                            <Route path="swingCabinets" element={<PathPiese MainContent={ChapterContent} catalogСhapter='cabinetFurniture/SwingCabinets'/>}/>
                            <Route path="wardrobes" element={<PathPiese MainContent={ChapterContent} catalogСhapter='cabinetFurniture/Wardrobes'/>}/>
                        </Route>
                        <Route path="shelving">
                            <Route index element={<PathPiese MainContent={CatalogContent} catalogСhapter='shelving'/>}/>
                            <Route path="metalFrame" element={<PathPiese MainContent={ChapterContent} catalogСhapter='shelving/MetalFrameShelving'/>}/>
                            <Route path="madeOfChipboard" element={<PathPiese MainContent={ChapterContent} catalogСhapter='shelving/ShelvesMadeOfChipboard'/>}/>
                        </Route>
                        <Route path="receptionFurniture">
                            <Route index element={<PathPiese MainContent={CatalogContent} catalogСhapter='receptionFurniture'/>}/>
                            <Route path="reception" element={<PathPiese MainContent={ChapterContent} catalogСhapter='receptionFurniture/Reception'/>}/>
                            <Route path="coffeeTables" element={<PathPiese MainContent={ChapterContent} catalogСhapter='receptionFurniture/ReceptionCoffeeTables'/>}/>
                            <Route path="severalWorkplaces" element={<PathPiese MainContent={ChapterContent} catalogСhapter='receptionFurniture/TablesForSeveralWorkplaces'/>}/>
                        </Route>
                        <Route path="chairs">
                            <Route index element={<PathPiese MainContent={CatalogContent} catalogСhapter='chairs'/>}/>
                            <Route path="computerChairs" element={<PathPiese MainContent={ChapterContent} catalogСhapter='chairs/ComputerChairs'/>}/>
                        </Route>
                        <Route path="product/:prodName" element={<PathPiese MainContent={CatalogProductRoute}/>}/>
                    </Route>

                    <Route path="favourites" element={<PathPiese MainContent={FavouritesRoute} favourites/>}/>
                    <Route path="basket" element={<PathPiese MainContent={BasketRoute} basket/>}/>

                    <Route path="company" element={<CompanyRoute/>}/>
                    <Route path="designers" element={<DesignersRoute/>}/>
                    <Route path="contacts" element={<СontactsRoute/>}/>
                </Route>
            </Routes>
        </>
    )
}

function windowClick(dispatch, event){
    const target = event.target

    if(target.closest('#burger')){
        const burger = target.closest('#burger')

        burger.classList.toggle('active')
        burger.nextElementSibling.classList.toggle('active')

        if(scrollWidth < 769){
            const header = document.getElementById('header')
            burger.nextElementSibling.style.top = header.offsetHeight + 'px'
            document.body.classList.toggle('hidden')
        }
    }else if(!target.closest('#menu')){
        const burger = document.getElementById('burger')
        
        burger.classList.remove('active')
        burger.nextElementSibling.classList.remove('active')
    }
    if(target.closest('#menuLink')){
        document.body.classList.remove('hidden')
    }

    if(target.closest('#menu')){
        if(target.closest('#menuLink')){
            const burger = document.getElementById('burger')

            burger.classList.remove('active')
            burger.nextElementSibling.classList.remove('active')
        }
    }

    if(target.closest('#openPopap')){
        const popaps = document.querySelectorAll('#popap')
        let popap 
        popaps.forEach(el=>{
            if(el.dataset.popapType === target.closest('#openPopap').dataset.popapType){
                popap = el
            }
        })

        if(target.closest('[data-popap-type="close"]')){
            const form = document.querySelector('[data-box-popap].active')
            form.classList.toggle('active')
            form.classList.remove('register')
            document.body.classList.remove('backBlurActive')
        }else{
            popap.classList.toggle('active')
            document.body.classList.toggle('backBlurActive')
        }

        if(target.closest('[data-popap-type="placeOrder"]')){
            setTimeout(()=>{
                document.querySelector('[data-box-popap].active').classList.remove('active')
                document.body.classList.remove('backBlurActive')
            },2000)
        }
    }

    if(target.closest('#registerButton')){
        const form = target.closest('[data-box-popap]')

        form.classList.add('register')
    }

    if(target.closest('[data-slider]')){
        const slider = target.closest('[data-slider]')
        const truck = slider.querySelector('#sliderTruck')
        const counter = slider.querySelector('#sliderCounter')

        if(target.closest('#sliderArrowLeft')){
            if(+truck.style.left.split('px')[0] < 0){
                truck.style.left = +truck.style.left.split('px')[0] + truck.offsetHeight + 'px'
                counter.innerHTML = +counter.innerHTML - 1
            }
        }
        if(target.closest('#sliderArrowRight')){
            if(+truck.scrollWidth + +truck.style.left.split('px')[0] - truck.offsetHeight != 0){
                truck.style.left = +truck.style.left.split('px')[0] - truck.offsetHeight + 'px'
                counter.innerHTML = +counter.innerHTML + 1 
            }
        }

        if(truck.style.left.split('px')[0] < 0){
            slider.querySelector('#sliderArrowLeft').classList.add('active')
        }else{
            slider.querySelector('#sliderArrowLeft').classList.remove('active')
        }

        if(+truck.scrollWidth + +truck.style.left.split('px')[0] === truck.offsetHeight){
            slider.querySelector('#sliderArrowRight').classList.remove('active')
        }else{
            slider.querySelector('#sliderArrowRight').classList.add('active')
        }
    }

    if(target.closest('#logOut')){
        signOut(auth)
        dispatch(logOut())
    }
}

let checkMail = false; let checkPass = false; let checkName = false;let checkNum = false;
function windowInput(event){
    const target = event.target

    if(target.closest('form') && target.closest('form').dataset.popapType === 'login'){
        const button = target.closest('form').querySelector('button')
        if(target.name === 'userMail'){
            if(target.value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z.]+$')){
                checkTrue(); checkMail = true
            }else{checkFalse(); checkMail = false}
            if(target.value === ''){
                checkNaN()
            }
        }
        if(target.name === 'userPass'){
            if(target.value.length < 10){
                checkFalse()
                target.parentElement.querySelector('#errorTextPopap').innerHTML = 'Минимум 10 символов'
                checkPass = false
            }else if(target.value.match('(?=.*?[a-zа-я])(?=.*?[A-ZА-Я])(?=.*?[0-9])[a-zа-яA-ZА-Я0-9]{10,}')){
                checkTrue()
                checkPass = true
            }else{
                checkFalse()
                target.parentElement.querySelector('#errorTextPopap').innerHTML = 'Пароль должен содержать хотя бы одну строчную букву, одну прописную букву и одну цифру'
                checkPass = false
            }
            if(target.value === ''){
                checkPass = false
                checkNaN()
            }
        }
        if(target.name === 'userName'){
            if(target.value.match('[а-яА-Я]')){
                checkTrue(checkName);
                checkName = true
            }else{
                checkFalse(checkName)
                target.parentElement.querySelector('#errorTextPopap').innerHTML = 'Пожалуйста используйте русский язык'
                checkName = false
            }
            if(target.value === ''){
                checkNaN(checkName)
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
                checkFalse()
                target.parentElement.querySelector('#errorTextPopap').innerHTML = 'Пожалуйста используйте номер Российского оператора'
            }else{
                checkTrue()
                checkNum = true
            }
            if(target.value === ''){
                checkNaN()
                checkNum = false
            }
        }

        if(target.closest('form').dataset.popapSide === 'login'){
            if(checkMail && checkPass){
                button.classList.remove('disabled')
                button.disabled = false
            }else{
                button.classList.add('disabled')
                button.disabled = true
            }
        }else{
            if(checkMail && checkPass && checkName && checkNum){
                button.classList.remove('disabled')
                button.disabled = false
            }else{
                button.classList.add('disabled')
                button.disabled = true
            }
        }

        function checkTrue(){
            target.parentElement.classList.add('valid')
            target.parentElement.classList.remove('notValid')
        }
        function checkFalse(){
            target.parentElement.classList.remove('valid')
            target.parentElement.classList.add('notValid')
        }
        function checkNaN(){
            target.parentElement.classList.remove('valid')
            target.parentElement.classList.remove('notValid')
        }
    }
}

function windowSubmit(setUserInfo, event){
    event.preventDefault()
    const form = event.target

    if(form.id === 'popap'){
        console.log(form.dataset.popapType)

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
                        setUserInfo({name, phone})
                        form.parentElement.classList.remove('active', 'register')
                        document.body.classList.remove('backBlurActive')
                    })
                    .catch(error=>{
                        popapError('Аккаунт с такой почтой уже существует')
                    })
            }
        }else{
            let checkValid = false
            const inputs = form.querySelectorAll('input, textarea')
            inputs.forEach(el=>{
                if(el.value){checkValid = true}
            })
            if(checkValid){
                form.classList.add('valid')
                setTimeout(()=>{
                    form.classList.remove('valid', 'active')
                    document.body.classList.remove('backBlurActive')
                },2000)
                inputs.forEach(el=>el.value = '')
            }else{
                popapError('Пожалуйста заполните все поля')
            }
        }
    }

    function popapError(errorValue = ''){
        form.closest('[data-box-popap]').classList.add('notValid')
        form.querySelector('#errorText').innerHTML = errorValue
        setTimeout(()=>form.closest('[data-box-popap]').classList.remove('notValid'),2000)
    }
}