let arr1 = [
  1, 0, 100, 10, 5, -1, 100, 5, 0, 200, 7, 3445, 26, 26, 26, 100, 0, 2, -1, -1,
  -1, 2, 11,
];

function checkDuplicates(arr) {
  //retun duplicates
  let duplicates = [];
  count = {};
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]] += 1;
    } else {
      count[arr[i]] = 1;
    }
  }

  for (const prop in count) {
    if (count[prop] > 1) {
      duplicates.push(parseInt(prop));
    }
  }

  return duplicates;
}

let result = checkDuplicates(arr1);
console.log(result);
