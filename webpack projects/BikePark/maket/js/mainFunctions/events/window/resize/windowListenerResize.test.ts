import { beforeEach } from "node:test";
import { windowListenerResize } from "./windowListenerResize";
import { test, describe, expect, jest } from "@jest/globals";

const fn = jest.fn()

describe('windowListenerResizeTest',()=>{
    test("onceCall", ()=>{
        windowListenerResize(fn)
        expect(fn.mock.calls.length).toBe(1)
    })
    test("correctValue", ()=>{
        const checkValue = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
        )
        expect(fn.mock.lastCall).toEqual([checkValue])
    })
})