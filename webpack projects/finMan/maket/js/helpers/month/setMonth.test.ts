import { describe, expect, test } from '@jest/globals';
import setMonth from './setMonth';

describe('setMonth', () => {
    test('should return undefined if activeMonth is false', () => {
        const activeMonth = false;
        const monthList = [{ title: 'January', year: 2022 }];
        expect(setMonth({ activeMonth, monthList })).toBeUndefined();
    });

    test('should return undefined if monthList is undefined', () => {
        const activeMonth = { title: 'January', year: 2022 };
        const monthList = undefined;
        expect(setMonth({ activeMonth, monthList })).toBeUndefined();
    });

    test('should set activeMonth to the found month in the monthList', () => {
        const activeMonth = { title: 'January', year: 2022 };
        const monthList = [
            { title: 'January', year: 2022 },
            { title: 'February', year: 2022 },
        ];
        setMonth({ activeMonth, monthList });
        expect(activeMonth).toEqual({ title: 'January', year: 2022 });
    });

    test('should not change activeMonth if test does not exist in the monthList', () => {
        const activeMonth = { title: 'March', year: 2022 };
        const monthList = [
            { title: 'January', year: 2022 },
            { title: 'February', year: 2022 },
        ];
        setMonth({ activeMonth, monthList });
        expect(activeMonth).toEqual({ title: 'March', year: 2022 });
    });
});
