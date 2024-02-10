export default (params: string[]) => {
    const obj: { [a: string]: string } = {
        '/': 'ГЛАВНАЯ',
        carsFromJapan: 'АВТО ИЗ ЯПОНИИ',
        carsFromKorea: 'АВТО ИЗ КОРЕИ',
        statisticsJapan: 'СТАТИСТИКА ЯПОНИЯ',
        statisticsKorea: 'СТАТИСТИКА КОКЕЯ',
        readAuctionList: 'Как читать аукционный лист',
        info: 'О компании',
        contacts: 'Контакты',
        registrationOfACarFromAnAuction: 'Постановка на учет купленного в Японии автомобиля',
    };
    params.forEach(el => (obj[el] = el));
    return obj;
};
export type TpathNames =
    | ''
    | 'carsFromJapan'
    | 'carsFromKorea'
    | 'statisticsJapan'
    | 'statisticsKorea'
    | 'readAuctionList'
    | 'info'
    | 'contacts'
    | 'registrationOfACarFromAnAuction';
