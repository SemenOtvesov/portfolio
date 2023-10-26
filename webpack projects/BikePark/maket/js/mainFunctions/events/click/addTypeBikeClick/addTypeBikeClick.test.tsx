import { fireEvent, render, screen } from '@testing-library/react';
import onClick from './addTypeBikeClick';
import React  from 'react'
import { setActiveBike } from '@js/state/rentState/rentRouter';

jest.mock('@js/state/rentState/rentRouter', () => ({
  setActiveBike: jest.fn(),
}));

describe('onClick', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should call setActiveBike with the correct typeBike value', () => {
        const dispatch = jest.fn();
        render(
            <button 
                id='addTypeBike'
                data-testid='button' 
                data-type-bike='alum' 
                onClick={(e)=>onClick({dispatch, event:e})}
            />
        )

        fireEvent(screen.getByTestId('button'), new MouseEvent('click', {bubbles: true}))
        expect(dispatch).toHaveBeenCalledTimes(1)
        expect(dispatch).toBeCalledWith(setActiveBike('alum'))
    });

    test('should not call setActiveBike if the button does not have a valid typeBike value', () => {
        const dispatch = jest.fn();
        render(
            <button 
                id='addTypeBike'
                data-testid='button' 
                data-type-bike='d' 
                onClick={(e)=>onClick({dispatch, event:e})}
            />
        )

        fireEvent(screen.getByTestId('button'), new MouseEvent('click', {bubbles: true}))
        expect(dispatch).toHaveBeenCalledTimes(0)
    });
});
