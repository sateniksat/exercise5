function solution(arr1) {
  let negative = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === -1) {
      negative.push(i);
    }
  }
  let positiveArr = arr1.filter((height) => height >= 0);
  positiveArr.sort(function (a, b) {
    return a - b;
  });
  for (let value of negative) {
    positiveArr.splice(value, 0, -1);
  }
  return positiveArr;
}
console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(solution([-1, 150, -1, 190, 300, 170, -1, 160, 180, 1]));
