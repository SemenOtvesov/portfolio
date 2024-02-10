export type TuserQuetion = {
    name: string;
    phone: string;
    country: 'japan' | 'korea';
    connection: 'WhatsApp' | 'call';
    info: string;
};
export type TuserQuetionCall = {
    name: string;
    phone: string;
    city: string;
    connection: 'WhatsApp' | 'call';
    info: never;
};
export type TconcatQuestion = TuserQuetion | TuserQuetionCall;
export type Tnames = 'name' | 'phone' | 'country' | 'connection' | 'info' | 'city';
