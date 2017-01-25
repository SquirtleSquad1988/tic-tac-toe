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

const checkHorizontalWin = function () {
    if (gameBoard === []){}
};


const checkOWins = function () {

};

const resetGame = function () {
  gameBoard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  count = 0;
  playerTurn(count);
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
  playerOTurn
};
