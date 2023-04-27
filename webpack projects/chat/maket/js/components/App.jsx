import React, { useEffect, useState } from "react"
import { initializeApp } from "firebase/app";
import { getDownloadURL, ref, getStorage, uploadBytes } from 'firebase/storage';
import { createUserWithEmailAndPassword, initializeAuth, onAuthStateChanged, signInWithEmailAndPassword,
    browserLocalPersistence, signOut } from "firebase/auth";
import { getDatabase, ref as refDb, onValue} from "firebase/database";



const firebaseConfig = {
    apiKey: 'AIzaSyAqbTSMCVwAhqhShv_knAWDjkQmMEDies0',
    databaseURL: 'https://chat-5468a-default-rtdb.firebaseio.com/',
    storageBucket: 'gs://chat-5468a.appspot.com'
}
const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {persistence: browserLocalPersistence})
const storage = getStorage();
const db = getDatabase();

let userListMessageLocal = []; let userListMessageKeysLocal = []; let userUidLocal; let userNameLocal; let actMessageInfoLocal
let defaultUid; let checkCallbackDb = false
export default ()=>{
    const [RegInfo, setRegInfo] = useState({})
    const [userUid, setUserUid] = useState()
    const [user, setUser] = useState()
    const [userListMessage, setUserListMessage] = useState()
    const [userListMessageIntelayer, setUserListMessageIntelayer] = useState()
    const [actMessageInfo, setActMessageInfo] = useState()
    const [checkUploadLogoUser, setСheckUploadLogoUser] = useState()

    onAuthStateChanged(auth, (us)=>{
        if(us === null){setUserUid()}else{
            setUserUid(us.uid)
        }
    })

    let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
    );
    useEffect(()=>{
        scrollWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        );
        changeScrollChat()
        equalSidesFn()
        resizeFormBox()
        appLoaderImg(storage)
    })
    useEffect(()=>{
        const clickFn = windowListenerClick.bind(this, setActMessageInfo, setUserListMessage,  setUser, auth)
        document.addEventListener('click', clickFn)

        const clickKeyUp = windowListenerKeyUp.bind(this, setUserListMessage)
        document.addEventListener('keyup', clickKeyUp)

        document.addEventListener('input', windowListenerInput.bind(this, setUserListMessageIntelayer, scrollWidth))

        const submitFn = windowListenerSubmit.bind(this, setRegInfo)
        document.addEventListener('submit', submitFn)
    },[])
    useEffect(()=>{
        if(userUid){
            userUidLocal = userUid
            fetch(`${firebaseConfig.databaseURL}userList/${userUid}.json`).then(rez=>rez.json()).then(rez=>{
                if(rez){setUser(rez)}else if(RegInfo){
                    fetch(`${firebaseConfig.databaseURL}userList/${userUid}.json`, {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(RegInfo)
                    }).then(userNew=>{
                        setUser(RegInfo)
                    })
                }
            })
        }

        if(defaultUid !== userUid){
            defaultUid = userUid
            fetch(`${firebaseConfig.databaseURL}userList/${userUid}/listMessage.json`).then(rez=>rez.json()).then(rez=>{
                if(rez){
                    checkCallbackDb = true
                    onValue(refDb(db, `userList/${userUid}/listMessage`), (snapshot) => {
                        const data = snapshot.val();
                        if(data){
                            setUserListMessage({values: Object.values(data), keys: Object.keys(data)})
                        }
                    });
                }
            })
        }

        let fnChange = windowListenerChange.bind(this, userUid, storage, setСheckUploadLogoUser)
        window.addEventListener('change', fnChange)
        return ()=>{
            window.removeEventListener('change', fnChange)
        }
    }, [userUid])
    useEffect(()=>{
        if(user && user.listMessage){
            setUserListMessage({values:Object.values(user.listMessage), keys: Object.keys(user.listMessage)})
        }else{
            setUserListMessage()
        }
        if(user){
            userNameLocal = user.userName
            document.getElementById('accountName').innerHTML = user.userName
        }
    }, [user])
    useEffect(()=>{
        if(userListMessage){
            if(actMessageInfo){
                const messageHistoryId = userListMessage.keys.indexOf(actMessageInfo.messageId)
                const messageInfo = userListMessage.values[messageHistoryId]
                setActMessageInfo({element: messageInfo, messageId: userListMessage.keys[messageHistoryId]})
            }
            userListMessageLocal = userListMessage.values
            userListMessageKeysLocal = userListMessage.keys
            setUserListMessageIntelayer(userListMessage)
        }
    }, [userListMessage])
    useEffect(()=>{
        if(actMessageInfo){
            actMessageInfoLocal = actMessageInfo
        }
    }, [actMessageInfo])
    return(
        <>
            <div className="chat">
                <div className="chat__container">
                    <div className="chat__left">
                        <div className="chat__left-top">
                            <div id="userlogo" className="chat__left-logo">
                                <picture id="logo" data-user-uid={userUid} className="loading-img">
                                    <div id="equalSidesRev" className="img-mask"></div>
                                    <source srcSet=""/>
                                    <img src="" alt="" />
                                </picture>

                                <div id="userAccMenu" className="chat__user-menu">
                                    <div className="chat__user-menu-close"><div/><span id="userAccMenu__closeBtn"/></div>

                                    <div id="equalSides" className="chat__user-menu-logo">
                                        <picture data-user-logo='' id="logo" data-user-uid={userUid} className="loading-img">
                                            <div id="equalSidesRev" className="img-mask"></div>
                                            <source srcSet=""/>
                                            <img src="" alt="" />
                                        </picture>
                                    </div>
                                    <div id="accountName" className="chat__user-menu-title"></div>
                                    <div id="changeLogoBtn" className="chat__user-menu-item">
                                        <picture id="equalSidesRev">
                                            <source srcSet="./img/arrowDownloadLogo.webp"/>
                                            <img src="./img/arrowDownloadLogo.png" alt="" />
                                        </picture>
                                        <div>Выбрать фото</div>
                                        <input type="file" />
                                    </div>
                                    <div id="logoutBtn" className="chat__user-menu-item">
                                        <picture id="equalSidesRev">
                                            <source srcSet="./img/exit.webp"/>
                                            <img src="./img/exit.png" alt="" />
                                        </picture>
                                        <div className="chat__user-menu-item-red">Выйти из аккаунта</div>
                                    </div> 
                                </div>
                            </div>
                            <input id="searchInput" type="text" placeholder="Поиск"/>
                        </div>

                        <div className="chat__left-items">
                            <div id="chatsListTitle" className="chat__left-items-title"></div>
                            {creteLeftItems(userListMessageIntelayer)}
                        </div>

                    </div>
                    <div id="chatRight" className="chat__right" style={{height:'100vh'}}>
                        <div className="chat__right-bg"></div>
                        {creacteChatMain(scrollWidth, actMessageInfo)}
                    </div>
                    <div className={user ? "chat__login" : 'chat__login visable'}>
                        <div id="formBox" className="chat__login-form-box">
                            <form id="loginTop" className="chat__login-form top">
                                <div className="chat__login-title">Войти</div>
                                <div className="chat__login-input-box">
                                    <input name="userMail" type="text" className="chat__login-input" placeholder="Адрес электронной почты"/>
                                </div>
                                <div className="chat__login-input-box">
                                    <input name="userPass" type="password" className="chat__login-input" placeholder="Пароль"/>
                                </div>
                                <div className="chat__login-submit-box">
                                    <button disabled className="chat__login-submit disabled" type="submit" >Войти</button>
                                    <div className="chat__login-input-warning">Неправильная почта или пароль</div>
                                </div>
                                <div className="chat__login-separator"><div>или</div></div>
                                <div id="rotateLoginBtn" className="chat__login-submit">Зарегестрироваться</div>
                            </form>

                            <form id="loginBack" className="chat__login-form back">
                                <div className="chat__login-title">Зарегестрироваться</div>
                                <div className="chat__login-input-box">
                                    <input name="userName" type="text" className="chat__login-input" placeholder="Имя аккаунта"/>
                                    <div className="chat__login-input-check"></div>
                                    <div className="chat__login-input-warning"></div>
                                </div>
                                <div className="chat__login-input-box">
                                    <input name="userMail" type="text" className="chat__login-input" placeholder="Адрес электронной почты"/>
                                    <div className="chat__login-input-check"></div>
                                </div>
                                <div className="chat__login-input-box">
                                    <input name="userPhone" type="tell" className="chat__login-input" placeholder="Номер телефона"/>
                                    <div className="chat__login-input-check"></div>
                                    <div className="chat__login-input-warning"></div>
                                </div>
                                <div className="chat__login-input-box">
                                    <input name="userPass" type="password" className="chat__login-input" placeholder="Пароль"/>
                                    <div className="chat__login-input-check"></div>
                                    <div className="chat__login-input-warning"></div>
                                </div>

                                <div className="chat__login-submit-box">
                                    <button disabled className="chat__login-submit disabled" type="submit">Зарегестрироваться</button>
                                    <div className="chat__login-input-warning">Данный аккаунт уже существует</div>
                                </div>
                                <div className="chat__login-separator"><div>или</div></div>
                                <div id="rotateLoginBtn" className="chat__login-submit">Войти</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function equalSidesFn(){
    const equalSidesElements = document.querySelectorAll('#equalSides')
    const equalSidesElementsRev = document.querySelectorAll('#equalSidesRev')
    equalSidesElements.forEach(el=>{
        el.style.height = el.offsetWidth + 'px'
    })
    equalSidesElementsRev.forEach(el=>{
        el.style.width = el.offsetHeight + 'px'
    })
}

function windowListenerClick(setActMessageInfo, setUserListMessage, setUser, auth, event){
    const target = event.target
    const bodyBackBlur = document.getElementById('bodyBackBlur')

    if(target.closest('#userlogo')){
        const userLogo = target.closest('#userlogo')
        const userAccMenu = document.getElementById('userAccMenu')

        if(target.closest('#userAccMenu__closeBtn')){
            userAccMenu.classList.remove('active')
        }else{
            userAccMenu.classList.add('active')
        }
    }else{
        const userAccMenu = document.getElementById('userAccMenu')
        userAccMenu.classList.remove('active')
    }

    if(target.closest('#logoutBtn')){
        setUser()
        signOut(auth)
    }

    if(target.closest('#rotateLoginBtn')){
        const formBox = target.closest('#formBox')
        formBox.parentElement.classList.toggle('active')
    }

    if(target.closest('#chatPrev')){
        const chatPrev = target.closest('#chatPrev')
        let checkUnd = false
        userListMessageLocal.forEach(el=>{
            if(el.userUid === chatPrev.dataset.userUid){
                checkUnd = true
                setActMessageInfo({element:el, messageId:chatPrev.dataset.messageId})
                document.getElementById('chatRight').classList.add('active')
                appLoaderImg(storage)
                document.querySelector('[data-main-logo]').classList.add('loading-img')
            }
        })

        if(!checkUnd){
            const userNameMessage = chatPrev.querySelector('#userNameMessage')

            setActMessageInfo({element:{messageHistory:{}, name: userNameMessage.innerHTML, userUid: chatPrev.dataset.userUid}, messageId:chatPrev.dataset.messageId})
            document.getElementById('chatRight').classList.add('active')
            appLoaderImg(storage)
            document.querySelector('[data-main-logo]').classList.add('loading-img')
        }
    }

    if(target.closest('#sendMessageBtn')){
        const sendMessageBtn = target.closest('#sendMessageBtn')
        const message = sendMessageBtn.parentElement.firstElementChild
        const messageId = sendMessageBtn.closest('[data-message-id]').dataset.messageId
        const chatName = sendMessageBtn.closest('[data-chat-name]').dataset.chatName
        const chatUserUid = sendMessageBtn.closest('[data-chat-user-uid]').dataset.chatUserUid

        postMessage(message, messageId, chatName, chatUserUid, setUserListMessage)
    }

    if(target.closest('#closeChatMainBtn')){
        document.getElementById('chatRight').classList.remove('active')
    }
}

function windowListenerKeyUp(setUserListMessage, event){
    if(event.key === 'Enter'){
        const message = document.getElementById('messageInput')
        const messageId = message.closest('[data-message-id]').dataset.messageId
        const chatName = message.closest('[data-chat-name]').dataset.chatName
        const chatUserUid = message.closest('[data-chat-user-uid]').dataset.chatUserUid

        postMessage(message, messageId, chatName, chatUserUid, setUserListMessage)
    }
}

function postMessage(message, messageId, chatName, chatUserUid, setUserListMessage){
    if(message.value){
        const messaveValue = message.value
        const time = new Date().getTime()
        fetch(`${firebaseConfig.databaseURL}userList/${userUidLocal}/listMessage/${messageId}/messageHistory.json`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({content: message.value, time, position: 'right'})
        }).then(rez=>{
            let messegeIdAdress
            fetch(`${firebaseConfig.databaseURL}userList/${chatUserUid}/listMessage.json?orderBy="userUid"&equalTo="${userUidLocal}"`).then(rez=>rez.json()).then(rez=>{
                if(Object.keys(rez)[0]){
                    messegeIdAdress = Object.keys(rez)[0]
                }else{
                    messegeIdAdress = creacteKey()
                }
            }).then(rez=>{
                fetch(`${firebaseConfig.databaseURL}userList/${chatUserUid}/listMessage/${messegeIdAdress}/messageHistory.json`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({content: messaveValue, time, position: 'left'})
                })

                const checkIncludesChatArr = []
                userListMessageLocal.forEach(el=>checkIncludesChatArr.push(el.userUid))

                if(!checkIncludesChatArr.includes(chatUserUid)){
                    fetch(`${firebaseConfig.databaseURL}userList/${userUidLocal}/listMessage/${messageId}/name.json`, {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(chatName)
                    })
                    fetch(`${firebaseConfig.databaseURL}userList/${userUidLocal}/listMessage/${messageId}/userUid.json`, {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(chatUserUid)
                    })
    
                    fetch(`${firebaseConfig.databaseURL}userList/${chatUserUid}/listMessage/${messegeIdAdress}/name.json`, {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(userNameLocal)
                    })
                    fetch(`${firebaseConfig.databaseURL}userList/${chatUserUid}/listMessage/${messegeIdAdress}/userUid.json`, {
                        method: 'PUT',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(userUidLocal)
                    })
                }
            })

            if(checkCallbackDb === false){
                checkCallbackDb = true
                onValue(refDb(db, `userList/${userUidLocal}/listMessage`), (snapshot) => {
                    const data = snapshot.val();
                    if(data){
                        setUserListMessage({values: Object.values(data), keys: Object.keys(data)})
                    }
                });
            }

            message.value = ''
        })
    }
}

