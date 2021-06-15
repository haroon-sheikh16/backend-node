// Input: [1,2,3,2,1,4,5,3,2,2,4,5]
// Output: [1,2,3,4,5]

// function removeDuplicates(arr) {
//   let filter = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (filter.indexOf(arr[i]) == -1) {
//       filter.push(arr[i]);
//     }
//   }
//   console.log("filter Array :", filter);
//   return filter;
// }
function removeDuplicates(arr) {
  let count = {};
  let filter = [];
  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]] += 1;
    } else {
      count[arr[i]] = 1;
      filter.push(arr[i]);
    }
  }

  console.log(filter);
}

//removeDuplicates([1, 2, 3, 2, 1, 4, 5, 3, 2, 2, 4, 5]);

let value = { name: "haroon sheikh", age: 28, university: "UOL" };
console.log(value);
for (let property in value) console.log(property);

let value2 = { ...value };
value2.name = "haroon sheikh (hS)";

// console.log(value2);
// console.log(value);

let value3 = { ...value, name: "hS" };

// console.log(value3);
// console.log(value);

let value4 = [1, 2, 3, 4, 5, 6, 9, 10, 58, 42, 38];
let result = value4.sort((a, b) => b - a);

console.log(result);

let arr = [99, 77, 65, 1, 555, 444, 12, 6, 7];

function largest(b) {
  let larg = 0;
  let sm = 0;
  let temp = 0;

  for (let i = 0; i < b.length - 1; i++) {
    for (let j = i + 1; j < b.length; j++) {
      if (b[i] < b[j]) {
        temp = b[i];
        b[i] = b[j];
        b[j] = temp;
      }
    }
  }
  console.log(b);

  console.log(b[b.length - 1]);
  console.log(b[0]);
}

largest(arr);
