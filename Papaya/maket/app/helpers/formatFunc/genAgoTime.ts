type TtimeKey = 'year' | 'months' | 'days' | 'hours' | 'minutes' | 'seconds';

const diffObj = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    months: 0,
    year: 0,
};

const nameComposer = {
    year: ['год', 'года', 'лет'],
    months: ['месяц', 'месяца', 'месяцев'],
    days: ['день', 'дня', 'дней'],
    hours: ['час', 'часа', 'часов'],
    minutes: ['минута', 'минуты', 'минут'],
    seconds: ['секунда', 'секунды', 'секунд'],
};

export default function genAgoTime(time: Date) {
    let diffTimestamp = Math.floor((Date.now() - new Date(time).getTime()) / 1000);
    let timeDivider = 60;
    for (const key in diffObj) {
        const keyI = key as TtimeKey;
        const floor = Math.floor(diffTimestamp / timeDivider);
        let devider = 1;
        if (keyI == 'seconds') {
            timeDivider *= 60;
            devider = 60;
        }
        if (keyI == 'minutes') {
            timeDivider *= 24;
            devider = 60;
        }
        if (keyI == 'hours') {
            timeDivider *= 31;
            devider = 24;
        }
        if (keyI == 'days') {
            timeDivider *= 12;
            devider = 31;
        }
        if (keyI == 'months') {
            devider = 24;
        }
        diffObj[keyI] = floor % devider;
    }

    let retTimeKey: TtimeKey = 'seconds';
    const diffObjReverse = dict_reverse(diffObj);
    for (const key in diffObjReverse) {
        const keyI = key as TtimeKey;
        if (diffObjReverse[keyI]) {
            retTimeKey = keyI;
            break;
        }
    }
    return `${diffObj[retTimeKey]} ${numberTextWrapper(retTimeKey)} назад`;
}

function numberTextWrapper(retTimeKey: TtimeKey) {
    if ((retTimeKey == 'seconds' || retTimeKey == 'minutes') && diffObj[retTimeKey] < 10) {
        if (retTimeKey == 'minutes') return 'минут';
        if (retTimeKey == 'seconds') return 'секунд';
    } else {
        return numberText(diffObj[retTimeKey], nameComposer[retTimeKey]);
    }
}

function numberText(quantity: number, variants: string[]) {
    let text = '';
    if ([1].includes(quantity % 10)) {
        text = variants[0];
    }
    if ([2, 3, 4].includes(quantity % 10)) {
        text = variants[1];
    }
    if ([5, 6, 7, 8, 9, 0].includes(quantity % 10)) {
        text = variants[2];
    }

    return text;
}

function dict_reverse(obj: { [a: string]: number }) {
    const new_obj: { [a: string]: number } = {};
    const rev_obj = Object.keys(obj).reverse();
    rev_obj.forEach(function (i) {
        new_obj[i] = obj[i];
    });
    return new_obj;
}