let checkMail = false; let checkPass = false; let checkName = false; let checkNum = false;

const userList = fetchUserList()
function windowListenerInput(setUserListMessageIntelayer, scrollWidth, event){
    const target = event.target

    if(target.closest('form')){
        const button = target.closest('form').querySelector('button')
        if(target.name === 'userMail'){
            if(target.value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z.]+$')){checkTrue(); checkMail = true}else{checkFalse(); checkMail = false}
            if(target.value === ''){checkNull()}
        }
        if(target.name === 'userPass'){
            if(target.value.length < 10){
                checkFalse()
                target.parentElement.lastElementChild.innerHTML = 'Минимум 10 символов'
                checkPass = false
            }else if(target.value.match('(?=.*?[a-zа-я])(?=.*?[A-ZА-Я])(?=.*?[0-9])[a-zа-яA-ZА-Я0-9]{10,}')){
                checkTrue()
                checkPass = true
            }else{
                checkFalse()
                target.parentElement.lastElementChild.innerHTML = 'Пароль должен содержать хотя бы одну строчную букву, одну прописную букву и одну цифру'
                checkPass = false
            }
            if(target.value === ''){
                checkPass = false
                checkNull()
            }
        }
        if(target.name === 'userName'){
            if(target.value.match('[а-яА-Я]')){
                checkTrue();
                checkName = true
            }else{
                checkFalse()
                target.parentElement.lastElementChild.innerHTML = 'Пожалуйста используйте русский язык'
                checkName = false
            }
            if(target.value === ''){
                checkNull()
                checkName = false
            }
        }
        if(target.name === 'userPhone'){
            if(target.value !== '+'){
                if(target.value.match(/^(8|\+7)/)){
                    checkNum = false

                    if(target.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)){
                        checkTrue()
                        checkNum = true
                    }else if(target.value.length > 12){
                        checkNum = false
                        checkFalse()
                        target.parentElement.lastElementChild.innerHTML = 'Ваш номер слишком длинный'
                    }
                }else{
                    checkNum = false
                    checkFalse()
                    target.parentElement.lastElementChild.innerHTML = 'Пожалуйста используйте номер Российского оператора'
                }
            }
            if(target.value === ''){
                checkNull()
                checkNum = false
            }
        }
        
        if(target.closest('form').id === 'loginTop'){
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
            if(target.closest('form').id !== 'loginTop'){
                target.parentElement.classList.remove('valid')
                target.parentElement.classList.add('notValid')
            }
        }
        function checkNull(){
            if(target.closest('form').id !== 'loginTop'){
                target.parentElement.classList.remove('valid')
                target.parentElement.classList.remove('notValid')
            }
        }
    }

    if(target.closest('#searchInput')){
        const input = target.closest('#searchInput')
        const chatsListTitle = document.getElementById('chatsListTitle')
        chatsListTitle.classList.remove('active')

        if(input.value){ 
            const nameChats = []
            if(userListMessageLocal){
                userListMessageLocal.forEach(el=>nameChats.push(el.name))
            }
            const verifedNameChats = nameChats.filter(simbol=>simbol.toLowerCase().includes(input.value.toLowerCase()))
            if(verifedNameChats[0] !== undefined){
                const setValuesArr = []
                const setKeysArr = []
                userListMessageLocal.forEach(el=>{
                    if(verifedNameChats.includes(el.name)){
                        setValuesArr.push(el)
                        setKeysArr.push(userListMessageKeysLocal[userListMessageLocal.indexOf(el)])
                    }
                })
                setUserListMessageIntelayer({values:setValuesArr, keys: setKeysArr})
            }else{
                chatsListTitle.classList.add('active')
                chatsListTitle.innerHTML = 'Глобальный поиск'

                const nameUsers = []
                for(const key in userList()){
                    nameUsers.push(userList()[key].userName)
                }
                const verifedNameUsers = nameUsers.filter(simbol=>simbol.toLowerCase().includes(input.value.toLowerCase()))
                if(verifedNameUsers[0] !== undefined){
                    const setValuesArr = []
                    const setKeysArr = []
                    for(const key in userList()){
                        const el = userList()[key]
                        if(verifedNameUsers.includes(el.userName)){
                            setValuesArr.push({messageHistory: {}, name: el.userName, userUid: key})
                            setKeysArr.push(creacteKey())
                        }
                    }
                    setUserListMessageIntelayer({values:setValuesArr, keys: setKeysArr})
                }else{
                    setUserListMessageIntelayer({values: 'und', keys: 'und'})
                }
            }
        }else{
            chatsListTitle.classList.remove('active')
            setUserListMessageIntelayer({values: userListMessageLocal, keys: userListMessageKeysLocal})
        }
    }
}
function creacteKey(){
    function callback(){
        let key = ''
        for (let i = 0; i < 28; i++) {
            let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            function randomIntFromInterval(min, max) {
               return Math.floor(Math.random() * (max - min + 1) + min)
            }
            key += arr_en[randomIntFromInterval(0, arr_en.length-1)]
        }
        if(userListMessageKeysLocal.includes(key)){
            callback()
        }else{
            return key
        }
    }
    return callback()
}

