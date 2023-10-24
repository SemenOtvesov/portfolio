import React from 'react'
import '@testing-library/jest-dom'
import { describe, test, expect } from '@jest/globals'
import {screen, render,} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setUserUidLocal } from '@js/mainFunctions/localState/userUidLocal'
import accountButtonClick from './accountButtonClick'

describe('accountButtonClick', ()=>{
    beforeEach(()=>{
        document.body.className = ''
    })

    test('firstClick userexists', async ()=>{
        setUserUidLocal('11')
        render(<>
            <div onClick={accountButtonClick} data-testid={'accountButton'} id='accountButton'></div>
            <div data-testid={'userButtonPopap'} id='userButtonPopap'></div>
        </>)

        const accountButton = screen.getByTestId('accountButton')
        const userButtonPopap = screen.getByTestId('userButtonPopap')

        await userEvent.click(accountButton)
        expect(screen.getByTestId('userButtonPopap').className).toBe('active')
    })

    test('secondClick userexists', async ()=>{
        setUserUidLocal('11')
        render(<>
            <div onClick={accountButtonClick}  data-testid={'accountButton'} id='accountButton'></div>
            <div data-testid={'userButtonPopap'} id='userButtonPopap'></div>
        </>)

        const accountButton = screen.getByTestId('accountButton')
        const userButtonPopap = screen.getByTestId('userButtonPopap')

        await userEvent.click(accountButton)
        await userEvent.click(accountButton)
        expect(screen.getByTestId('userButtonPopap').className).toBe('')
    })

    test('firstClick userDontExists', async ()=>{
        setUserUidLocal('')
        render(<>
            <div onClick={accountButtonClick}  data-testid={'accountButton'} id='accountButton'></div>
            <div data-testid={'loginPopap'} id='loginPopap'></div>
        </> )

        const accountButton = screen.getByTestId('accountButton')

        await userEvent.click(accountButton)
        expect(screen.getByTestId('loginPopap').className).toBe('active')
        expect(document.body.className).toBe('backBlurActive')
    })

    test('secondClick userDontExists', async ()=>{
        screen.debug()
        setUserUidLocal('')
        render(<>
            <div onClick={accountButtonClick}  data-testid={'accountButton'} id='accountButton'></div>
            <div data-testid={'loginPopap'} id='loginPopap'></div>
        </> )

        const accountButton = screen.getByTestId('accountButton')

        await userEvent.click(accountButton)
        await userEvent.click(accountButton)
        expect(screen.getByTestId('loginPopap').className).toBe('')
        expect(document.body.className).toBe('')
    })

    afterEach(()=>{
        setUserUidLocal('')
    })
})