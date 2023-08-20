function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  
  for (let i = 1; i < matrix.length; i += 2) {
    matrix[i] = matrix[i].reverse();
  }
  
  return matrix.flat();
}

// Example usage:
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(towelSort(matrix)); // Output: [1, 2, 3, 6, 5, 4, 7, 8, 9]
```
