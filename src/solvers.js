/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

var createNArray = function(n){
  var array = [];
  for(var i = 0; i<n; i++){
    array.push(i);
  }
  return array;
}

window.findNRooksSolution = function(n) {
  var solution = new Board({n: n}); //fixme
  // var rowArray = createNArray(n);
  // var colArray = createNArray(n);
  // var funcName = function(rowArray, colArray){
  //   for(var i = rowArray[0]; i<rowArray.length; i++){
  //     for(var j = colArray[0]; j<colArray.length; j++){
  //       solution.togglePiece(i, j);
  //       rowArray.splice(i);
  //       colArray.splice(j);
  //       funcName(rowArray, colArray);
  //     }
  //   }
  // };
  // funcName(rowArray, colArray);
  for(var i = 0; i < n; i++){
    solution.togglePiece(i,i);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
// create a board
// pick first square with no rook conflicts: start with (0,0)
// toggle square
// check for rook conflicts
// if conflict toggle back
// continue
//
  var solutionCount = 0;
  var solutionBoard = new Board({n: n});
  var backTrackSquare = [];
  var passBoard = function(board, row){
    if(row < board.rows().length){
      var currentRow = board.rows()[row];
      var foundSquare = false;
      for (var i = 0; i<board.rows().length; i++){
        board.togglePiece(row, i);
        if(!board.hasAnyRooksConflicts()){
          foundSquare = true;
          backTrackSquare = [row, currentRow[i]]
          row++;
          passBoard(board, row);
        }else{
          board.togglePiece(row,i);
        }
      }
    }else{
      solutionCount++;
    }
  }
  passBoard(solutionBoard, 0);
//  // };

  // var solutionCount = undefined; //fixme
  // var solutionBoard = new Board({n: n})
  // var rowArray = createNArray(n);
  // var colArray = createNArray(n);
  // var funcName = function(rowArray, colArray){
  //   for(var i = rowArray[0]; i<rowArray.length; i++){
  //     for(var j = colArray[0]; j<colArray.length; j++){
  //       solution.togglePiece(i, j);
  //       rowArray.splice(i);
  //       colArray.splice(j);
  //       funcName(rowArray, colArray);
  //     }
  //   }
  // };
  // funcName(rowArray, colArray);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
