import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";

export default ()=>{
    const location = useLocation()
    useEffect(()=>{
        const wraper = document.querySelector('.mainUserProfile__popap-wraper')
        if(wraper.firstElementChild.offsetHeight > wraper.lastElementChild.offsetHeight){
            wraper.style.height = wraper.firstElementChild.offsetHeight + 'px'
        }else{
            wraper.style.height = wraper.lastElementChild.offsetHeight + 20 + 'px'
        }
    },[location])

    return(
        <>
            <div className="mainUserProfile__nonDef">
                <div className="mainUserProfile__nonDef-title">Вы ещё не вошли в аккаунт</div>
                <button onClick={clickLogin} className="mainUserProfile__nonDef-button hover__button">Войти или зарегестрироваться</button>
            </div>
            <div className="mainUserProfile__popap">
                <div className="mainUserProfile__popap-wraper">
                    
                    <form action="#" id="popapMain" className="mainUserProfile__popap-main">
                        <div className="mainUserProfile__popap-title">Войти в аккаунт <span onClick={clickLogin}></span></div>
                        <div className="mainUserProfile__popap-input-box">
                            <input tabIndex={1} name="userMail" className="mainUserProfile__popap-input" placeholder="Aдрес электронной почты" type="text" />
                            <div className="mainUserProfile__popap-input-check"></div>
                        </div>
                        <div className="mainUserProfile__popap-input-box">
                            <input tabIndex={2} name="userPass" className="mainUserProfile__popap-input" placeholder="Пароль" type="password" />
                            <div className="mainUserProfile__popap-input-check"></div>
                            <div className="mainUserProfile__popap-input-falPass"></div>
                        </div>
                        <button tabIndex={3} disabled type="submit" className="mainUserProfile__popap-button blue disabled">
                            Войти
                            <div className="mainUserProfile__popap-input-falPass" style={{textAlign: 'center'}}>Неверный логин или пароль</div>
                        </button>
                        <div className="mainUserProfile__popap-separator"><div>или</div></div>
                        <div onClick={actReg} className="mainUserProfile__popap-button blue">Зарегестрироваться</div>
                    </form>

                    <form action="#" id="popapBackWall" className="mainUserProfile__popap-backWall">
                        <div className="mainUserProfile__popap-title">Создать аккаунт <span onClick={clickLogin}></span></div>
                        <div className="mainUserProfile__popap-inputBox">
                            <div className="mainUserProfile__popap-input-box">
                                <input tabIndex={1} name="userName" className="mainUserProfile__popap-input" placeholder="Имя" type="text" />
                                <div className="mainUserProfile__popap-input-check"></div>
                                <div className="mainUserProfile__popap-input-falPass"></div>
                            </div>
                            <div className="mainUserProfile__popap-input-box">
                                <input tabIndex={2} name="userSubname" className="mainUserProfile__popap-input" placeholder="Фамилия" type="text" />
                                <div className="mainUserProfile__popap-input-check"></div>
                                <div className="mainUserProfile__popap-input-falPass"></div>
                            </div>
                        </div>
                        <div className="mainUserProfile__popap-categoriName">Дата рождения</div>
                        <div className="mainUserProfile__popap-selectsBox">
                            <div data-date-type="day" tabIndex={3} id="select" className="mainUserProfile__popap-selectAge">
                                <div className="mainUserProfile__popap-selectAge-button"></div>
                                <ul className="mainUserProfile__popap-selectAge-list">
                                    <li id="selectItem" value={'День'} className="mainUserProfile__popap-selectAge-item initValue selected "></li>
                                    {dateIterator('day')}
                                </ul>
                            </div>
                            <div data-date-type="month" tabIndex={4} id="select" className="mainUserProfile__popap-selectAge">
                                <div className="mainUserProfile__popap-selectAge-button"></div>
                                <ul className="mainUserProfile__popap-selectAge-list">
                                    <li id="selectItem" value={'Месяц'} className="mainUserProfile__popap-selectAge-item initValue selected "></li>
                                    <li id="selectItem" value={'Январь'} className="mainUserProfile__popap-selectAge-item">Январь</li>
                                    <li id="selectItem" value={'Февраль'} className="mainUserProfile__popap-selectAge-item">Февраль</li>
                                    <li id="selectItem" value={'Март'} className="mainUserProfile__popap-selectAge-item">Март</li>
                                    <li id="selectItem" value={'Апрель'} className="mainUserProfile__popap-selectAge-item">Апрель</li>
                                    <li id="selectItem" value={'Май'} className="mainUserProfile__popap-selectAge-item">Май</li>
                                    <li id="selectItem" value={'Июнь'} className="mainUserProfile__popap-selectAge-item">Июнь</li>
                                    <li id="selectItem" value={'Июль'} className="mainUserProfile__popap-selectAge-item">Июль</li>
                                    <li id="selectItem" value={'Август'} className="mainUserProfile__popap-selectAge-item">Август</li>
                                    <li id="selectItem" value={'Сентябрь'} className="mainUserProfile__popap-selectAge-item">Сентябрь</li>
                                    <li id="selectItem" value={'Октябрь'} className="mainUserProfile__popap-selectAge-item">Октябрь</li>
                                    <li id="selectItem" value={'Ноябрь'} className="mainUserProfile__popap-selectAge-item">Ноябрь</li>
                                    <li id="selectItem" value={'Декабрь'} className="mainUserProfile__popap-selectAge-item">Декабрь</li>
                                </ul>
                            </div>
                            <div data-date-type="year" tabIndex={5} id="select" className="mainUserProfile__popap-selectAge">
                                <div className="mainUserProfile__popap-selectAge-button"></div>
                                <ul className="mainUserProfile__popap-selectAge-list">
                                    <li id="selectItem" value={'Год'} className="mainUserProfile__popap-selectAge-item initValue selected "></li>
                                    {dateIterator('year')}
                                </ul>
                            </div>
                        </div>
                        <div className="mainUserProfile__popap-categoriName">Пол</div>
                        <div className="mainUserProfile__popap-radioBtn-box">
                            <div className="mainUserProfile__popap-radioBtn-box-item">
                                <input tabIndex={6} id="radioInput" name="popapRadio" type="radio" />
                                <label htmlFor="radioInput"></label>
                                <div className="mainUserProfile__popap-radioBtn-text">Мужской</div>
                            </div>
                            <div  className="mainUserProfile__popap-radioBtn-box-item">
                                <input tabIndex={6} id="radioInput" name="popapRadio" type="radio" />
                                <label htmlFor="radioInput"></label>
                                <div className="mainUserProfile__popap-radioBtn-text">Женский</div>
                            </div>
                        </div>
                        <div className="mainUserProfile__popap-input-box">
                            <input tabIndex={7} name="userMail" className="mainUserProfile__popap-input" placeholder="Aдрес электронной почты" type="text" />
                            <div className="mainUserProfile__popap-input-check"></div>
                        </div>
                        <div className="mainUserProfile__popap-input-box">
                            <input tabIndex={8} name="userPass" className="mainUserProfile__popap-input" placeholder="Пароль" type="password" />
                            <div className="mainUserProfile__popap-input-check"></div>
                            <div className="mainUserProfile__popap-input-falPass"></div>
                        </div>
                        <div className="mainUserProfile__popap-input-box">
                            <input tabIndex={9} name="userPhone" className="mainUserProfile__popap-input" placeholder="Номер телефона" type="tel" />
                            <div className="mainUserProfile__popap-input-check"></div>
                            <div className="mainUserProfile__popap-input-falPass"></div>
                        </div>
                        <button tabIndex={10} disabled type="submit" onClick={actReg} className="mainUserProfile__popap-button blue disabled">
                            Зарегестрироваться
                            <div className="mainUserProfile__popap-input-falPass" style={{textAlign: 'center'}}>Данный аккаунт уже существует</div>
                            </button>
                    </form>
                </div>
            </div>
        </>
    )
}

function clickLogin(){
    const body = document.querySelector('body')
    const bodyBlur = document.querySelector('.body-blackBlur')
    const popap = document.querySelector('.mainUserProfile__popap')
    popap.firstElementChild.classList.remove('registration')
    body.classList.toggle('hidden')
    bodyBlur.classList.toggle('active')
    popap.classList.toggle('active')
}

function actReg(){
    const popapWraper = document.querySelector('.mainUserProfile__popap-wraper')
    popapWraper.classList.add('registration')
}

function dateIterator(type){
    const arr = []
    if(type === 'day'){
        for (let i = 1; i < 32; i++) {
            arr.push(<li key={'selectAge'+i} id="selectItem" value={`${i}`} className="mainUserProfile__popap-selectAge-item">{i}</li>)
        }
    }
    if(type === 'year'){
        for (let i = new Date().getFullYear(); i > 1901; i--) {
            arr.push(<li key={'selectAge'+i} id="selectItem" value={`${i}`} className="mainUserProfile__popap-selectAge-item">{i}</li>)
        }
    }
    return arr
}