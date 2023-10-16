import { describe, test, expect } from "@jest/globals";
import { getScrollWidthLocal, setScrollWidthLocal } from "./scrollWidth";

describe('scrollWidthTest', ()=>{
    test('getScrollWidthTest', ()=>{
        setScrollWidthLocal(10)
        expect(getScrollWidthLocal()).toBe(10)
    })
    test('setScrollWidthTest', ()=>{
        expect(setScrollWidthLocal(10)).toBe(10)
    })
})