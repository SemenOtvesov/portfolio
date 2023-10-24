import React from 'react'
import '@testing-library/jest-dom'
import { describe, test, expect } from '@jest/globals'
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import typeRentButtonClick from './typeRentButtonClick'

describe('typeRentButtonClick', ()=>{
    test('first', async ()=>{
        const dispatch = jest.fn()
        render(<div onClick={(e)=>typeRentButtonClick({dispatch, event: e})}>
            <div id='typeRentButton' data-testid="typeRentButton"></div>
            <div id='typeRentButton' data-testid="typeRentButton"></div>
            <div id='typeRentButton' data-testid="typeRentButton"></div>
        </div>)
        let rentButtons = screen.getAllByTestId('typeRentButton')

        await userEvent.click(rentButtons[0])

        rentButtons = screen.getAllByTestId('typeRentButton')
        for(const key in [...rentButtons]){
            if(+key === 0){expect(rentButtons[key].className).toMatch(/active/i)}else{
                expect(rentButtons[key].className).not.toMatch(/active/i)
            }
        }
    })

    test('second', async ()=>{
        const dispatch = jest.fn()
        render(<div onClick={(e)=>typeRentButtonClick({dispatch, event: e})}>
            <div id='typeRentButton' data-testid="typeRentButton"></div>
            <div id='typeRentButton' data-testid="typeRentButton"></div>
            <div id='typeRentButton' data-testid="typeRentButton"></div>
        </div>)
        let rentButtons = screen.getAllByTestId('typeRentButton')

        await userEvent.click(rentButtons[0])

        rentButtons = screen.getAllByTestId('typeRentButton')
        for(const key in [...rentButtons]){
            if(+key === 0){expect(rentButtons[key].className).toMatch(/active/i)}else{
                expect(rentButtons[key].className).not.toMatch(/active/i)
            }
        }
    })
})