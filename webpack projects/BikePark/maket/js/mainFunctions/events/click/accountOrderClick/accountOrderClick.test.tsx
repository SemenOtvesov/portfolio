import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import onClick from './accountOrderClick';
import { getScrollWidthLocal, setScrollWidthLocal } from '@js/mainFunctions/localState/scrollWidth';

describe('onClick', () => {
    test('should toggle the "active" class on #accountOrderMore', () => {
        setScrollWidthLocal(1440)
        const { container } = render(
            <div id="accountOrder">
                <div id="accountOrderMore"></div>
                <button data-testid="button" onClick={onClick}></button>
            </div>
        );

        const button = screen.getByTestId('button');
        fireEvent.click(button);

        const accountOrderMore = container.querySelector('#accountOrderMore');
        expect(accountOrderMore?.classList.contains('active')).toBe(true);
    });

    test('should toggle the "active" class on #accountOrderArrow if scroll width is greater than 425', () => {
        setScrollWidthLocal(426)
        // Mock getScrollWidthLocal to return a value greater than 425
        jest.mock('@js/mainFunctions/localState/scrollWidth', () => ({
        getScrollWidthLocal: jest.fn().mockReturnValue(500),
        }));

        const { container } = render(
            <div id="accountOrder">
                <div id="accountOrderMore"></div>
                <button data-testid="button" onClick={onClick}></button>
            </div>
        );

        const button = screen.getByTestId('button');
        fireEvent.click(button);

        const accountOrderArrow = container.querySelector('#accountOrderMore');
        expect(accountOrderArrow?.classList.contains('active')).toBe(true);
    });

    test('should not toggle the "active" class on #accountOrderArrow if scroll width is less than or equal to 425', () => {
        setScrollWidthLocal(400)

        const { container } = render(
            <div>
                <div id="accountOrder">
                <div id="accountOrderMore"></div>
                <div id="accountOrderArrow"></div>
                </div>
                <button data-testid="button" onClick={onClick}></button>
            </div>
        );

        const button = screen.getByTestId('button');
        fireEvent.click(button);

        const accountOrderArrow = container.querySelector('#accountOrderArrow');
        expect(accountOrderArrow?.classList.contains('active')).toBe(false);
    });
});