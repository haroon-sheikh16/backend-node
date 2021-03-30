const a = [4, 3, 6, 3, 4, 3];
let array1 = [];

function count_duplicate(a) {
  let counts = {};

  for (let i = 0; i < a.length; i++) {
    if (counts[a[i]]) {
      counts[a[i]] += 1;
    } else {
      counts[a[i]] = 1;
    }
  }
  for (let prop in counts) {
    if (counts[prop] >= 2) {
      console.log(prop + " counted: " + counts[prop] + " times.");
    }
    array1.push([parseInt(prop), counts[prop]]);
  }
  console.log(counts);
  console.log(array1);
}

count_duplicate(a);

const b = [55, 66, 78, 58, 7, 2, 694, 585];

function largest(b) {
  let larg = 0;
  let sm = 0;

  for (let i = 0; i < b.length; i++) {
    for (let j = i + 1; j < b.length; j++) {
      if (b[i] > b[j]) {
        larg = b[i];
      }
      if (b[i] < b[j]) {
        sm = b[i];
      }
    }
  }
  console.log(larg);
  console.log(sm);
}

largest(b);
