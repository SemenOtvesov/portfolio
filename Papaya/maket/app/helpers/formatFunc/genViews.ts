export default (views: number) => {
    let divider = 1000;

    if (Math.floor(views / divider) > 0) {
        divider *= 1000;

        if (Math.floor(views / divider) > 0) {
            divider *= 1000;

            if (Math.floor(views / divider) > 0) {
                return Math.floor((views % divider) / (divider / 1000)) + 'bl';
            } else {
                return Math.floor((views % divider) / (divider / 1000)) + 'mm';
            }
        } else {
            return Math.floor((views % divider) / (divider / 1000)) + 'k';
        }
    } else {
        return views % divider;
    }
};