function fetchUserList(){
    let userList
    fetch(`${firebaseConfig.databaseURL}userList.json`).then(rez=>rez.json()).then(rez=>userList=rez)
    return ()=>userList
}

function windowListenerSubmit(setRegInfo, event){
    event.preventDefault()
    const target = event.target

    const userMail = target.querySelector('[name=userMail]').value
    const userPass = target.querySelector('[name=userPass]').value

    if(target.id === 'loginBack'){
        createUserWithEmailAndPassword(auth, userMail, userPass).catch(err=>{
            target.querySelector('button').parentElement.classList.add('notValid')
            setTimeout(()=>{
                target.querySelector('button').parentElement.classList.remove('notValid')
            },2000)
        })

        const userName = target.querySelector('[name=userName]').value
        const userPhone = target.querySelector('[name=userPhone]').value

        setRegInfo({userName, userMail, userPass, userPhone, messageHistory: []})
    }else{
        signInWithEmailAndPassword(auth, userMail, userPass).catch(err=>{
            target.querySelector('button').parentElement.classList.add('notValid')
            setTimeout(()=>{
                target.querySelector('button').parentElement.classList.remove('notValid')
            },2000)
        })
    }
}

async function windowListenerChange(userUid, storage, setCheckUploadLogoUser, event){
    const logo = document.querySelector('[data-user-logo]')
    logo.classList.add('loading-img')
    equalSidesFn()

    let pngUrl;
    if(event.target.files){
        await uploadBytes(ref(storage, `image/userLogo/png/${userUid}.png`), event.target.files[0])
        await getDownloadURL(ref(storage, `image/userLogo/png/${userUid}.png`)).then(url=>pngUrl = url)
        pngTransformWebp(event.target.files[0], userUid, storage, setCheckUploadLogoUser)
    }
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
            uploadBytes(ref(storage, `image/userLogo/webp/${userUid}.webp`), myImage).then(url=>{
                setCheckUploadLogoUser(Math.random())
            })
        }, 'image/webp');
    };
}

