import calendarLastMonthClick from './calendarLastMonthClick';

describe('calendarLastMonthClick function', () => {
  it('should decrement the current month by 1', () => {
    const setCurrent = jest.fn();
    const current = { currYear: 2022, currMonth: 5 };
    calendarLastMonthClick(setCurrent);
    expect(setCurrent).toHaveBeenCalledWith(()=>({currYear: 2022, currMonth: 4 }));
  });

  it('should decrement the current year by 1 if the current month is 0', () => {
    const setCurrent = jest.fn();
    const current = { currYear: 2022, currMonth: 0 };
    calendarLastMonthClick(setCurrent);
    expect(setCurrent).toHaveBeenCalledWith(()=>({ currYear: 2021, currMonth: 11 }));
  });
});