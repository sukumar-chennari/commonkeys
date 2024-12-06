const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};

function findCommonKeys(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    const commonKeys = keys1.filter(key => keys2.includes(key));

    return commonKeys;
}


console.log(findCommonKeys(obj1, obj2));