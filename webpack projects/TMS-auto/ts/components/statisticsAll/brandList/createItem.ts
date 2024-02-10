export type Titem = { title: string; items: string[] };

export function createItem(list: string[]) {
    const obj: { [key: string]: string[] } = {};
    const retArr: Array<Titem> = [];
    list.forEach(el => {
        const firstSimbol = el[0];
        if (obj[firstSimbol]) {
            obj[firstSimbol].push(el);
        } else {
            obj[firstSimbol] = [el];
        }
    });
    for (const key in obj) {
        retArr.push({ title: key, items: obj[key] });
    }
    return retArr;
}