function changeScrollChat(){
    const scrollBox = document.getElementById('scrollBox')
    scrollBox.scrollTo(0,+scrollBox.firstElementChild.offsetHeight)
}

function resizeFormBox(){
    let minHeight = 0
    const formBox =  document.getElementById('formBox');
    [...formBox.children].forEach(el=>{
        if(minHeight < el.offsetWidth){
            minHeight = el.offsetWidth
        }
    })
    formBox.style.height = minHeight + 'px'
}

function creteLeftItems(listMessageInfo){
    if(listMessageInfo && listMessageInfo.values[0]){
        const listMessage = listMessageInfo.values
        const listKeyMessage = listMessageInfo.keys
        if(listMessage !== 'und'){
            return listMessage.map(message=>{
                const listMessageId = listKeyMessage[listMessage.indexOf(message)]
                const messageHistory = Object.values(message.messageHistory)
                if(messageHistory[0] !== undefined){
                    const lastMessage = new Date(messageHistory[messageHistory.length-1].time)

                    return <div key={messageHistory[0].time} data-message-id={listMessageId} id="chatPrev" data-user-uid={message.userUid} className="chat__left-item">
                    <div className="chat__left-item-logo">
                        <picture id="logo" data-user-uid={message.userUid} className="loading-img">
                            <div id="equalSidesRev" className="img-mask"></div>
                            <source srcSet=""/>
                            <img src="" alt="" />
                        </picture>
                    </div>
                    <div className="chat__left-item-cont">
                        <div id="userNameMessage" className="chat__left-item-title">{message.name}</div>
                        <div className="chat__left-item-text">{messageHistory[messageHistory.length-1].content}</div>
                    </div>
                    <div className="chat__left-item-time">{
                        `${lastMessage.getHours()}:${lastMessage.getMinutes() < 10 ? '0' + lastMessage.getMinutes() : lastMessage.getMinutes()}`
                    }
                    </div>
                    </div>
                }else{
                    return <div key={listMessageId} data-message-id={listMessageId} id="chatPrev" data-user-uid={message.userUid} className="chat__left-item">
                    <div className="chat__left-item-logo">
                        <picture id="logo" data-user-uid={message.userUid} className="loading-img">
                            <div id="equalSidesRev" className="img-mask"></div>
                            <source srcSet=""/>
                            <img src="" alt="" />
                        </picture>
                    </div>
                    <div className="chat__left-item-cont">
                        <div id="userNameMessage" className="chat__left-item-title">{message.name}</div>
                        <div className="chat__left-item-text">Ни одного сообщения</div>
                    </div>
                    <div className="chat__left-item-time"></div>
                    </div>
                }
            })
        }else{
            return <div className="chat__left-items-none">Пользователей с введённым именем не найдено</div>
        }
    }else{
        return <div className="chat__left-items-none">У вас пока что нет сообщений</div>
    }
}

