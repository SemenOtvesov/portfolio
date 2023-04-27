import React, {useEffect, useState} from 'react'
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getDownloadURL, ref, getStorage, uploadBytes } from 'firebase/storage';
import { createUserWithEmailAndPassword, initializeAuth,onAuthStateChanged, signInWithEmailAndPassword,
    browserLocalPersistence, signOut } from "firebase/auth";

import MainStartPage from '@mains/MainStartPage.jsx'
import MainUserOrderPage from '@mains/MainUser&OrderPage.jsx';
import MainFavoritesPage from '@mains/MainFavoritesPage.jsx';
import MainBasketPage from '@mains/MainBasketPage.jsx';
import MainProductPage from '@mains/MainProductPage.jsx';
import MainCategory from './mains/MainCategory.jsx';

import UserProfile from '@midleComponents/UserProfile.jsx';
import Order from '@midleComponents/Order.jsx';

import Layout from './Layout.jsx';
import { event } from 'jquery';

const firebaseConfig = {
    apiKey: 'AIzaSyAo1IT7ztPjKjWDhcWed70sYqg_4B3UHFQ',
    databaseURL: 'https://masmarket-c4940-default-rtdb.firebaseio.com/',
    storageBucket: 'gs://masmarket-c4940.appspot.com'
}
const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {persistence: browserLocalPersistence})

let userUidVar; let userVar; const userBasketProds = []; const userFavoritesList = []
export default ()=>{
    const location = useLocation()
    const navigate = useNavigate()
    const storage = getStorage();
    const params = useParams()

    const [userUid, setUserUid] = useState()
    const [user , setUser] = useState()
    const [checkRequest, setCheckRequest] = useState()
    const [RegInfo, setRegInfo] = useState({})
    const [checkUploadLogoUser, setСheckUploadLogoUser] = useState(false)


    useEffect(()=>{
        onAuthStateChanged(auth, (us)=>{
            if(us === null){setUserUid()}else{
                setUserUid(us.uid)
            }
        })
        const clickFn = windowListenerClick.bind(event, navigate, setUser, signOut, auth, storage)
        window.addEventListener('click', clickFn)
        const inputFn = windowListenerInput.bind(event, setCheckRequest)
        window.addEventListener('input', inputFn)
        const submitFn = windowListenerSubmit.bind(event, setRegInfo)
        window.addEventListener('submit', submitFn)
        const resizeFn = windowListenerResize
        window.addEventListener('resize', resizeFn)

        return ()=>{
            window.removeEventListener('click', clickFn)
            window.removeEventListener('input', inputFn)
            window.removeEventListener('submit', submitFn)
            window.removeEventListener('resize', resizeFn)
        }
    }, [location.pathname])

    useEffect(()=>{
        const scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        )
        equalSidesFn(scrollWidth)
        appLoaderImg(storage)
        mobileFooterMargin(scrollWidth)
        if(userVar){addCountersHeader(userBasketProds, userFavoritesList, userVar.orserList)}

        const selects = document.querySelectorAll('#select')
        if(selects){return buttonSelected(selects)}
    },[location.pathname, user])

    useEffect(()=>{
        const userLogo = document.querySelector('#userLogo')
        if(userLogo){
            getDownloadURL(ref(storage, `image/users/logo/webp/${userUid}.webp`)).then(url=>{
                contUrl(userLogo, url)
                userLogo.classList.remove('loading-img')
                getDownloadURL(ref(storage, `image/users/logo/png/${userUid}.png`)).then(url=>{
                    contUrl(userLogo, undefined, url)
                })
            }).catch(err=>{
                getDownloadURL(ref(storage, `image/users/logo/webp/userUnLogo.webp`)).then(url=>{
                    contUrl(userLogo, url)
                    userLogo.classList.remove('loading-img')
                }).catch(error=>{
                    userLogo.classList.add('errorDownload')
                    userLogo.classList.remove('loading-img')
                })
                getDownloadURL(ref(storage, `image/users/logo/png/userUnLogo.png`)).then(url=>{
                    contUrl(userLogo, undefined, url)
                }).catch(error=>{
                    userLogo.classList.add('errorDownload')
                    userLogo.classList.remove('loading-img')
                })
            })
        }

        function contUrl(elem, urlWebp, urlPng){
            if(urlWebp){
                elem.querySelector('source').setAttribute('srcSet', urlWebp)
            }
            if(urlPng){
                elem.querySelector('img').setAttribute('src', urlPng)
            }
        }
    },[location.pathname, user, checkUploadLogoUser])

    useEffect(()=>{
        if(userUid){fetchUser(); userUidVar = userUid;}

        async function fetchUser(){
            let checkUser = false
            await fetch(`${firebaseConfig.databaseURL}UserList/${userUid}.json`).then(rez=>rez.json()).then(userDB=>{
                if(!userDB){checkUser = true}else{ 
                    userVar = userDB 
                    for(const key in userDB.basketProds){
                        userBasketProds.push(userDB.basketProds[key])
                    }
                    for(const key in userDB.favoritesList){
                        userFavoritesList.push(userDB.favoritesList[key])
                    }
                    bodyBlur(); 
                    setUser(userDB)
                    
                }
            }).catch(error=>{})
            if(checkUser){
                await fetch(`${firebaseConfig.databaseURL}UserList/${userUid}.json`, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(RegInfo)
                }).then(rez=>{
                    userVar = RegInfo
                    bodyBlur()
                    setUser(RegInfo)
                    userVar = RegInfo
                })
            }
        }

        function bodyBlur(){
            const blur = document.querySelector('.body-blackBlur')
            const body = document.querySelector('.body')
            const popap = document.querySelector('.mainUserProfile__popap')
            blur.classList.remove('active')
            if(popap){popap.classList.remove('active')}
            body.classList.remove('hidden')
        }

        let fnChange = windowListenerChange.bind(event, userUid, storage, setСheckUploadLogoUser)
        window.addEventListener('change', fnChange)
        return ()=>{
            window.removeEventListener('change', fnChange)
        }
    }, [userUid])

    return(
        <Routes>
            <Route  path='/' element={<Layout firebaseConfig={firebaseConfig} quantityEl={quantityEl}/>}>
                <Route index element={<MainStartPage quantityEl={quantityEl} firebaseConfig={firebaseConfig}/>}/>
                <Route path='userProfile' element={<MainUserOrderPage user={user} rigthContent={UserProfile} quantityEl={quantityEl}/>}/>
                <Route path='order' element={<MainUserOrderPage user={user} rigthContent={Order} quantityEl={quantityEl} />}/>
                <Route path='favorites' element={<MainFavoritesPage user={user} userFavoritesList={userFavoritesList} quantityEl={quantityEl}/>}/>
                <Route path='basket' element={<MainBasketPage user={user} userBasketProds={userBasketProds} quantityEl={quantityEl}/>}/>
                <Route path='product/:idProduct' element={<MainProductPage userBasketProds={userBasketProds} 
                userFavoritesList={userFavoritesList} storage={storage} equalSidesFn={equalSidesFn} 
                firebaseConfig={firebaseConfig} appLoaderImg={appLoaderImg}/>}/>
                <Route path='category/:nameCategory' element={<MainCategory quantityEl={quantityEl} firebaseConfig={firebaseConfig}/>}></Route>
            </Route>
        </Routes>
    )
}

