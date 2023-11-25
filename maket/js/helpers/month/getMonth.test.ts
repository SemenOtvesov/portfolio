import { describe, expect, test } from '@jest/globals';
import getMonth from './getMonth';

describe('getMonth', () => {
    test('should return undefined if activeMonth is false', () => {
        const activeMonth = false;
        const monthList = [{ title: 'January', year: 2022 }];
        expect(getMonth({ activeMonth, monthList })).toBeUndefined();
    });

    test('should return undefined if monthList is undefined', () => {
        const activeMonth = { title: 'January', year: 2022 };
        const monthList = undefined;
        expect(getMonth({ activeMonth, monthList })).toBeUndefined();
    });

    test('should return the active month if it exists in the monthList', () => {
        const activeMonth = { title: 'January', year: 2022 };
        const monthList = [
            { title: 'January', year: 2022 },
            { title: 'February', year: 2022 },
        ];
        expect(getMonth({ activeMonth, monthList })).toEqual({
            title: 'January',
            year: 2022,
        });
    });

    test('should return undefined if the active month does not exist in the monthList', () => {
        const activeMonth = { title: 'March', year: 2022 };
        const monthList = [
            { title: 'January', year: 2022 },
            { title: 'February', year: 2022 },
        ];
        expect(getMonth({ activeMonth, monthList })).toBeUndefined();
    });
});
