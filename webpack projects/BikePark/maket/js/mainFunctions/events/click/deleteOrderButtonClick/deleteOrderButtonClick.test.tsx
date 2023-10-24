import React from 'react'
import '@testing-library/jest-dom'
import { describe, test, expect } from '@jest/globals'
import {screen, render,} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setUserUidLocal } from '@js/mainFunctions/localState/userUidLocal'
import deleteOrderButtonClick from './deleteOrderButtonClick'
import { mock } from 'node:test'

describe('deleteOrderButtonClick', ()=>{

    beforeEach(()=>{
        document.body.className = ''
    })

    test('first toggle', async()=>{
        const dispatch = mock.fn()
        render(<>
            <button onClick={()=>deleteOrderButtonClick({dispatch, type: 'toggle'})} data-testid='button'></button>
            <div data-testid='popap' id='deleteOrderPopap'></div>
        </>)

        const button = screen.getByTestId('button')
        await userEvent.click(button)
        expect(screen.getByTestId('popap').className).toBe('active')
        expect(document.body.className).toBe('backBlurActive')
    })

    test('db toggle', async()=>{
        const dispatch = mock.fn()
        render(<>
            <button onClick={()=>deleteOrderButtonClick({dispatch, type: 'toggle'})} data-testid='button'></button>
            <div data-testid='popap' id='deleteOrderPopap'></div>
        </>)

        const button = screen.getByTestId('button')
        await userEvent.click(button)
        await userEvent.click(button)
        expect(screen.getByTestId('popap').className).toBe('')
        expect(document.body.className).toBe('')
    })

    afterEach(()=>{
        setUserUidLocal('')
    })
})