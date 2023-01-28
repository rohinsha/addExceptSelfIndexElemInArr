function f(numArr) {
  let y = [];
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  y = numArr.map((x) => sum - x);
  return y;
}
console.log(f([3, 8, 2, 1, 5]));
//output:-([16, 11, 17, 18, 14);
