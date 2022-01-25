// "It is a perfect number" or "It is not a perfect number

const slide = (array) => {
  let newArr = [];
  let insideArr = [];
  for (let i = 0; i < array.length - 2; i++) {
    insideArr.push(array[i], array[i + 1], array[i + 2]);
    insideArr.sort((a, b) => b - a);
    newArr.push(insideArr[0]);
    insideArr = []
    console.log(newArr);
  }
};

slide([1, 3, -1, -3, 5, 3, 6, 7]);
slide([10, 5, 2, 7, 8, 7])