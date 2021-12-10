let shiftOnceRight = (arr) => {
  let tmparr = arr.splice(1);
  tmparr.push(arr[0]);
  return tmparr;
};

let rightRotate = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr = shiftOnceRight(arr);
  }
  return arr;
};

console.log(rightRotate([1, 2, 3, 4, 5], 4));
