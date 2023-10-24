import React from "react";
import { describe, expect, test } from "@jest/globals";
import {screen, render, fireEvent} from '@testing-library/react'
import loginPopapInput from './loginPopapInput'


describe('loginPopapInputClick', ()=>{
    test('inputMail trufy', ()=>{
        const checkValue = 'aa.aa@mail.ru'

        render(
            <form>
                <div data-testid='inputParent'>
                    <input onInput={loginPopapInput} type="text" name="userMail" data-testid='inputUserMail'/>
                </div>
                <button data-testid='button'></button>
            </form>
        )
        const inputUserMail = screen.getByTestId('inputUserMail')

        fireEvent.input(screen.getByTestId('inputUserMail'), {
            target: {value: checkValue}
        })

        const inputParent = screen.getByTestId('inputParent')
        expect(inputParent.className).toBe('valid')
    })

    test('inputMail falsy', ()=>{
        const checkValue = 'aa.aa'

        render(
            <form>
                <div data-testid='inputParent'>
                    <input onInput={loginPopapInput} type="text" name="userMail" data-testid='inputUserMail'/>
                    <div id="errorTextPopap" data-testid='errorTextPopap'></div>
                </div>
                <button data-testid='button'></button>
            </form>
        )
        const inputUserMail = screen.getByTestId('inputUserMail')

        fireEvent.input(screen.getByTestId('inputUserMail'), {
            target: {value: checkValue}
        })

        const inputParent = screen.getByTestId('inputParent')
        const errorTextPopap = screen.getByTestId('errorTextPopap')
        expect(inputParent.className).toBe('notValid')
        expect(errorTextPopap.innerHTML).toBe('Некорректный E-mail')
    })

    //====================================

    test('userPass trufy', ()=>{
        const checkValue = 'Aaaaaaaaa1'

        render(
            <form>
                <div data-testid='inputParent'>
                    <input onInput={loginPopapInput} type="text" name="userPass" data-testid='inputUserPass'/>
                </div>
                <button data-testid='button'></button>
            </form>
        )

        const inputUserPass = screen.getByTestId('inputUserPass')
        fireEvent.input(inputUserPass, {
            target: {value: checkValue}
        })

        const inputParent = screen.getByTestId('inputParent')
        expect(inputParent.className).toBe('valid')
    })

    test('userPass falsy content', ()=>{
        const checkValue = 'Aaaaaaaaaa'

        render(
            <form>
                <div data-testid='inputParent'>
                    <input onInput={loginPopapInput} type="text" name="userPass" data-testid='inputUserPass'/>
                    <div id="errorTextPopap" data-testid='errorTextPopap'></div>
                </div>
                <button data-testid='button'></button>
            </form>
        )

        const inputUserPass = screen.getByTestId('inputUserPass')
        fireEvent.input(inputUserPass, {
            target: {value: checkValue}
        })

        const inputParent = screen.getByTestId('inputParent')
        const errorTextPopap = screen.getByTestId('errorTextPopap')
        expect(inputParent.className).toBe('notValid')
        expect(errorTextPopap.innerHTML).toBe('Пароль должен содержать хотя бы одну строчную букву, одну прописную букву и одну цифру')
    })
    
    test('userPass falsy >10 simbol', ()=>{
        const checkValue = 'Aaaaaaaaa'

        render(
            <form>
                <div data-testid='inputParent'>
                    <input onInput={loginPopapInput} type="text" name="userPass" data-testid='inputUserPass'/>
                    <div id="errorTextPopap" data-testid='errorTextPopap'></div>
                </div>
                <button data-testid='button'></button>
            </form>
        )

        const inputUserPass = screen.getByTestId('inputUserPass')
        fireEvent.input(inputUserPass, {
            target: {value: checkValue}
        })

        const inputParent = screen.getByTestId('inputParent')
        const errorTextPopap = screen.getByTestId('errorTextPopap')
        expect(inputParent.className).toBe('notValid')
        expect(errorTextPopap.innerHTML).toBe('Минимум 10 символов')
    })

    //====================================

    test('userName trufy', ()=>{
        const checkValue = 'Бббббббббб'

        render(
            <form>
                <div data-testid='inputParent'>
                    <input onInput={loginPopapInput} type="text" name="userName" data-testid='inputUserName'/>
                </div>
                <button data-testid='button'></button>
            </form>
        )

        const inputUserName = screen.getByTestId('inputUserName')
        fireEvent.input(inputUserName, {
            target: {value: checkValue}
        })

        const inputParent = screen.getByTestId('inputParent')
        expect(inputParent.className).toBe('valid')
    })

    test('userName falsy lang', ()=>{
        const checkValue = 'Gggggg'

        render(
            <form>
                <div data-testid='inputParent'>
                    <input onInput={loginPopapInput} type="text" name="userName" data-testid='inputUserName'/>
                    <div id="errorTextPopap" data-testid='errorTextPopap'></div>
                </div>
                <button data-testid='button'></button>
            </form>
        )

        const inputUserName = screen.getByTestId('inputUserName')
        fireEvent.input(inputUserName, {
            target: {value: checkValue}
        })

        const inputParent = screen.getByTestId('inputParent')
        const errorTextPopap = screen.getByTestId('errorTextPopap')
        expect(inputParent.className).toBe('notValid')
        expect(errorTextPopap.innerHTML).toBe('Пожалуйста используйте русский язык')
    })

    //====================================

    test('userPhone trufy', ()=>{
        const checkValue = '+79999999999'

        render(
            <form>
                <div data-testid='inputParent'>
                    <input onInput={loginPopapInput} type="text" name="userPhone" data-testid='inputUserPhone'/>
                </div>
                <button data-testid='button'></button>
            </form>
        )

        const inputUserPhone = screen.getByTestId('inputUserPhone')
        fireEvent.input(inputUserPhone, {
            target: {value: checkValue}
        })

        const inputParent = screen.getByTestId('inputParent')
        expect(inputParent.className).toBe('valid')
    })

    test('userPhone falsy', ()=>{
        const checkValue = '9999999999'

        render(
            <form>
                <div data-testid='inputParent'>
                    <input onInput={loginPopapInput} type="text" name="userPhone" data-testid='inputUserPhone'/>
                    <div id="errorTextPopap" data-testid='errorTextPopap'></div>
                </div>
                <button data-testid='button'></button>
            </form>
        )

        const inputUserPhone = screen.getByTestId('inputUserPhone')
        fireEvent.input(inputUserPhone, {
            target: {value: checkValue}
        })

        const inputParent = screen.getByTestId('inputParent')
        const errorTextPopap = screen.getByTestId('errorTextPopap')
        expect(inputParent.className).toBe('notValid')
        expect(errorTextPopap.innerHTML).toBe('Пожалуйста используйте номер Российского оператора')
    })
})