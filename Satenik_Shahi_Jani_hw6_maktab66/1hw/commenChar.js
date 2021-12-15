function solution(str1, str2) {
  let counter = 0;
  const comp = str2.split("");
  for (let value of str1) {
    let index = comp.findIndex((i) => i === value);
    if (index >= 0) {
      counter++;
      comp.splice(index, 1);
    }
  }
  return counter;
}
console.log(solution("aabcc", "adcaa")); //3
console.log(solution("aabcd", "aaabd")); //4
