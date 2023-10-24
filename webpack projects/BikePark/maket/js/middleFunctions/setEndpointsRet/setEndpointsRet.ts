import { Tpoints } from "@js/types/state/calendarsTypes"

type Tprops = {
    points: Tpoints, 
    year:number, 
    month:number, 
    day:number, 
    typeRent: string | undefined
}

export function setEndpointsRet({points, year, month, day, typeRent}:Tprops):Tpoints{
    if(typeRent === 'hour'){
        return {startPoint: {year, month, day}, endPoint:{year, month, day}}
    }

    if(points.startPoint.year && points.startPoint.month && points.startPoint.day){

        if((points.startPoint.year > year) || (points.startPoint.month >= month)){
            if(points.startPoint.year === year){
                if((points.startPoint.day > day) && points.startPoint.month === month){
                    if(typeRent === 'day'){
                        return {startPoint: {year, month, day}, endPoint:{year, month, day: day+1}}
                    }
                    return {startPoint: {year, month, day}, endPoint:{}}
                }
                if(points.startPoint.month > month){
                    if(typeRent === 'day'){
                        return {startPoint: {year, month, day}, endPoint:{year, month, day: day+1}}
                    }
                    return {startPoint: {year, month, day}, endPoint:{}}
                }
            }
            if(points.startPoint.year > year){
                if(typeRent === 'day'){
                    return {startPoint: {year, month, day}, endPoint:{year, month, day: day+1}}
                }
                return {startPoint: {year, month, day}, endPoint:{}}
            }
        }

        if(!points.endPoint.year){
            if((points.startPoint.year === year) && (points.startPoint.month === month) && (points.startPoint.day === day)){
                return {startPoint:{}, endPoint:{}}
            }
        }
        
        if(points.endPoint.year && points.endPoint.month && points.endPoint.day){
            if((points.endPoint.year === year) && (points.endPoint.month === month) && (points.endPoint.day === day)){
                return {startPoint: points.startPoint, endPoint:{}}
            }
            if((points.startPoint.year === year) && (points.startPoint.month === month) && (points.startPoint.day === day)){
                return {startPoint: {year, month, day}, endPoint:{}}
            }
            if((points.endPoint.year > year) || (points.endPoint.month > month) || (points.endPoint.day > day)){
                return {startPoint: points.startPoint, endPoint:{year, month, day}}
            }
            if((points.endPoint.year < year) || (points.endPoint.month < month) || (points.endPoint.day < day)){
                return {startPoint: points.startPoint, endPoint:{year, month, day}}
            }
        }else{
            return {startPoint: points.startPoint, endPoint:{year, month, day}}
        }
        return {startPoint: {}, endPoint:{}}
    }else{
        if(typeRent === 'day'){
            return {startPoint: {year, month, day}, endPoint:{year, month, day: day+1}}
        }
        return {startPoint: {year, month, day}, endPoint:{}}
    }
}