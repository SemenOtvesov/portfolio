import React from 'react'
import '@testing-library/jest-dom'
import { describe, test, expect } from '@jest/globals'
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { setScrollWidthLocal } from '@mainFunctions/localState/scrollWidth'
import { burgerClick } from './burgerClick'

describe('burgerClick', ()=>{

    test('tablet', async ()=>{
        render(<>
            <div onClick={burgerClick} data-testid='burger' id='burger'></div>
            <nav data-testid='navigation'></nav>
        </>)
        setScrollWidthLocal(768)
        
        const burger = screen.getByTestId('burger')
        let navigation = screen.getByTestId('navigation')

        expect(burger).toBeInTheDocument()
        expect(navigation).toBeInTheDocument()

        await userEvent.click(burger)
        navigation = screen.getByTestId('navigation')
        expect(navigation).toHaveClass('active')
        expect(navigation).toHaveStyle({height: '100%'})
        expect(document.body).toHaveClass('backBlurActive')

        await userEvent.click(burger)
        navigation = screen.getByTestId('navigation')
        expect(navigation).not.toHaveClass('active')
        expect(navigation).toHaveStyle({height: '100%'})
        expect(document.body).not.toHaveClass('backBlurActive')
    })

    test('phone', async ()=>{
        render(<>
            <div onClick={burgerClick} data-testid='burger' id='burger'></div>
            <nav data-testid='navigation'></nav>
            <div id='headerContainer' data-testid='headerContainer'></div>
        </>)
        setScrollWidthLocal(425)
        
        const burger = screen.getByTestId('burger')
        const headerContainer = screen.getByTestId('headerContainer')
        let navigation = screen.getByTestId('navigation')

        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        
        expect(burger).toBeInTheDocument()
        expect(navigation).toBeInTheDocument()
        expect(headerContainer).toBeInTheDocument()
        
        await userEvent.click(burger)
        navigation = screen.getByTestId('navigation')
        expect(navigation).toHaveClass('active')
        expect(navigation).toHaveStyle({height: `${scrollHeight - headerContainer.scrollHeight}px`})
        expect(document.body).toHaveClass('backBlurActive')

        await userEvent.click(burger)
        navigation = screen.getByTestId('navigation')
        expect(navigation).not.toHaveClass('active')
        expect(navigation).toHaveStyle({height: `${scrollHeight - headerContainer.scrollHeight}px`})
        expect(document.body).not.toHaveClass('backBlurActive')
    })
})