function windowListenerResize(){
    const scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    )
    equalSidesFn(scrollWidth)
}

async function windowListenerClick(navigate, setUser, signOut, auth, storage, event){
    const target = event.target
    if(target.closest('#inputCh')){
        const inputCh = target.closest('#inputCh')
        const inputChes = document.querySelectorAll('#inputCh')
        if(inputCh.dataset.inputChAll){
            let inputChAll
            inputChes.forEach(el=>{
                if(inputCh.dataset.inputChAll === 'true'){
                    el.firstElementChild.classList.remove('active')
                    inputChAll = false
                }else{
                    el.firstElementChild.classList.add('active')
                    inputChAll = true
                }
            })
            inputCh.dataset.inputChAll = inputChAll
        }else{
            inputCh.firstElementChild.classList.toggle('active')

            let checkAllMark = false
            inputChes.forEach(el=>{
                if(!el.dataset.inputChAll){
                    if(el.lastElementChild.className.split(' ')[1] !== 'active'){
                        checkAllMark = true
                    }
                }
            })
            const checkAll = document.querySelector('[data-input-ch-all]')
            if(checkAllMark){
                checkAll.firstElementChild.classList.remove('active')
                checkAll.dataset.inputChAll = false
            }else{
                checkAll.firstChild.classList.add('active')
                checkAll.dataset.inputChAll = true
            }
        }

        if(inputChes){
            const oldPrise = []; const newPrise = []; const prodsWeight = []

            inputChes.forEach(el=>{
                if((!el.dataset.inputChAll)&&(el.firstElementChild.className.split(' ')[1] === 'active')){
                    oldPrise.push(el.closest('[data-product-id]').querySelector('#productOldPrise'))
                    newPrise.push(el.closest('[data-product-id]').querySelector('#productNewPrise'))
                    prodsWeight.push(el.closest('[data-product-id]').querySelector('[data-prod-param="weight"]'))
                }
            })
            addContentBasketRight(oldPrise, newPrise, prodsWeight)
        }
    }

    if(target.closest('#basketDeletProdBtn')){
        let inputChes = document.querySelectorAll('#inputCh')
        if(inputChes){
            const arrDeletProdFromBasket = []
            inputChes.forEach(el=>{
                if((!el.dataset.inputChAll)&&(el.firstElementChild.className.split(' ')[1] === 'active')){
                    const elSelect = el.parentElement.querySelector('#prodParam').innerHTML
                    const elName = el.closest('[data-product-id]').dataset.productId
                    arrDeletProdFromBasket.push({elName, elSelect})
                }
            })
            deletProdFromBasket()
            async function deletProdFromBasket(){
                let deletSelectId
                const oldPrise = []; const newPrise = []; const prodsWeight = []

                for(const key of arrDeletProdFromBasket){
                    await fetch(`${firebaseConfig.databaseURL}UserList/${userUidVar}/basketProds.json?orderBy="select"&equalTo="${key.elSelect}"`)
                    .then(rez=>rez.json()).then(rez=>{
                        const selects = Object.values(rez)
                        const selectsId = Object.keys(rez)

                        selects.forEach(prodBasket=>{
                            if(prodBasket.idProd === key.elName){
                                deletSelectId = selectsId[selects.indexOf(prodBasket)]
                            }
                        })
                    })
                    if(deletSelectId){
                        await fetch(`${firebaseConfig.databaseURL}UserList/${userUidVar}/basketProds/${deletSelectId}.json`,{
                            method: 'DELETE'
                        }).then(rez=>{
                            userBasketProds.forEach(el=>{
                                if((el.idProd === key.elName) && (el.select === key.elSelect)){
                                    userBasketProds.splice(userBasketProds.indexOf(el), 1)
                                    if(userVar){addCountersHeader(userBasketProds, userFavoritesList, userVar.orserList)}
                                    navigate('./basket')
                                }
                            })
                        })
                    }
                }

                inputChes = document.querySelectorAll('#inputCh')
                inputChes.forEach(el=>{
                    if((!el.dataset.inputChAll)&&(el.firstElementChild.className.split(' ')[1] === 'active')){
                        oldPrise.push(el.parentElement.querySelector('#productOldPrise'))
                        newPrise.push(el.parentElement.querySelector('#productNewPrise'))
                        prodsWeight.push(el.parentElement.querySelector('[data-prod-param="weight"]'))
                    }
                })
                addContentBasketRight(oldPrise, newPrise, prodsWeight)
            }
        }
    }

    if(!target.closest('#select')){
        document.querySelectorAll('#select').forEach(el=>el.classList.remove('active'))
    }
    
    if(target.closest('#exitAccont')){
        setUser()
        signOut(auth)
    }

    if(target.closest('[data-prod-select]')){
        const btn = document.getElementById('btnProdAddBasket')
        const prodSelect = target.closest('[data-prod-select]')
        const prodSelectType = document.getElementById('prodSelectType')

        document.querySelectorAll('[data-prod-select]').forEach(el=>el.classList.remove('active'))
        prodSelect.classList.add('active')

        const span = document.createElement('span')
        span.innerHTML = prodSelect.dataset.prodSelect

        if(prodSelectType.children[0] === undefined){
            prodSelectType.append(span)
        }else{
            prodSelectType.children[0].innerHTML = prodSelect.dataset.prodSelect
        }
        prodSelectType.dataset.prodSelectValue = prodSelect.dataset.prodSelect

        if(userBasketProds[0] !== undefined){
            let checkSelect = false
            userBasketProds.forEach(el=>{
                if((el.idProd === btn.dataset.prodIdBtn) && (el.select === prodSelect.dataset.prodSelect)){
                    checkSelect = true
                }
            })
            if(checkSelect){
                btn.children[0].innerHTML = 'В корзине'
                btn.classList.add('blocked')
            }else{
                btn.children[0].innerHTML = 'Добавить в корзину'
                btn.classList.remove('blocked')
            }
        }
    }

    if(target.closest('#btnProdAddBasket')){
        const button = target.closest('#btnProdAddBasket')
        const prodSelectType = document.getElementById('prodSelectType')
        const prodSelectValue = prodSelectType.dataset.prodSelectValue

        if(userUidVar){
            if(button.className.split(' ')[1] !== 'blocked'){
                if(prodSelectValue){
                    button.classList.add('loading-img')
                    equalSidesFn()
                    fetch(`${firebaseConfig.databaseURL}UserList/${userUidVar}/basketProds.json`, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({idProd:button.dataset.prodIdBtn, select:prodSelectValue})
                    }).then(rez=>{
                        userBasketProds.push({idProd: button.dataset.prodIdBtn, select:prodSelectValue})
                        button.children[0].innerHTML = 'В корзине'
                        button.classList.add('blocked')
                        button.classList.remove('loading-img')
                        if(userVar){addCountersHeader(userBasketProds, userFavoritesList, userVar.orserList)}
                    })
                }
            }else{
                if(prodSelectValue){
                    const selectAct = document.querySelector('[data-prod-select].active')
                    button.classList.add('loading-img')
                    equalSidesFn()
                    
                    let deletSelectId
                    await fetch(`${firebaseConfig.databaseURL}UserList/${userUidVar}/basketProds.json?orderBy="select"&equalTo="${selectAct.dataset.prodSelect}"`)
                        .then(rez=>rez.json()).then(rez=>{
                            deletSelectId = Object.keys(rez)[0]
                        })
                        if(deletSelectId){
                            await fetch(`${firebaseConfig.databaseURL}UserList/${userUidVar}/basketProds/${deletSelectId}.json`,{
                                method: 'DELETE'
                            }).then(rez=>{
                                userBasketProds.forEach(el=>{
                                    if((el.idProd === button.dataset.prodIdBtn) && (el.select === selectAct.dataset.prodSelect)){
                                        userBasketProds.splice(userBasketProds.indexOf(el), 1)
                                        if(userVar){addCountersHeader(userBasketProds, userFavoritesList, userVar.orserList)}
                                    }
                                })
                                button.classList.remove('loading-img','blocked')
                                button.children[0].innerHTML = 'Добавить в корзину'
                            })
                        }
                }
            }
        }else{
            button.classList.add('userNdf')
            setTimeout(()=>{button.classList.remove('userNdf')}, 2000)
        }
    }

    if(target.closest('#favourBtn')){
        const favourBtn = target.closest('#favourBtn')
        const buttonSubmit = document.querySelector('#btnProdAddBasket')

        if(favourBtn.className.split(' ')[1] === 'active'){
            let deleteId
            await fetch(`${firebaseConfig.databaseURL}UserList/${userUidVar}/favoritesList.json`)
                    .then(rez=>rez.json()).then(rez=>{
                        const favoritesListValues = Object.values(rez)
                        const favoritesListId = Object.keys(rez)
                        favoritesListValues.forEach(el=>{
                            if(el === buttonSubmit.dataset.prodIdBtn){
                                deleteId = favoritesListId[favoritesListValues.indexOf(el)]
                            }
                        })
                    })
                    if(deleteId){
                        await fetch(`${firebaseConfig.databaseURL}UserList/${userUidVar}/favoritesList/${deleteId}.json`,{
                            method: 'DELETE'
                        }).then(rez=>{
                            userFavoritesList.splice(userFavoritesList.indexOf(buttonSubmit.dataset.prodIdBtn), 1)
                            if(userVar){addCountersHeader(userBasketProds, userFavoritesList, userVar.orserList)}
                            favourBtn.classList.remove('active')
                            favourBtn.children[1].innerHTML = 'В избранное'
                        })
                    }
        }else{
            fetch(`${firebaseConfig.databaseURL}UserList/${userUidVar}/favoritesList.json`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(buttonSubmit.dataset.prodIdBtn)
            }).then(rez=>{
                userFavoritesList.push(buttonSubmit.dataset.prodIdBtn)
                if(userVar){addCountersHeader(userBasketProds, userFavoritesList, userVar.orserList)}
                favourBtn.classList.add('active')
                favourBtn.children[1].innerHTML = 'В избранном'
            })
        }
    }

    if(target.closest('#prodFavorBtn')){
        const button = target.closest('#prodFavorBtn')
        const product = target.closest('#product')
        
        let deleteId
        await fetch(`${firebaseConfig.databaseURL}UserList/${userUidVar}/favoritesList.json`)
                    .then(rez=>rez.json()).then(rez=>{
                        const favoritesListValues = Object.values(rez)
                        const favoritesListId = Object.keys(rez)
                        favoritesListValues.forEach(el=>{
                            if(el === product.dataset.productId){
                                deleteId = favoritesListId[favoritesListValues.indexOf(el)]
                            }
                        })
                    })
                    if(deleteId){
                        await fetch(`${firebaseConfig.databaseURL}UserList/${userUidVar}/favoritesList/${deleteId}.json`,{
                            method: 'DELETE'
                        }).then(rez=>{
                            userFavoritesList.splice(userFavoritesList.indexOf(product.dataset.productId), 1)
                            if(userVar){addCountersHeader(userBasketProds, userFavoritesList, userVar.orserList)}
                            navigate('/favorites')
                            equalSidesFn()
                            appLoaderImg(storage)
                        })
                    }
    }else{
        if(target.closest('#product')){
            if(!target.closest('[data-basket]')){
                const product = target.closest('#product')
                navigate(`product/${product.dataset.productId}`)
            }else if(target.closest('[data-basket="img"]')){
                const product = target.closest('#product')
                navigate(`product/${product.dataset.productId}`)
            }
        }
    }

    if(target.closest('#makingOrderBtn')){
        const body = document.querySelector('body')
        const bodyBlur = document.querySelector('.body-blackBlur')
        const popap = document.getElementById('makingOrderPopap')
        body.classList.toggle('hidden')
        bodyBlur.classList.toggle('active')
        popap.classList.toggle('active')
    }

    if(target.closest('#reviewsBtn')){
        const reviewsBox = document.getElementById('reviewsBox')
        reviewsBox.classList.toggle('active')

        const questionBox = document.getElementById('questionBox')
        questionBox.classList.remove('active')
    }
    if(target.closest('#questionBtn')){
        const questionBox = document.getElementById('questionBox')
        questionBox.classList.toggle('active')

        const reviewsBox = document.getElementById('reviewsBox')
        reviewsBox.classList.remove('active')
    }
}

