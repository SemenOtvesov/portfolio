export default [
    {
        title: 'Услуги',
        subItems: [
            { title: 'АВТО ИЗ ЯПОНИИ', path: 'carsFromJapan' },
            { title: 'АВТО ИЗ КОРЕИ', path: 'carsFromKorea' },
            { title: 'СТАТИСТИКА ЯПОНИЯ', path: 'statisticsJapan' },
            { title: 'СТАТИСТИКА КОРЕЯ', path: 'statisticsKorea' },
        ],
    },
    {
        title: 'Пользователям',
        subItems: [
            { title: 'КАК ЧИТАТЬ АУК.ЛИСТ', path: 'readAuctionList' },
            { title: 'РЕГИСТРАЦИЯ АВТО С АУКЦИОНА', path: 'registrationOfACarFromAnAuction' },
        ],
    },
    {
        title: 'О компании',
        subItems: [
            { title: 'О НАС', path: 'info' },
            { title: 'КОНТАКТЫ', path: 'contacts' },
        ],
    },
];

export type TitemList = Array<Titem>;
export type Titem = {
    title: string;
    subItems: {
        title: string;
        path: string;
    }[];
};
