import { describe, test, expect } from "@jest/globals";
import { getUserUidLocal, setUserUidLocal } from "./userUidLocal";

describe('scrollWidthTest', ()=>{
    test('getScrollWidthTest', ()=>{
        setUserUidLocal('43234')
        expect(getUserUidLocal()).toBe('43234')
    })
    test('setScrollWidthTest', ()=>{
        expect(setUserUidLocal('43234')).toBe('43234')
    })
})