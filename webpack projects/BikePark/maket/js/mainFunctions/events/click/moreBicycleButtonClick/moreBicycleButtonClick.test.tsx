import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import onClick from './moreBicycleButtonClick';

describe('onClick', () => {
    test('should toggle the "active" class on the button and the corresponding element', () => {
        render(
            <div data-item-list>
                <button id="moreBicycleButton" onClick={onClick} data-testid="moreBicycleButton" />
                <div id="moreBicycleEl" data-testid="moreBicycleEl"/>
            </div>
        );

        const buttonElement = screen.getByTestId('moreBicycleButton');
        const moreElement = screen.getByTestId('moreBicycleEl');

        fireEvent(buttonElement, new MouseEvent('click', {bubbles: true}))

        expect(screen.getByTestId('moreBicycleButton').classList.contains('active')).toBe(true);
        expect(screen.getByTestId('moreBicycleEl').classList.contains('active')).toBe(true);

        fireEvent(buttonElement, new MouseEvent('click', {bubbles: true}))

        expect(screen.getByTestId('moreBicycleButton').classList.contains('active')).toBe(false);
        expect(screen.getByTestId('moreBicycleEl').classList.contains('active')).toBe(false);
    });
});