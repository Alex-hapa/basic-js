const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const M = matrix.length, N = matrix[0].length;
  console.log(M,N)
 
  let resultMatrix = [];
  for (let i = 0; i < M; i++) {
    resultMatrix[i] = [0, 0, 0];
  }
  for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
      // resultMatrix[i][j] = 0;
      if  (i === 0) {
        if  (j === 0) {
          if (matrix[i][j + 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j + 1]) {
            resultMatrix[i][j] += 1;
          }
        } else if (j === N - 1) {
          if (matrix[i][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j - 1]) {
            resultMatrix[i][j] += 1;
          }
        } else {
          if (matrix[i][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i][j + 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j + 1]) {
            resultMatrix[i][j] += 1;
          }
        }
      } else if(i === M - 1) {
        if  (j === 0) {
          if (matrix[i][j + 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i - 1][j]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i - 1][j + 1]) {
            resultMatrix[i][j] += 1;
          }
        } else if (j === N - 1) {
          if (matrix[i][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i - 1][j]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i - 1][j - 1]) {
            resultMatrix[i][j] += 1;
          }
        } else {
          if (matrix[i][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i][j + 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i - 1][j]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i - 1][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i - 1][j + 1]) {
            resultMatrix[i][j] += 1;
          }
        }
      } else {
        if  (j === 0) {
          if (matrix[i - 1][j]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i - 1][j + 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i][j + 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j + 1]) {
            resultMatrix[i][j] += 1;
          }
        } else if (j === N - 1) {
          if (matrix[i - 1][j]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i - 1][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j]) {
            resultMatrix[i][j] += 1;
          }
        } else {
          if (matrix[i - 1][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i - 1][j]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i - 1][j + 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i][j + 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j - 1]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j]) {
            resultMatrix[i][j] += 1;
          }
          if (matrix[i + 1][j + 1]) {
            resultMatrix[i][j] += 1;
          }
        }
      }
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