let checkMail = false; let checkPass = false; let checkName = false; let checkSubname = false; 
let checkNum = false; let checkGender = false; let checkDate = false
function windowListenerInput(setCheckRequest, event){
    const target = event.target
    if(target.closest('form')){
        const button = target.closest('form').querySelector('button')
        if(target.name === 'userMail'){
            if(target.value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z.]+$')){checkTrue(); checkMail = true}else{checkFalse(); checkMail = false}
            if(target.value === ''){
                setCheckRequest(false)
                target.nextElementSibling.classList.remove('valid')
                target.nextElementSibling.classList.remove('notValid')
            }
        }
        if(target.name === 'userPass'){
            if(target.value.length < 10){
                setCheckRequest(false)
                target.parentElement.classList.remove('passValid')
                target.parentElement.classList.add('passNotValid')
                target.parentElement.lastElementChild.innerHTML = 'Минимум 10 символов'
                checkPass = false
            }else if(target.value.match('(?=.*?[a-zа-я])(?=.*?[A-ZА-Я])(?=.*?[0-9])[a-zа-яA-ZА-Я0-9]{10,}')){
                target.parentElement.classList.add('passValid')
                target.parentElement.classList.remove('passNotValid')
                checkPass = true
            }else{
                target.parentElement.classList.remove('passValid')
                target.parentElement.classList.add('passNotValid')
                target.parentElement.lastElementChild.innerHTML = 'Пароль должен содержать хотя бы одну строчную букву, одну прописную букву и одну цифру'
                checkPass = false
            }
            if(target.value === ''){
                checkPass = false
                setCheckRequest(false)
                target.parentElement.classList.remove('passNotValid')
                target.parentElement.classList.remove('passValid')
            }
        }
        if(target.name === 'userName' || target.name === 'userSubname'){
            if(target.value.match('[а-яА-Я]')){
                checkTrue();
                target.parentElement.classList.remove('passNotValid')
                if(target.name === 'userName'){checkName = true}else{checkSubname = true}
            }else{
                checkFalse()
                target.parentElement.classList.add('passNotValid')
                target.parentElement.lastElementChild.innerHTML = 'Пожалуйста используйте русский язык'
                if(target.name === 'userName'){checkName = false}else{checkSubname = false}
            }
            if(target.value === ''){
                setCheckRequest(false)
                target.nextElementSibling.classList.remove('valid')
                target.nextElementSibling.classList.remove('notValid')
                target.parentElement.classList.remove('passNotValid')
                if(target.name === 'userName'){checkName = false}else{checkSubname = false}
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
                        console.log('sdf')
                    }else{checkKey = true;}
                }
            }else{checkKey = true}

            if(checkKey){
                checkNum = false
                checkFalse()
                target.parentElement.classList.add('passNotValid')
                target.parentElement.lastElementChild.innerHTML = 'Пожалуйста используйте номер Российского оператора'
            }else{
                checkTrue()
                target.parentElement.classList.remove('passNotValid')
            }
            if(target.value === ''){
                setCheckRequest(false)
                target.nextElementSibling.classList.remove('valid')
                target.nextElementSibling.classList.remove('notValid')
                target.parentElement.classList.remove('passNotValid')
                checkNum = false
            }
        }
        if(target.closest('.mainUserProfile__popap-radioBtn-box-item')){checkGender = true}

        if(target.closest('form').id === 'popapMain'){
            if(checkMail && checkPass){
                button.classList.remove('disabled')
                button.disabled = false
            }else{
                button.classList.add('disabled')
                button.disabled = true
            }
        }else{
            if(checkMail && checkPass && checkName && checkSubname && checkNum && checkGender && checkDate){
                button.classList.remove('disabled')
                button.disabled = false
            }else{
                button.classList.add('disabled')
                button.disabled = true
            }
        }

        function checkTrue(){
            setCheckRequest(true)
            target.nextElementSibling.classList.add('valid')
            target.nextElementSibling.classList.remove('notValid')
        }
        function checkFalse(){
            setCheckRequest(false)
            target.nextElementSibling.classList.remove('valid')
            target.nextElementSibling.classList.add('notValid')
        }
    }
}

