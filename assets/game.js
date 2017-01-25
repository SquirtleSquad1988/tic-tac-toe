'use strict';

let gameBoard = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
let count = 0;
let playerX = 0;
let playerO = 0;

const displayBoard = function () {
  for (let i = 0; i < gameBoard.length; i += 3) {
    console.log(gameBoard[i] + ' | ' + gameBoard[i + 1] + ' | ' + gameBoard[i + 2]);
  }
};

const playerTurn = function () {
  if (count % 2 === 0) {
    console.log('Player X select index to mutate');
  } else {
    console.log('Player O select index to mutate');
  }
  displayBoard();
};

const playerOTurn = function () {

};

const executeGame = function () {
  if (count % 2 === 0) {
    console.log('Player X select index to mutate');
  } else {
    console.log('Player O select index to mutate');
  }
  displayBoard();
};

const mutateBoard = function (index) {
  if (count % 2 === 0 && gameBoard[index] === '_') {
    gameBoard[index] = 'x';
    count ++;
  } else if (count % 2 !== 0 && gameBoard[index] === '_') {
    gameBoard[index] = 'o';
    count ++;
  } else {
    console.log('select another spot');
    playerTurn(count);
  }
  playerTurn(count);
};




const checkOWins = function () {

};

const resetGame = function () {
  gameBoard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  count = 0;
  playerTurn(count);
};

const allThree = function (player, indexOne, indexTwo, indexThree) {
  return (indexOne === player) && (indexTwo === player) && (indexThree === player);
};

const checkHorizontalWin = function (player) {
  return allThree(player, gameBoard[0], gameBoard[1], gameBoard[2]) ||
         allThree(player, gameBoard[3], gameBoard[4], gameBoard[5]) ||
         allThree(player, gameBoard[6], gameBoard[7], gameBoard[8]);
};

const checkDiagonalWin = function (player) {
  return allThree(player, gameBoard[0], gameBoard[4], gameBoard[8]) ||
         allThree(player, gameBoard[2], gameBoard[4], gameBoard[6]);
};

const checkVerticalWin = function (player) {
  return allThree(player, gameBoard[0], gameBoard[3], gameBoard[6]) ||
         allThree(player, gameBoard[1], gameBoard[4], gameBoard[7]) ||
         allThree(player, gameBoard[2], gameBoard[5], gameBoard[8]);
};



module.export = {
  playerX,
  playerO,
  displayBoard,
  resetGame,
  checkOWins,
  checkHorizontalWin,
  mutateBoard,
  executeGame,
  playerTurn,
  playerOTurn,
  checkDiagonalWin,
  checkVerticalWin
};
