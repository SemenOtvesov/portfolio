import calendarNumbersClick from './calendarNumbersClick';

describe('calendarNumbersClick function', () => {
  it('should dispatch the correct action with the provided endPoints', () => {
    // Mocking dependencies and initializing variables
    const dispatch = jest.fn();
    const setEndPoints: any = jest.fn();
    const endPoints = {
        startPoint: {
            year: 2023,
            month: 9,
            day: 24
        },
        endPoint: {
            year: 2023,
            month: 9,
            day: 25
        }
    }
    const endPointsRet = {
        startPoint: {
            year: 2023,
            month: 9,
            day: 3
        },
        endPoint: {
            year: 2023,
            month: 9,
            day: 4
        }
    }
    const event = { target: {
      closest: jest.fn().mockReturnValueOnce(document.createElement('div'))
    }} as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>;

    // Call the function
    calendarNumbersClick({ dispatch, endPoints, setEndPoints, event });

    // Assertions
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(setEndPoints).toHaveBeenCalledTimes(1);
    expect(setEndPoints).toHaveBeenCalledWith(endPointsRet);
  });

  // Add more test cases
});