function windowListenerSubmit(setRegInfo, event){
    event.preventDefault()
    const target = event.target

    const userMail = target.querySelector('[name=userMail]').value
    const userPass = target.querySelector('[name=userPass]').value

    if(target.id === 'popapBackWall'){
        createUserWithEmailAndPassword(auth, userMail, userPass).catch(err=>{
            target.querySelector('button').classList.add('passNotValid')
            setTimeout(()=>{
                target.querySelector('button').classList.remove('passNotValid')
            },2000)
        })

        const userName = target.querySelector('[name=userName]').value
        const userSubname = target.querySelector('[name=userSubname]').value
        const userAge = [...target.querySelectorAll('#select')].map(el=>el.querySelector('.selected').getAttribute('value'))
        let userGender = target.querySelectorAll('#radioInput')
        userGender.forEach(el=>{if(el.checked){userGender = el.parentElement.lastElementChild.innerHTML}})
        const userPhone = target.querySelector('[name=userPhone]').value

        setRegInfo({userName, userSubname, userMail, userPass, userAge, userPhone, userGender})
    }else{
        signInWithEmailAndPassword(auth, userMail, userPass).catch(err=>{
            target.querySelector('button').classList.add('passNotValid')
            setTimeout(()=>{
                target.querySelector('button').classList.remove('passNotValid')
            },2000)
        })
    }
}

