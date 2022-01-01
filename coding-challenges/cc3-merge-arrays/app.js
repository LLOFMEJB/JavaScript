let array1 = [10,3,42,13];
let array2 = [45,7,15];
let merged = [];

function mergeArrays(a,b) {
    return merged = (a.concat(b)).sort((a,b) => a-b)
}
console.log(mergeArrays(array1, array2))