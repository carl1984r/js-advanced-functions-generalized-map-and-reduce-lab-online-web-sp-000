// Add your functions here
function map(arr, fx) {
  const mappedArr = [];
  for(const e of arr) {
    mappedArr.push(fx(e));
  };
  return mappedArray;
};