async function windowListenerChange(userUid, storage, setCheckUploadLogoUser, event){
    let pngUrl;
    if(event.target.files){
        await uploadBytes(ref(storage, `image/users/logo/png/${userUid}.png`), event.target.files[0])
        await getDownloadURL(ref(storage, `image/users/logo/png/${userUid}.png`)).then(url=>pngUrl = url)
        pngTransformWebp(event.target.files[0], userUid, storage, setCheckUploadLogoUser)
    }
}

function equalSidesFn(scrollWidth){
    const equalSidesElements = document.querySelectorAll('#equalSides')
    const equalSidesElementsRev = document.querySelectorAll('#equalSidesRev')
    equalSidesElements.forEach(el=>{
        if(el.nextElementSibling){
            if(el.nextElementSibling.className === 'mainUserProfile__info-userPhone'){
                el.nextElementSibling.style.height = el.offsetWidth + 'px'
            }
        }
        if(scrollWidth > 768){
            if(el.className.split(' ')[0] === 'mainProduct__bottom-slider-right'){
                el.parentElement.style.height = el.offsetWidth + 'px'
            }
        }
        el.style.minHeight = el.offsetWidth + 'px'
        el.style.maxHeight = el.offsetWidth + 'px'
    })
    equalSidesElementsRev.forEach(el=>{
        if(el.nextElementSibling){
            if(el.nextElementSibling.className === 'mainUserProfile__info-userPhone'){
                el.nextElementSibling.style.width = el.offsetHeight + 'px';
            }
        }
        el.style.width = el.offsetHeight + 'px'

        if(((el.closest('#product')||(el.closest('#adv'))||(el.closest('#icon'))||(el.closest('#brandIcon')))) 
        && (el.parentElement.className !== 'loading-img')){
            el.style.width = '100%'
        }
        if(el.closest('.header__box-top-item-counter')){
            el.style.width = el.offsetHeight + 'px'
        }
    })
}