function appLoaderImg(storage){
    const logoes = document.querySelectorAll('#logo')

    logoEach()
    async function logoEach(){
        if(logoes){
            for(const el of logoes){
                if(el.dataset.userUid){
                await getDownloadURL(ref(storage, `image/userLogo/webp/${el.dataset.userUid}.webp`))
                .then((url) => {
                    el.children[1].setAttribute('srcSet', url)
                    remoreLoadImg(el)

                    getDownloadURL(ref(storage, `image/userLogo/png/${el.dataset.userUid}.png`))
                    .then((url) => {
                        el.children[2].setAttribute('src', url)
                        remoreLoadImg(el)
                    })
                    .catch((error) => {
                        el.classList.add('errorDownload')
                        remoreLoadImg(el)
                    });
                })
                .catch((error) => {
                    getDownloadURL(ref(storage, `image/userLogo/webp/userUnLogo.webp`))
                    .then((url) => {
                        el.children[1].setAttribute('srcSet', url)
                        remoreLoadImg(el)

                        getDownloadURL(ref(storage, `image/userLogo/png/userUnLogo.png`))
                        .then((url) => {
                            el.children[2].setAttribute('src', url)
                            remoreLoadImg(el)
                        })
                    })
                });}
            }
        }
    }

    function remoreLoadImg(el){
        setTimeout(()=>{
            el.classList.remove('loading-img')
            el.firstElementChild.style.width = '100%'
        },300)
    }
}

