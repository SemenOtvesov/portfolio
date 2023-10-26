import { setTimeStart } from '@js/state/calendarsState/calendarsRouter';
import calendarListenerChange from './calendarListenerChange';

// Mock dispatch function
const dispatch = jest.fn();

describe('handleStartTimeChange', () => {
    beforeEach(() => {
        // Clear the mock calls for each test
        dispatch.mockClear();
    });

    test('should dispatch setTimeStart action with valid hour and minute values', () => {
        const event = {
        target: {
            closest: jest.fn().mockReturnValue({
            value: '12:34',
            }),
        },
        };

        calendarListenerChange(dispatch, event);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(setTimeStart('12:34'));
    });

    test('should dispatch setTimeStart action with valid hour value only', () => {
        const event = {
        target: {
            closest: jest.fn().mockReturnValue({
            value: '12',
            }),
        },
        };

        calendarListenerChange(dispatch, event);

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(setTimeStart('12'));
    });
});