function appLoaderImg(storage){
    const products = document.querySelectorAll('#prod,[data-prod-id]')
    const advs = document.querySelectorAll('#adv')
    const icons = document.querySelectorAll('#icon')
    const brandIcon = document.querySelectorAll('#brandIcon')
    const logoes = document.querySelectorAll('#logo')

    prodsEach()
    advsEach()
    iconsEach()
    brandIconEach()
    logoEach()
    async function prodsEach(){
        if(products){
            for(const el of products){
                const product = el.closest('#product') ? el.closest('#product') : undefined
                if(product){
                    await fetch(firebaseConfig.databaseURL + 'prodList.json' + `?orderBy="id"&equalTo="${el.dataset.prodName}"`).then(rez=>rez.json()).then((rez)=>{
                    const element = Object.values(rez)[0]
                    const oldPrise = product.querySelector('#productOldPrise')
                    const oldPrisePersent = product.querySelector('#productSalePersent')
                    const newPrise = product.querySelector('#productNewPrise')
    
                    if(product.className.split(' ')[0] === 'topProduct__product'){
                        const quantity = product.querySelector('#productQuantity')
                        const quantityLine = product.querySelector('#productQuantityLine')
                        
                        quantity.innerHTML = element.quantity + " шт."
                        quantityLine.innerHTML = `<span style=width:${element.quantity/element.fullQuantity*100}%></span>`
                    }
    
                    const title = product.querySelector('#productTitle')
                    if(title){title.innerHTML = element.title}

                    const installment = product.querySelector('#productInstallment')
                    if(installment){installment.innerHTML = `Частями по ${Math.round(element.newPrise/12)} ₽ / мес` }

                    const weight = product.querySelector('[data-prod-param="weight"]')
                    if(weight){weight.innerHTML = element.weight + ' гр.'}
                    
                    if(oldPrise){oldPrise.innerHTML = element.oldPrise + " ₽"}
                    if(oldPrisePersent){oldPrisePersent.innerHTML = `-${Math.floor((element.oldPrise - element.newPrise)/element.oldPrise*100)}%`}
                    if(newPrise){newPrise.innerHTML = element.newPrise + " ₽"}
                    product.classList.remove('loading')
                })
                }
                
            await getDownloadURL(ref(storage, `image/products/expansion/webp/${el.dataset.prodName}/1.webp`))
                .then((url) => {
                    el.children[1].setAttribute('srcSet', url)
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.width = '100%'

                    getDownloadURL(ref(storage, `image/products/expansion/png/${el.dataset.prodName}/1.png`))
                        .then((url) => {
                            el.children[2].setAttribute('src', url)
                            el.classList.remove('loading-img')
                            el.firstElementChild.style.width = '100%'
                        })
                        .catch((error) => {
                            el.classList.add('errorDownload')
                            el.classList.remove('loading-img')
                            el.firstElementChild.style.width = '100%'
                        });
                    })
                .catch((error) => {
                    el.classList.add('errorDownload')
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.width = '100%'
                });
            }

            const oldPrise = document.querySelectorAll('#productOldPrise')
            const newPrise = document.querySelectorAll('#productNewPrise')
            const prodsWeight = document.querySelectorAll('[data-prod-param="weight"]')

            addContentBasketRight(oldPrise, newPrise, prodsWeight)
        }
    }
    async function advsEach(){
        if(advs){
            for(const el of advs){
                await getDownloadURL(ref(storage, `image/advertisement/webp/${el.dataset.advName}.webp`))
                .then((url) => {
                    el.children[1].setAttribute('srcSet', url)
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.width = '100%'

                    getDownloadURL(ref(storage, `image/advertisement/png/${el.dataset.advName}.png`))
                    .then((url) => {
                        el.children[2].setAttribute('src', url)
                        el.classList.remove('loading-img')
                        el.firstElementChild.style.width = '100%'
                    })
                    .catch((error) => {
                        el.classList.add('errorDownload')
                        el.classList.remove('loading-img')
                        el.firstElementChild.style.width = '100%'
                    });
                })
                .catch((error) => {
                    el.classList.add('errorDownload')
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.width = '100%'
                });
            }
        }
    }
    async function iconsEach(){
        if(icons){
            for(const el of icons){
                await getDownloadURL(ref(storage, `image/icon/all/webp/${el.dataset.iconName}.webp`))
                .then((url) => {
                    el.children[1].setAttribute('srcSet', url)
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.width = '100%'

                    getDownloadURL(ref(storage, `image/icon/all/png/${el.dataset.iconName}.png`))
                    .then((url) => {
                        el.children[2].setAttribute('src', url)
                        el.classList.remove('loading-img')
                        el.firstElementChild.style.width = '100%'
                    })
                    .catch((error) => {
                        if(el.dataset.iconName === 'input-seach'){el.style.backgroundColor = 'rgb(231, 229, 229)'}
                        el.classList.add('errorDownload')
                        el.classList.remove('loading-img')
                        el.firstElementChild.style.width = '100%'
                    });
                })
                .catch((error) => {
                    if(el.dataset.iconName === 'input-seach'){el.style.backgroundColor = 'rgb(231, 229, 229)'}
                    el.classList.add('errorDownload')
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.width = '100%'
                });
            }
        }
    }
    async function brandIconEach(){
        if(brandIcon){
            for(const el of brandIcon){
                await getDownloadURL(ref(storage, `image/products/brand/webp/${el.dataset.brandIconName}.webp`))
                .then((url) => {
                    el.children[1].setAttribute('srcSet', url)
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.width = '100%'

                    getDownloadURL(ref(storage, `image/products/brand/png/${el.dataset.brandIconName}.png`))
                    .then((url) => {
                        el.children[2].setAttribute('src', url)
                        el.classList.remove('loading-img')
                        el.firstElementChild.style.width = '100%'
                    })
                    .catch((error) => {
                        if(el.dataset.iconName === 'input-seach'){el.style.backgroundColor = 'rgb(231, 229, 229)'}
                        el.classList.add('errorDownload')
                        el.classList.remove('loading-img')
                        el.firstElementChild.style.width = '100%'
                    });
                })
                .catch((error) => {
                    if(el.dataset.iconName === 'input-seach'){el.style.backgroundColor = 'rgb(231, 229, 229)'}
                    el.classList.add('errorDownload')
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.width = '100%'
                });
            }
        }
    }
    async function logoEach(){
        if(logoes){
            for(const el of logoes){
                await getDownloadURL(ref(storage, `image/users/logo/webp/${el.dataset.userUid}.webp`))
                .then((url) => {
                    el.children[1].setAttribute('srcSet', url)
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.width = '100%'

                    getDownloadURL(ref(storage, `image/users/logo/png/${el.dataset.userUid}.png`))
                    .then((url) => {
                        el.children[2].setAttribute('src', url)
                        el.classList.remove('loading-img')
                        el.firstElementChild.style.width = '100%'
                    })
                    .catch((error) => {
                        el.classList.add('errorDownload')
                        el.classList.remove('loading-img')
                        el.firstElementChild.style.width = '100%'
                    });
                })
                .catch((error) => {
                    el.classList.add('errorDownload')
                    el.classList.remove('loading-img')
                    el.firstElementChild.style.width = '100%'
                });
            }
        }
    }
}

