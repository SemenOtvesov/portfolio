import { Tpoints } from "@js/mainFunctions/events/calendar/calendarListenerClick/calendarListenerClick";
import { setEndpointsRet } from "./setEndpointsRet";
import { test, describe, expect } from "@jest/globals";

describe('setEndpointsRetTest oneYear oneMonth', ()=>{
    test('startPoint-firstClick', ()=>{
        const points: Tpoints = {startPoint: {}, endPoint: {}}
        const finishPoints: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {}}
        expect(setEndpointsRet(points, 2023, 6, 5)).toEqual(finishPoints)
    })
    test('startPoint-secondClick', ()=>{
        const points: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {}}
        const finishPoints: Tpoints = {startPoint: {}, endPoint: {}}
        expect(setEndpointsRet(points, 2023, 6, 5)).toEqual(finishPoints)
    })
    test('endPoint-firstClick', ()=>{
        const points: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {}}
        const finishPoints: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {year: 2023, month: 6, day: 10}}
        expect(setEndpointsRet(points, 2023, 6, 10)).toEqual(finishPoints)
    })
    test('endPoint-secondClick', ()=>{
        const points: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {year: 2023, month: 6, day: 10}}
        const finishPoints: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {}}
        expect(setEndpointsRet(points, 2023, 6, 10)).toEqual(finishPoints)
    })
    test('endPoint-secondClick', ()=>{
        const points: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {}}
        const finishPoints: Tpoints = {startPoint: {year: 2023, month: 6, day: 4}, endPoint: {}}
        expect(setEndpointsRet(points, 2023, 6, 4)).toEqual(finishPoints)
    })
})

describe('setEndpointsRetTest oneYear differentMonth', ()=>{
    test('ndPoint-firstClick', ()=>{
        const points: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {}}
        const finishPoints: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {year: 2023, month: 7, day: 5}}
        expect(setEndpointsRet(points, 2023, 7, 5)).toEqual(finishPoints)
    })
    test('startPoint-secondClick', ()=>{
        const points: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {year: 2023, month: 7, day: 5}}
        const finishPoints: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {}}
        expect(setEndpointsRet(points, 2023, 7, 5)).toEqual(finishPoints)
    })
})

describe('setEndpointsRetTest differentYear', ()=>{
    test('oneMonth', ()=>{
        const points: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {}}
        const finishPoints: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {year: 2024, month: 6, day: 5}}
        expect(setEndpointsRet(points, 2024, 6, 5)).toEqual(finishPoints)
    })
    test('differentMonth', ()=>{
        const points: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {}}
        const finishPoints: Tpoints = {startPoint: {year: 2023, month: 6, day: 5}, endPoint: {year: 2024, month: 4, day: 5}}
        expect(setEndpointsRet(points, 2024, 4, 5)).toEqual(finishPoints)
    })
})