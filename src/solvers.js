/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


var passBoard = function(board, n, row, validator ,callback){
  if(row === n){
    return callback();
  }

  for (var i = 0; i < n; i++){
    board.togglePiece(row, i);
    if(!board[validator]()){
      var result = passBoard(board, n, row+1, validator, callback);
      if(result){
        return result;
      }
    }
    board.togglePiece(row,i);
  }
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solutionBoard = new Board({n: n});

  return passBoard(solutionBoard, n, 0, 'hasAnyRooksConflicts', function(){
    return solutionBoard.rows();
  });
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var solutionBoard = new Board({n: n});

  passBoard(solutionBoard, n, 0, 'hasAnyRooksConflicts', function(){
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutionBoard = new Board({n: n});
  var solution = solutionBoard.rows();

  passBoard(solutionBoard, n , 0, 'hasAnyQueensConflicts', function(){
    return solutionBoard.rows();
  });
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var solutionBoard = new Board({n: n});
  passBoard(solutionBoard, n, 0, 'hasAnyQueensConflicts', function(){
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
