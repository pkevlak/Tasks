const matrixAddition = (matrix, secondMatrix) => {
  const matrix3 = [];
  for(let row = 0; row < matrix.length; row++){
    const inMatrix = [];
    for(let column = 0; column < matrix[0].length; column++){
      inMatrix.push(matrix[row][column] + secondMatrix[row][column]);
    }
    matrix3.push(inMatrix);
  }
  return matrix3;
}

/*console.log(matrixAddition(
  [  [1, 2, 6, 5],
     [1, 2, 8, 5], [1, 2, 8, 10]  ],
//    +
  [ [2, 3, 5, 12],
    [2, 3, 9, 12], [1, 2, 8, 12] ] ));*/
