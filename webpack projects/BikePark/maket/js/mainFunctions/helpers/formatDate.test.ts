import getDateParam from './formatDate';

describe('getDateParam function', () => {
  it('should return the correct timestamp for a valid string input', () => {
    const initDate = '20.05.2022';
    const expectedTimestamp = new Date(2022, 5, 20).getTime();
    const actual = getDateParam({ initDate });
    expect(actual).toEqual(expectedTimestamp);
  });

  it('should return the correct timestamp for a valid TonePoint input', () => {
    const initDate = { year: 2022, month: 5, day: 20 };
    const expectedTimestamp = new Date(2022, 5, 20).getTime();
    const actual = getDateParam({ initDate });
    expect(actual).toEqual(expectedTimestamp);
  });

  it('should return undefined for invalid input', () => {
    const initDate = 'invalidDate';
    const actual = getDateParam({ initDate });
    expect(actual).toBeUndefined();
  });
});