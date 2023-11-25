export type TuserState = {
    userUid: string;
    errRequest: boolean;
    modified: boolean;
    user?: Tuser;
    activeMonth?: Tmonth | false;
};
export interface Tuser extends TuserInfo {
    monthList?: Array<Tmonth>;
    monthListKey?: Array<string>;
}
export type TuserInfo = {
    name: string;
    mail: string;
    phone: string;
    pass: string;
};
export type Tmonth = {
    title: string;
    year: number;
    incomeList?: Array<TuserInfoCommonListItem>;
    incomeListKeys?: string[];
    expenseList?: Array<TuserInfoCommonListItem>;
    expenseListKeys?: string[];
    purposeList?: Array<TuserInfoCommonListItem>;
    purposeListKeys?: string[];
};
export type TuserInfoCommonListItem = {
    title: string;
    prise: number;
    id: number;
    completed?: boolean | undefined;
};
export type TuserInfoCommonListItemNames = 'income' | 'expense' | 'purpose';
