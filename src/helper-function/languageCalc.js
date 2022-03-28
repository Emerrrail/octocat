export const languageCalc = (input) => {

    const initialValue = 0;
    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, initialValue);

    const percentage = (partialValue, totalValue) => {
        return Math.round((partialValue / totalValue) * 1000) / 10;
    }

    const valuesArray = Object.values(input)

    const keysArray = Object.keys(input)

    const sum = sumValues(input);

    const languageList = [];

    let other = 0;

    for (let i = 0; i < keysArray.length; i++) {
        if (percentage(valuesArray[i], sum) > 0.5) {
            // languageList.push(`${keysArray[i]}: ${percentage(valuesArray[i], sum)}%`);
            languageList.push({ "name": keysArray[i], "value": `${percentage(valuesArray[i], sum)}%` })
        } else {
            other += percentage(valuesArray[i], sum);
        }
    }

    if (other !== 0) {
        languageList.push({ "name": "Other", "value": `${other}%` });
    }

    return languageList;
}