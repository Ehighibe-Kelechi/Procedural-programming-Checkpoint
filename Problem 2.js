// procedure-style: sets psObj.ps to the dot product
function dotProductProcedure(psObj, v1, v2) {
  if (v1.length !== v2.length) {
    throw new Error("Vectors must have same length");
  }

  let sum = 0;
  // inner loop: compute dot product
  for (let i = 0; i < v1.length; i++) {
    sum += v1[i] * v2[i];
  }

  psObj.ps = sum; // mutate passed object (procedure-style)
}

// Use for n pairs
function checkOrthogonalProcedural(pairs) {
  // pairs: array of [v1, v2] pairs
  const results = []; // boolean for each pair: true if orthogonal
  for (let p = 0; p < pairs.length; p++) {
    // outer loop over pairs
    const [v1, v2] = pairs[p];
    const psObj = { ps: null }; // container to receive result
    dotProductProcedure(psObj, v1, v2); // inner loop occurs inside procedure
    // for floating point safety, use small tolerance
    results.push(Math.abs(psObj.ps) < 1e-12);
  }
  return results;
}

// Example:
const pairs = [
  [
    [1, 0, 0],
    [0, 5, 0],
  ], // orthogonal -> dot = 0
  [
    [1, 2],
    [3, 4],
  ], // not orthogonal -> dot = 11
  [
    [1, 2, 3],
    [-3, 0, 1],
  ], // compute dot
];
console.log(checkOrthogonalProcedural(pairs)); // [ true, false, false ] (depending on vectors)
