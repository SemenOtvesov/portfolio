import React from 'react'
import '@testing-library/jest-dom'
import { describe, test, expect } from '@jest/globals'
import {screen, render,} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setUserUidLocal } from '@js/mainFunctions/localState/userUidLocal'
import loginTypePopapClick from './loginTypePopapClick'

describe('loginTypePopapClick', ()=>{
    beforeEach(()=>{
        document.body.className = ''
    })

    test('fitstClick login', async()=>{
        render(<>
            <div onClick={loginTypePopapClick} data-testid="button" id='loginTypePopap' data-login-type="login"></div>
            <div data-testid='front' id='loginPopap-front'></div>
            <div data-testid='back' id='loginPopap-back'></div>
        </>)

        const button = screen.getByTestId('button')
        await userEvent.click(button)
        expect(screen.getByTestId('button').className).toBe('active')
        expect(screen.getByTestId('front').className).toBe('active')
    }) 

    test('dbClick login', async()=>{
        render(<>
            <div onClick={loginTypePopapClick} data-testid="button" id='loginTypePopap' data-login-type="login"></div>
            <div data-testid='front' id='loginPopap-front'></div>
            <div data-testid='back' id='loginPopap-back'></div>
        </>)

        const button = screen.getByTestId('button')
        await userEvent.click(button)
        await userEvent.click(button)
        expect(screen.getByTestId('button').className).toBe('active')
        expect(screen.getByTestId('front').className).toBe('active')
    }) 

    test('fitstClick reg',  async()=>{
        render(<>
            <div onClick={loginTypePopapClick} data-testid="button" id='loginTypePopap' data-login-type="reg"></div>
            <div data-testid='front' id='loginPopap-front'></div>
            <div data-testid='back' id='loginPopap-back'></div>
        </>)

        const button = screen.getByTestId('button')
        await userEvent.click(button)
        expect(screen.getByTestId('button').className).toBe('active')
        expect(screen.getByTestId('back').className).toBe('active')
    })  

    test('dbClick reg',  async()=>{
        render(<>
            <div onClick={loginTypePopapClick} data-testid="button" id='loginTypePopap' data-login-type="reg"></div>
            <div data-testid='front' id='loginPopap-front'></div>
            <div data-testid='back' id='loginPopap-back'></div>
        </>)

        const button = screen.getByTestId('button')
        await userEvent.click(button)
        expect(screen.getByTestId('button').className).toBe('active')
        expect(screen.getByTestId('back').className).toBe('active')
    })  

    afterEach(()=>{
        setUserUidLocal('')
    })
})