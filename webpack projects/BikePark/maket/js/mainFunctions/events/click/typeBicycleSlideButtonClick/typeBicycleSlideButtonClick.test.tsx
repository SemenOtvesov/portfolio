import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import typeBicycleSlideButtonClick from './typeBicycleSlideButtonClick';

describe('typeBicycleSlideButtonClick', () => {
  it('should toggle the "active" class on the button and scroll the list', () => {
    render(
        <>
            <div id="typeBicycleSlideButton" onClick={typeBicycleSlideButtonClick} data-testid="typeBicycleSlideButton" />
            <div data-testid='typeBicycleList' id="typeBicycleList">
                <div data-testid='1' data-item-list="" />
                <div data-testid='2' data-item-list="" />
                <div data-testid='3' data-item-list="" />
            </div>
        </>
    );

    const buttonElement = screen.getByTestId('typeBicycleSlideButton');
    const listElement = screen.getByTestId('typeBicycleList');

    fireEvent(buttonElement, new MouseEvent('click', {bubbles: true}))

    expect(listElement.scrollLeft).toBe(screen.getByTestId('1').offsetWidth + (listElement.offsetWidth - (4 * screen.getByTestId('1').offsetWidth)) / 3);
  });
});