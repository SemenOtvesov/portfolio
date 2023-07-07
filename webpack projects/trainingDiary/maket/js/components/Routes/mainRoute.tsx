import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NotAuth from "./notAuth"
import selectItems from "@componentModules/selectItems";
import mainRouteTraningListItems from "@middleComponents/mainRouteTraningListItems";
import mainRouteExerciseListItems from "@middleComponents/mainRouteExerciseListItems";
import chart from "@mainFunctions/chart"
import chartCheckboxs from "@componentModules/chartCheckboxs";

import { TuserUid, userStateInterfase } from "@js/types/stateTypes";
import { TexerciseList, ToutletContext } from "@js/types/componentsTypes";
import { changeActiveApproachsBar, changeActiveApproachsDoughnut } from "@js/redux/chartRouter";
import { appLoaderImg } from "@js/mainFunctions/setDOMfn/appLoaderImg";
import { equalSidesFn } from "@js/mainFunctions/setDOMfn/equalSidesFn";
import mainRouteMouseMove from "@js/mainFunctions/events/mainRoute/mainRouteMouseMove";

export default()=>{
    const dispatch = useDispatch()

    const {user, scrollWidth, activeTraining}: ToutletContext = useOutletContext()
    const userUid: TuserUid = useSelector((state: userStateInterfase) => state.userRouter.userUid)
    const activeApproachsDoughnut: string[] = useSelector((state: userStateInterfase) => state.chartRouter.activeApproachsDoughnut)
    const activeApproachsBar: string[] = useSelector((state: userStateInterfase) => state.chartRouter.activeApproachsBar)

    let exercisesList: TexerciseList = []
    if(user.trainingList && user.trainingListKeys && activeTraining){
        if(!user.trainingList[0] && !user.trainingListKeys[0]){return}
        exercisesList = user.trainingList[user.trainingListKeys.indexOf(activeTraining)].exercisesList
    }

    useEffect(()=>{
        appLoaderImg()
        equalSidesFn()

        const trainings: NodeListOf<HTMLDivElement> = document.querySelectorAll('#training')
        trainings.forEach((el: HTMLDivElement)=>{
            if(el.dataset.trainingNumber === activeTraining){
                el.classList.add('active')
            }else{
                el.classList.remove
            }
        })

        const fnChart = chart(exercisesList, activeApproachsDoughnut, activeApproachsBar, user.trainingList)
        document.addEventListener('mousemove', mainRouteMouseMove)
        return ()=>{
            if(fnChart){
                fnChart.chartDoughnutDestroyFn.destroy()
                fnChart.chartBarDestroyFn.destroy()
            }
            document.removeEventListener('mousemove', mainRouteMouseMove)
        }
    })
    useEffect(()=>{
        const button = document.getElementById('addExerciseButton')
        button?.classList.remove('active')

        const addExercisePopapButton: HTMLButtonElement | null = document.querySelector('#addExercisePopapButton')
        if(!addExercisePopapButton){return}
        addExercisePopapButton.disabled = false

        if(exercisesList[0]){
            const finArr: string[] = []
            exercisesList.forEach(el=>{
                finArr.push(el.exerciseName)
            })
            dispatch(changeActiveApproachsDoughnut(finArr))
            document.querySelectorAll('#chartCheckboxDoughnut').forEach(el=>el.classList.add('active'))
        }else if(exercisesList[0] == undefined){
            if(activeApproachsDoughnut[0] !== undefined){
                dispatch(changeActiveApproachsDoughnut([]))
            }
        }
    }, [exercisesList])
    useEffect(()=>{
        if(user.trainingList){
            if(user.trainingList[0]){
                const finArr: string[] = []
                user.trainingList.forEach(el=>{
                    if(el.exercisesList[0]){
                        finArr.push(el.name)
                    }
                })
                dispatch(changeActiveApproachsBar(finArr))
            }else{
                if(activeApproachsBar[0]){
                    dispatch(changeActiveApproachsBar([]))
                }
            }
        }
    }, [user.trainingList])
    useEffect(()=>{
        const training: HTMLDivElement | null = document.querySelector(`[data-training-number="${activeTraining}"]`)
        const trainingList: HTMLUListElement | null = training?.closest('ul') || null

        if(!training){return}
        if(!trainingList){return}

        const listScrollHeight = trainingList.scrollHeight
        const listClientHeight = trainingList.clientHeight
        
        const listRectPosition = trainingList.getBoundingClientRect()
        const itemRectPosition = training.getBoundingClientRect()

        if(listClientHeight < listScrollHeight){
            if(listClientHeight / 2 <= (itemRectPosition.top - listRectPosition.top)){
                trainingList.scrollBy({top: (itemRectPosition.top / 2 - listRectPosition.top) + training.offsetHeight, behavior: 'smooth'})
            }
            if(listClientHeight / 2 >= (itemRectPosition.top - listRectPosition.top)){
                trainingList.scrollBy({top: -(itemRectPosition.top / 2 + listRectPosition.top + training.offsetHeight*2), behavior: 'smooth'})
            }
        }
    }, [activeTraining])

    const selectItemsList = [
        {type: 'local', name: 'ride', iconName: 'ride'},
        {type: 'local', name: 'swim', iconName: 'swim'},
        {type: 'local', name: 'run', iconName: 'run'},
        {type: 'local', name: 'jump', iconName: 'jump'},
        {type: 'user'},
    ]

    if(!Object.values(user)[0]){return <NotAuth/>}

    return<>
        <div id="childrensInBody" className="main">
                <div id="mainRight" className="main__right">
                    <div id="mainRightResize" className="main__right-resize"></div>
                    <div className="main__right-title-box">
                        <div className="main__right-title">Список тренировок</div>
                        {scrollWidth > 768 ? <img onMouseDown={(event)=>event.preventDefault()} src="./img/icon/resize.png" alt="" /> : ''}
                    </div>
                    <ul className="main__right-list">
                        {mainRouteTraningListItems(user.trainingList, user.trainingListKeys, userUid, activeTraining)}
                    </ul>
                    <button id="addTrainingButton" className="main__right-button">Добавить тренировку</button>
                </div>

                <div id="mainLeft" className="main__left">
                    <div id="trainingBox" className="main__left-training">
                        <div className="main__right-title-box">
                            <div className="main__right-title">Список упражнений</div>
                            <div className="main__right-title-button-box"> 
                                {  scrollWidth < 769 ?
                                    <button id="trainingExit" className="main__right-title-button green">Назад</button>
                                :''}
                                <button id="trainingDeleteButton" className="main__right-title-button red">Удалить тренировку</button>
                            </div>
                        </div>
                        <div className="main__left-content">
                            <div id="exerciseListBox" className="main__left-list-box">
                                <ul id={scrollWidth < 426 ? 'equalSides' : ''} data-exercise-list className="main__left-list">
                                    {mainRouteExerciseListItems(exercisesList, scrollWidth)}
                                </ul>
                                <div id="addExerciseButton" className="main__left-button">
                                    Добавить упражнение
                                    <div id="addExercisePopap" className="main__left-button-popap">
    <div id="select" data-fixsed data-select-type="addExercisePopapInput" className="main__left-button-popap-input">
        <input 
            id="addExercisePopapInput"  
            placeholder="Введите название упражнения" 
            type="text"
            autoComplete="off"
            />
    </div>
                                        <button id="addExercisePopapButton" className="main__left-button-popap-button">Добавить +</button>
                                    </div>
                                </div>
                            </div>
                            <div id="chartContainer" className="main__left-chart-container">

                                <div id={scrollWidth > 425 ? "equalSidesRev" : "equalSides"} data-chart className="main__left-chart-box">
                                    <div className="main__left-chart-title">Общий вес за всe подходы</div>
                                    <ul className="main__left-chart-checkbox-box">
                                        {chartCheckboxs({exercisesList, trainingList: undefined})}
                                    </ul>

                                    <div className="main__left-chart-canvasBox">
                                        <canvas id="chartDoughnut" className="main__left-chart"></canvas>
                                    </div>
                                </div>

                                <div id={scrollWidth > 425 ? "equalSidesRev" : "equalSides"} data-chart className="main__left-chart-box">
                                    <div className="main__left-chart-title">Общий вес за тренировку</div>
                                    <ul className={
                                        user.trainingList ? 
                                            user.trainingList.length ? "main__left-chart-checkbox-box" :
                                            user.trainingList.length % 2 === 0 ? "main__left-chart-checkbox-box around" : 
                                            "main__left-chart-checkbox-box" : "main__left-chart-checkbox-box"
                                        }>
                                        {chartCheckboxs({exercisesList: undefined, trainingList: user.trainingList})}
                                    </ul>

                                    <div className="main__left-chart-canvasBox">
                                        <canvas id="chartBar" className="main__left-chart"></canvas>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>

                    <form id="createTrainingForm" className="main__left-addTraining-box">
                        <div className="main__left-title">Введите название тренировки</div>
                        <input id="createTrainingForm-name" type="text" className="main__left-input"/>
                        <div className="main__left-title">Выберите иконку или добавьте свою</div>

                            <div id="select" className="main__left-select">
                                <button id="createTrainingForm-icon" className="main__left-select-button"></button>
                                <ul className="main__left-select-list">
                                    {selectItems(selectItemsList)}
                                </ul>
                                <span/>
                            </div>
                            
                        <button id="createTraining" type="submit" className="main__left-button">
                            Создать
                            <div className="main__left-button-error">Введите название тренировки</div>
                        </button>
                    </form>
            </div>
        </div>

        <ul id="addExercisePopapInputList" className="main__left-button-popap-input-list">
            {exercisesList.map(el=>{
                return <li key={el.exerciseName + 'autoComplete'} id="selectItem" value={el.exerciseName}>{el.exerciseName}</li>
            })}
        </ul>
    </>
}