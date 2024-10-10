const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

forEach([1, 2, 3], (e, i) => {
  console.log(`Element at index ${i}: ${e}`);
});