// check if array contains a value
function contains(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return true;
  }
  return false;
}

// duplicate an array using arrays and loop
function uniqueArray(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (!contains(res, v)) res.push(v);
  }
  return res;
}

// sum of elements that are in exactly one array
function sumSymmetricDifference(arr1, arr2) {
  const a = uniqueArray(arr1);
  const b = uniqueArray(arr2);

  let sum = 0;

  // add elements in a that are NOT in b
  for (let i = 0; i < a.length; i++) {
    const x = a[i];
    if (!contains(b, x)) sum += x;
  }

  // add elements in b that are NOT in a
  for (let j = 0; j < b.length; j++) {
    const y = b[j];
    if (!contains(a, y)) sum += y;
  }

  return sum;
}

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
console.log(sumSymmetricDifference(set1, set2)); // 13