function addContentBasketRight(oldPrise, newPrise, prodsWeight){
    const mainBasketRight = document.getElementById('mainBasketRight')
    if(mainBasketRight){
        const quantAndWeightAllProd = mainBasketRight.querySelector('#quantAndWeightAllProd')
        const oldPriseAllProd = mainBasketRight.querySelector('#oldPriseAllProd')
        const installmentAllProd = mainBasketRight.querySelector('#installmentAllProd')
        const newPriseAllProd = mainBasketRight.querySelector('#newPriseAllProd')

        let fullWeigthProd = 0
        if(quantAndWeightAllProd){
            prodsWeight.forEach(el=>{
                fullWeigthProd += +el.innerHTML.split(' ')[0]
            })
            quantAndWeightAllProd.innerHTML = `${prodsWeight.length} товара • ${fullWeigthProd} гр`
        }

        let fullOldPrise = 0
        if(oldPriseAllProd){
            oldPrise.forEach(el=>{fullOldPrise += +el.innerHTML.split(' ')[0]})
            oldPriseAllProd.innerHTML = fullOldPrise + ' ₽'
        }

        let fullNewPrise = 0
        if(newPriseAllProd){
            newPrise.forEach(el=>{fullNewPrise += +el.innerHTML.split(' ')[0]})
            newPriseAllProd.innerHTML = fullNewPrise + ' ₽'
        }
        

        if(installmentAllProd){
            installmentAllProd.innerHTML = `- ${fullOldPrise - fullNewPrise} ₽`
        }
    }
}

