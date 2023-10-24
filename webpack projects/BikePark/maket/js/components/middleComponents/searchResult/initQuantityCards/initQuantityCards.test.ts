import initQuantityCards from "./initQuantityCards";
import { describe, test, expect } from "@jest/globals";

describe('initQuantityCardsTest', ()=>{
    test('PC', ()=>{
        expect(initQuantityCards(1400)).toBe(2)
    })
    test('TopBoundaryValue', ()=>{
        expect(initQuantityCards(426)).toBe(2)
    })
    test('BottomBoundaryValue', ()=>{
        expect(initQuantityCards(425)).toBe(1)
    })
    test('Mobile', ()=>{
        expect(initQuantityCards(320)).toBe(1)
    })
})