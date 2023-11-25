import { describe, expect, test } from '@jest/globals';
import getMonthKey from './getMonthKey';

describe('getMonthKey', () => {
    test('should return undefined if activeMonth is false', () => {
        const activeMonth = false;
        const monthList = [{ title: 'January', year: 2022 }];
        const monthListKey = ['key1'];
        expect(getMonthKey({ activeMonth, monthList, monthListKey })).toBeUndefined();
    });

    test('should return undefined if monthList is undefined', () => {
        const activeMonth = { title: 'January', year: 2022 };
        const monthList = undefined;
        const monthListKey = undefined;
        expect(getMonthKey({ activeMonth, monthList, monthListKey })).toBeUndefined();
    });

    test('should return the active month key if test exists in the monthList', () => {
        const activeMonth = { title: 'January', year: 2022 };
        const monthList = [
            { title: 'January', year: 2022 },
            { title: 'February', year: 2022 },
        ];
        const monthListKey = ['key1', 'key2'];
        expect(getMonthKey({ activeMonth, monthList, monthListKey })).toEqual('key1');
    });

    test('should return an empty string if the active month does not exist in the monthList', () => {
        const activeMonth = { title: 'March', year: 2022 };
        const monthList = [
            { title: 'January', year: 2022 },
            { title: 'February', year: 2022 },
        ];
        const monthListKey = ['key1', 'key2'];
        expect(getMonthKey({ activeMonth, monthList, monthListKey })).toEqual('');
    });
});
