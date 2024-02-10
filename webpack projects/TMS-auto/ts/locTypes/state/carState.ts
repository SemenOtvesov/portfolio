export type TcarState = {
    brandList: TbrandList;
    japan: { [key: string]: Array<Car> };
    korea: { [key: string]: Array<Car> };
    recentlyPurchased: Array<Car>;

    activeBrandName: string;
    activeBrandObj: Array<Car>;
    downloadBrand: string[];
    recentlyPurchasedCheck: boolean;

    brandListKorea: string[];
    brandListJapan: string[];

    activeModel: string;
    activeModelList: Car[];
    activeLot: Car | {};
};

export type TbrandList = { brand: string; loc: 'korea' | 'japan' }[];

export type Car = {
    id: number;
    brand: string;
    name: string;
    equipment: 'basic' | 'luxury' | 'sports';
    year: number;
    evaluation: number;
    transmission: 'automatic' | 'manual';
    mileage: number;
    engine: number;
    body: 'sedan' | 'hatchback' | 'SUV' | 'crossover';
    drive: '2WD' | '4WD';
    price: number;
    images: Array<string>;
};
export type Tcountry = 'japan' | 'korea';
