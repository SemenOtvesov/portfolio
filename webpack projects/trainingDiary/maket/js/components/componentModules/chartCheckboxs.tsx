import { ItraningList, TexerciseList } from "@js/types/componentsTypes";
import React from "react";

type TchartCheckbox = {exercisesList: TexerciseList | undefined, trainingList:ItraningList | undefined}

export default ({exercisesList, trainingList}: TchartCheckbox)=>{
    if(exercisesList){
        return exercisesList.map(exercise=>{
            if(exercise.approachList){
                if(exercise.approachList[0]){
                    return <li 
                                key={exercise.exerciseName} 
                                id="chartCheckboxDoughnut" 
                                data-checkbox-name={exercise.exerciseName} 
                                className="main__left-chart-checkbox active"
                            >
                            <div className="main__left-chart-checkbox-title">{exercise.exerciseName}</div>
                            <div className="main__left-chart-checkbox-inputBox">
                                <input type="checkbox" />
                                <span></span>
                            </div>
                        </li>
                }
            }else{
                return<></>
            }
        })
    }

    if(trainingList){
        return trainingList.map(training=>{
            return <li 
                        key={training.name} 
                        id="chartCheckboxBar" 
                        data-checkbox-name={training.name} 
                        className="main__left-chart-checkbox active"
                    >
                    <div className="main__left-chart-checkbox-title">{training.name}</div>
                    <div className="main__left-chart-checkbox-inputBox">
                        <input type="checkbox" />
                        <span></span>
                    </div>
                </li>
        })
    }
}