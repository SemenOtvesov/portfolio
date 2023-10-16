import React from "react";
import { Link, NavLink } from "react-router-dom";
import Image from "@componentModules/image/image";

export default({scrollWidth}:{scrollWidth:number})=>{
    return <footer className="footer">
        <div className="footer__container">
            <div className="footer__item-box">
                {firstLineContent(scrollWidth)}
            </div>

            <div className="footer__item-box">
                {middleLineContent(scrollWidth)}
            </div>

            <div className="footer__item-box last">
                {lastLineContent(scrollWidth)}
            </div>
        </div>
    </footer>
}

function lastLineContent(scrollWidth: number){
    if(scrollWidth > 768){
        return <>
            <div className="footer__item">
                <div className="footer__text big">© BikePark, 2021</div>
                <div className="footer__text big">Политика конфиденциальности</div>
            </div>
            <div className="footer__item"> 

                <div className="footer__item-icon-box">
                    <Link to={'/none'}>
                        <Image imageType="icon" imageName="facebook" sourseMod={false}/>
                    </Link>
                    
                    <Link to={'/none'}>
                        <Image imageType="icon" imageName="instagram" sourseMod={false}/>
                    </Link>
                </div>
            </div>
        </>
    }
    if(scrollWidth <= 768 && scrollWidth > 425){
        return<>
            <div className="footer__text big">© BikePark, 2021</div>
            <div className="footer__text big">Политика конфиденциальности</div>

            <div className="footer__item-icon-box">
                <Link to={'/none'}>
                    <Image imageName="facebook" imageType="icon" sourseMod={false}/>
                </Link>
                
                <Link to={'/none'}>
                    <Image imageType="icon" imageName="instagram" sourseMod={false}/>
                </Link>
            </div>
        </>
    }

    if(scrollWidth < 426){
        return <>
            <div className="footer__item">
                <div className="footer__text big">© BikePark, 2021</div>
            </div>
            <div className="footer__item"> 
                <div className="footer__text big">Политика конфиденциальности</div>
                <div className="footer__item-icon-box">
                    <Link to={'/none'}>
                        <Image imageName="facebook" imageType="icon" sourseMod={false}/>
                    </Link>
                    
                    <Link to={'/none'}>
                        <Image imageType="icon" imageName="instagram" sourseMod={false}/>
                    </Link>
                </div>
            </div>
        </>
    }
}
function middleLineContent(scrollWidth: number){
    if(scrollWidth > 425){
        return <>
            <div className="footer__item">
                <div className="footer__item-link-box colomn">
                    <NavLink to="/none" className="footer__item-link">Алюминий</NavLink>
                    <NavLink to="/none" className="footer__item-link">Карбон</NavLink>
                    <NavLink to="/none" className="footer__item-link">Горные/городские</NavLink>
                    <NavLink to="/none" className="footer__item-link">Городские эконом</NavLink>
                </div>
            </div>
        </>
    }

    if(scrollWidth < 426){
        return <>
            <div className="footer__item">
                <div className="footer__item-link-box colomn">
                    <NavLink to="/none" className="footer__item-link">Алюминий</NavLink>
                    <NavLink to="/none" className="footer__item-link">Карбон</NavLink>
                    <NavLink to="/none" className="footer__item-link">Горные/городские</NavLink>
                    <NavLink to="/none" className="footer__item-link">Городские эконом</NavLink>
                </div>
            </div>
            <div className="footer__item-link-box">
                <NavLink to="/none" className="footer__item-link bold">Правила</NavLink>
                <NavLink to="/info" className="footer__item-link bold">Отзывы</NavLink>
                <NavLink to="/contact" className="footer__item-link bold">Контакты</NavLink>
                <NavLink to="/none" className="footer__item-link bold">Обратная связь</NavLink>
            </div>
        </>
    }
}
function firstLineContent(scrollWidth: number){
    if(scrollWidth > 425){
        return <>
            <div className="footer__item">
                <div className="footer__text bold">Аренда велосипедов</div>
            </div>
            <div className="footer__item revers">
                <div className="footer__item-link-box">
                    <NavLink to="/none" className="footer__item-link">Правила</NavLink>
                    <NavLink to="/info" className="footer__item-link">Отзывы</NavLink>
                    <NavLink to="/contact" className="footer__item-link">Контакты</NavLink>
                    <NavLink to="/none" className="footer__item-link">Обратная связь</NavLink>
                </div>
            </div>
        </>
    }
    if(scrollWidth < 426){
        return<>
            <div className="footer__item">
                <div className="footer__text bold">Аренда велосипедов</div>
            </div>
        </>
    }
}