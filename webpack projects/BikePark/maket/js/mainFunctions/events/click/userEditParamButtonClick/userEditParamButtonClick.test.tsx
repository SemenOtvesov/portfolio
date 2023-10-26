import React from 'react'
import '@testing-library/jest-dom'
import { describe, test, expect } from '@jest/globals'
import {screen, render,} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setUserUidLocal } from '@js/mainFunctions/localState/userUidLocal'
import userEditParamButtonClick from './userEditParamButtonClick'

describe('userEditParamButtonClick', ()=>{

    beforeEach(()=>{
        document.body.className = ''
    })

    test('first', async()=>{
        render(<>
            <div onClick={userEditParamButtonClick} data-testId="button" id='userEditParamButton'></div>
            <div data-testid="userInfo" id='userInfo'>
                <input data-testId="input-1" type="text" disabled className='disabled'/>
                <input data-testId="input-2" type="text" disabled className='disabled'/>
            </div>
        </>)

        const button = screen.getByTestId('button')
        await userEvent.click(button)
        expect(screen.getByTestId('userInfo').className).toBe('edit')
        expect(screen.getByTestId('input-1').className).toBe('')
        expect(screen.getByTestId('input-2').className).toBe('')
    })
    test('db', async()=>{
        render(<>
            <div onClick={userEditParamButtonClick} data-testId="button" id='userEditParamButton'></div>
            <div data-testid="userInfo" id='userInfo'>
                <input data-testId="input-1" type="text" disabled className='disabled'/>
                <input data-testId="input-2" type="text" disabled className='disabled'/>
            </div>
        </>)

        const button = screen.getByTestId('button')
        await userEvent.click(button)
        await userEvent.click(button)
        expect(screen.getByTestId('userInfo').className).toBe('')
        expect(screen.getByTestId('input-1').className).toBe('disabled')
        expect(screen.getByTestId('input-2').className).toBe('disabled')
    })

    afterEach(()=>{
        setUserUidLocal('')
    })
})