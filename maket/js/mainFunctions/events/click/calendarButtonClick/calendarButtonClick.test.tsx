import React from 'react'
import '@testing-library/jest-dom'
import { describe, test, expect } from '@jest/globals'
import {screen, render,} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import calendarButtonClick from './calendarButtonClick'
import { setScrollWidthLocal } from '@js/mainFunctions/localState/scrollWidth'

describe('calendarButtonClick', ()=>{

    test('toggleCalendarButton PC', async ()=>{
        setScrollWidthLocal(1440)

        render(<>
            <div data-testid='calendar' id='calendar'></div>
            <div onClick={calendarButtonClick} data-testid="calendarButton" id='calendarButton'></div>
            <div onClick={calendarButtonClick} data-testid="calendarButton" id='calendarButton'></div>
        </>)

        let calendarButtons = screen.getAllByTestId('calendarButton')

        await userEvent.click(calendarButtons[0])

        calendarButtons = screen.getAllByTestId('calendarButton')
        calendarButtons.forEach(button=>{
            expect(button.className).toMatch(/active/i)
        })
        expect(screen.getByTestId('calendar').className).toMatch(/active/i)
        expect(document.body.className).not.toMatch(/backBlurActive/i)
    })

    test('toggleCalendarButton Mobile', async ()=>{
        setScrollWidthLocal(768)

        render(<>
            <div data-testid='calendar' id='calendar'></div>
            <div onClick={calendarButtonClick} data-testid="calendarButton" id='calendarButton'></div>
            <div onClick={calendarButtonClick} data-testid="calendarButton" id='calendarButton'></div>
        </>)

        let calendarButtons = screen.getAllByTestId('calendarButton')

        await userEvent.click(calendarButtons[0])

        calendarButtons = screen.getAllByTestId('calendarButton')
        calendarButtons.forEach(button=>{
            expect(button.className).toMatch(/active/i)
        })
        expect(screen.getByTestId('calendar').className).toMatch(/active/i)
        expect(document.body.className).toMatch(/backBlurActive/i)
    })
})