function creacteChatMain(scrollWidth, messageInfoObj){
    function createMessageHistory(){
        if(messageInfoObj){
        const messageInfo = messageInfoObj.element
        const messageHistory = Object.values(messageInfo.messageHistory)

        return messageHistory.map(el=>{
            const elemTime = new Date(el.time)
            return <div key={'message'+el.time} className={el.position === 'right' ? "chat__right-item right" : "chat__right-item"}>
                        <div className="chat__right-content">
                            <span className="chat__right-text">{el.content}</span>
                            <span className="chat__right-item-time">
            {`${elemTime.getHours()}:${elemTime.getMinutes() < 10 ? '0' + elemTime.getMinutes() : elemTime.getMinutes()}`}
                            </span>
                            <span className="chat__right-item-time-plug">
            {`${elemTime.getHours()}:${elemTime.getMinutes() < 10 ? '0' + elemTime.getMinutes() : elemTime.getMinutes()}`}
                            </span>
                        </div>
                    </div>
        })}
    }
    return <div className="chat__right-main"    data-message-id={messageInfoObj ? messageInfoObj.messageId : ''}
                                                data-chat-name={messageInfoObj ? messageInfoObj.element.name : ''}
                                                data-chat-user-uid={messageInfoObj ? messageInfoObj.element.userUid : ''}>
        <div className="chat__right-title">
            {scrollWidth < 769 ? <div id="closeChatMainBtn" className="chat__right-title-arrow"/> : ''}
            <div className="chat__right-logo">
                <picture data-main-logo='' id="logo" data-user-uid={messageInfoObj ? messageInfoObj.element.userUid : ''} className="loading-img">
                    <div id="equalSidesRev" className="img-mask"></div>
                    <source srcSet=""/>
                    <img src="" alt="" />
                </picture>
            </div>
            {messageInfoObj ? messageInfoObj.element.name : ''}
        </div>
        <div id="scrollBox" className="chat__right-cont-wrap">
            <div className="chat__right-cont">
                {createMessageHistory()}
            </div>
        </div>
        <div className="chat__right-input-box">
            <input id="messageInput" type="text" className="chat__right-input" placeholder="Написать сообщение" name=""/>
            <button id="sendMessageBtn" className="chat__right-input-btn"><img src="./img/arrow.png" alt="" /></button>
        </div>
    </div>
}