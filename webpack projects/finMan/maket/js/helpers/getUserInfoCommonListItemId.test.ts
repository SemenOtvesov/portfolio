import { describe, expect, test } from '@jest/globals';
import getUserInfoCommonListItemId from './getUserInfoCommonListItemId';
import { Tmonth } from '@js/types/state/user/userState';

describe('getUserInfoCommonListItemId', () => {
    const month: Tmonth = {
        title: 'a',
        year: 2021,
        incomeList: [
            { title: '', prise: 10, id: 1 },
            { title: '', prise: 10, id: 2 },
            { title: '', prise: 10, id: 3 },
        ],
        incomeListKeys: ['key1', 'key2', 'key3'],
        expenseList: [
            { title: '', prise: 10, id: 4 },
            { title: '', prise: 10, id: 5 },
            { title: '', prise: 10, id: 6 },
        ],
        expenseListKeys: ['key4', 'key5', 'key6'],
        purposeList: [
            { title: '', prise: 10, id: 7 },
            { title: '', prise: 10, id: 8 },
            { title: '', prise: 10, id: 9 },
        ],
        purposeListKeys: ['key7', 'key8', 'key9'],
    };

    test('should return the correct incomeListKey for the given getId', () => {
        expect(getUserInfoCommonListItemId('income', month, 2)).toBe('key2');
    });

    test('should return the correct expenseListKey for the given getId', () => {
        expect(getUserInfoCommonListItemId('expense', month, 5)).toBe('key5');
    });

    test('should return the correct purposeListKey for the given getId', () => {
        expect(getUserInfoCommonListItemId('purpose', month, 8)).toBe('key8');
    });
});
