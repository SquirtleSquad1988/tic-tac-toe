'use strict';

let gameBoard = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
let count = 0;
let playerXWins = 0;
let playerOWins = 0;

const winCondition = function (player, indexOne, indexTwo, indexThree) {
  return (indexOne === player) && (indexTwo === player) && (indexThree === player);
};

const checkHorizontalWin = function (player) {
  return winCondition(player, gameBoard[0], gameBoard[1], gameBoard[2]) ||
         winCondition(player, gameBoard[3], gameBoard[4], gameBoard[5]) ||
         winCondition(player, gameBoard[6], gameBoard[7], gameBoard[8]);
};

const checkDiagonalWin = function (player) {
  return winCondition(player, gameBoard[0], gameBoard[4], gameBoard[8]) ||
         winCondition(player, gameBoard[2], gameBoard[4], gameBoard[6]);
};

const checkVerticalWin = function (player) {
  return winCondition(player, gameBoard[0], gameBoard[3], gameBoard[6]) ||
         winCondition(player, gameBoard[1], gameBoard[4], gameBoard[7]) ||
         winCondition(player, gameBoard[2], gameBoard[5], gameBoard[8]);
};

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

const resetGame = function () {
  gameBoard = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
  count = 0;
  playerTurn(count);
};

let executeGame = function () {
  resetGame();
  if (count % 2 === 0) {
    console.log('Player X select index to mutate');
  } else {
    console.log('Player O select index to mutate');
  }
};

const checkWinner = function () {
  if (checkHorizontalWin('x') || checkVerticalWin('x') || checkDiagonalWin('x')) {
    console.log('X is the winner');
    displayBoard();
    playerXWins += 1;
    return true;
  } else if (checkHorizontalWin('o') || checkVerticalWin('o') || checkDiagonalWin('o')) {
    displayBoard();
    console.log('O is the winner');
    playerOWins += 1;
    return true;
  } else if (count === 9) {
    displayBoard();
    console.log('Draw!');
  } else {
    playerTurn(count);
  }
};

//May have to change this in case I want to change default values of array
const mutateBoard = function (index) {
  if (count % 2 === 0 && gameBoard[index] === '_') {
    gameBoard[index] = 'x';
    count ++;
  } else if (count % 2 !== 0 && gameBoard[index] === '_') {
    gameBoard[index] = 'o';
    count ++;
  } else {
    console.log('Select another spot:');
  }
  checkWinner();
};

//If these functions are unacceptable for determining a winner
// I can use the slice method to check if certain sections of
// the array are all x's or o's. or possibly if:
// gameBoard[0] + gameBoard[4] + gameBoard[8] === "xxx"

module.export = {
  playerXWins,
  playerOWins,
  displayBoard,
  resetGame,
  checkHorizontalWin,
  mutateBoard,
  executeGame,
  playerTurn,
  checkDiagonalWin,
  checkVerticalWin,
  checkWinner,
  winCondition
};
