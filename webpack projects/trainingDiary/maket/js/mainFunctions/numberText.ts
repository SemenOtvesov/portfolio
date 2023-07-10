export function numberText(quantityApproach: number, textValues: [text1: string, text2: string, test3: string]){
    let text: string = '';
    if([1].includes(quantityApproach % 10)){text = ` ${textValues[0]}`}
    if([2,3,4].includes(quantityApproach % 10)){text = ` ${textValues[1]}`}
    if([5,6,7,8,9,0].includes(quantityApproach % 10)){text = ` ${textValues[2]}`}
    
    return quantityApproach + " " + text;
}