function quantityEl(pcVar, netVar, mobileVar){
    let scrollWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );
    if(scrollWidth > 1170){return pcVar}else
    if(scrollWidth > 767){return netVar}
    else{return mobileVar}
}

function buttonSelected([...selects]){
    const remSelects = selects.reduce((ac,select)=>{
        const selectButton = select.children[0].children.text ? 
                            select.children[0].children.text:
                            select.children[0]
        const selectItemsList = select.children[1]
        const selectItems = select.querySelectorAll('#selectItem')

        const initSelectValue = selectItemsList.querySelector('.selected').getAttribute('value')
        selectButton.innerHTML = initSelectValue

        let clickSelectBind;
        select.addEventListener('click', clickSelectBind = clickSelect.bind(this, select, selects, selectButton, selectItems))

        ac.push([select, clickSelectBind])
        return ac
    },[])
    return ()=>{
        remSelects.forEach(el=>el[0].removeEventListener('click', el[1]))
    }
}

function clickSelect(select, selects, selectButton, selectItems, event){
    selects.forEach(el=>{if(el !== select){el.classList.remove('active')}})
    select.classList.toggle('active')

    if(event.target.id === 'selectItem'){
        selectItems.forEach(el=>el.classList.remove('selected'))
        event.target.classList.add('selected')

        selectButton.innerHTML = event.target.getAttribute('value')
    }

    let selectsCheck = false
    selects.forEach(el=>{
        if(el.querySelector('.initValue').className.split(' ')[2] !== 'selected'){selectsCheck = true}else{selectsCheck = false}
    })
    if(selectsCheck){checkDate = true}
}

function pngTransformWebp(pngImg, userUid, storage, setCheckUploadLogoUser){
    let myImage
    const image = new Image();
    image.src = URL.createObjectURL(pngImg);
    image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        canvas.getContext('2d').drawImage(image, 0, 0);
        canvas.toBlob((blob) => {
            myImage = new File([blob], 'my-new-name.webp', { type: blob.type });
            uploadBytes(ref(storage, `image/users/logo/webp/${userUid}.webp`), myImage).then(url=>setCheckUploadLogoUser(Math.random()))
        }, 'image/webp');
    };
}

function mobileFooterMargin(scrollWidth){
    const footer = document.querySelector('.footer')
    const headerItemBtnBox = document.getElementById('headerItemBtnBox')
    const prisebox = document.querySelector('.mainProduct__bottom-order')
    const reviewsBox = document.getElementById('reviewsBox')
    const questionBox = document.getElementById('questionBox')
    if(scrollWidth < 726){
        if(prisebox){footer.style.marginBottom = prisebox.offsetHeight + 'px'}
        if(scrollWidth < 426){
            if(prisebox){
                footer.style.marginBottom = prisebox.offsetHeight + headerItemBtnBox.offsetHeight + 'px'
            }else{
                footer.style.marginBottom = headerItemBtnBox.offsetHeight + 'px'
            }
            if(reviewsBox){
                reviewsBox.style.marginBottom = headerItemBtnBox.offsetHeight + 'px'
            }
            if(questionBox){
                questionBox.style.marginBottom = headerItemBtnBox.offsetHeight + 'px'
            }
        }
    }
}

function addCountersHeader(basketProds, favoritesList, orderList){
    const basketCounter = document.querySelector('[data-header-item-counter="basket"]')
    const favoritesCounter = document.querySelector('[data-header-item-counter="favorites"]')
    const orderCounter = document.querySelector('[data-header-item-counter="orders"]')

    if(basketProds && Object.keys(basketProds).length > 0){
        basketCounter.innerHTML = Object.keys(basketProds).length
        basketCounter.classList.add('active')
    }else{
        basketCounter.innerHTML = ''
        basketCounter.classList.remove('active')
    }
    if(favoritesList && Object.keys(favoritesList).length > 0){
        favoritesCounter.innerHTML = Object.keys(favoritesList).length
        favoritesCounter.classList.add('active')
    }else{
        favoritesCounter.innerHTML = ''
        favoritesCounter.classList.remove('active')
    }
    if(orderList && Object.keys(orderList).length > 0){
        orderCounter.innerHTML = Object.keys(orderList).length
        orderCounter.classList.add('active')
    }else{
        orderCounter.innerHTML = ''
        orderCounter.classList.remove('active')
    }
    equalSidesFn()
}