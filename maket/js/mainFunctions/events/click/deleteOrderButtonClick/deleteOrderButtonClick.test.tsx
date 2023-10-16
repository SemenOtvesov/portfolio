import React from 'react'
import '@testing-library/jest-dom'
import { describe, test, expect } from '@jest/globals'
import {screen, render,} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setUserUidLocal } from '@js/mainFunctions/localState/userUidLocal'
import deleteOrderButtonClick from './deleteOrderButtonClick'

describe('deleteOrderButtonClick', ()=>{

    beforeEach(()=>{
        document.body.className = ''
    })

    test('first toggle', async()=>{
        render(<>
            <button onClick={deleteOrderButtonClick} data-testid='button' data-button-type='toggle' id='deleteOrderButton'></button>
            <div data-testid='popap' id='deleteOrderPopap'></div>
        </>)

        const button = screen.getByTestId('button')
        await userEvent.click(button)
        expect(screen.getByTestId('popap').className).toBe('active')
        expect(document.body.className).toBe('backBlurActive')
    })

    test('db toggle', async()=>{
        render(<>
            <button onClick={deleteOrderButtonClick} data-testid='button' data-button-type='toggle' id='deleteOrderButton'></button>
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