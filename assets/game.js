'use strict';

let gameBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
let count = 0;
let playerX = 0;
let playerO = 0;

const displayBoard = function () {
  for (let i = 0; i < gameBoard.length; i += 3) {
    console.log(gameBoard[i] + ' | ' + gameBoard[i + 1] + ' | ' + gameBoard[i + 2]);
  }
};

const playerTurn = function (count) {
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
  if (count % 2 === 0) {
    gameBoard[index] = 'x';
    count ++;
  } else {
    gameBoard[index] = 'o';
    count ++;
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
