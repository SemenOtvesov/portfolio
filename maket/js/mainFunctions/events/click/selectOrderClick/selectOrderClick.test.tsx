import React from 'react'
import '@testing-library/jest-dom'
import { describe, test, expect } from '@jest/globals'
import {screen, render,} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setUserUidLocal } from '@js/mainFunctions/localState/userUidLocal'
import selectOrderClick from './selectOrderClick'

describe('selectOrderClick',()=>{
    beforeEach(()=>{
        document.body.className = ''
    })

    test('firstClick', async()=>{
        render(<>
            <div onClick={selectOrderClick} data-testid='button' id="selectOrder" data-order-id="activeOrder"></div>
            <div data-testid='orderBox' id="activeOrder" data-order-box></div>
        </>)

        const button = screen.getByTestId('button')

        await userEvent.click(button)
        expect(screen.getByTestId('button').className).toBe('active')
        expect(screen.getByTestId('orderBox').className).toBe('visable')
    })

    test('dbClick', async()=>{
        render(<>
            <div onClick={selectOrderClick} data-testid='button' id="selectOrder" data-order-id="activeOrder"></div>
            <div data-testid='orderBox' id="activeOrder" data-order-box></div>
        </>)

        const button = screen.getByTestId('button')

        await userEvent.click(button)
        await userEvent.click(button)
        expect(screen.getByTestId('button').className).toBe('active')
        expect(screen.getByTestId('orderBox').className).toBe('visable')
    })

    afterEach(()=>{
        setUserUidLocal('')
    })
})