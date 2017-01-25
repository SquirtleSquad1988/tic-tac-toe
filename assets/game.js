'use strict';

let gameBoard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
let count = 0;

const displayBoard = function () {
  for (let i = 0; i < gameBoard.length; i += 3) {
    console.log(gameBoard[i] + ' | ' + gameBoard[i + 1] + ' | ' + gameBoard[i + 2]);
  }
};

const playerTurn = function () {
  if (count % 2 === 0) {

  }
};

const playerOTurn = function () {

};

const mutateBoard = function (index) {
  if (count % 2 === 0) {
    gameBoard[index] = 'x';
    count ++;
  } else {
    gameBoard[index] = 'o';
    count ++;
  }
};



const checkXWins = function () {

};

const checkOWins = function () {

};

const resetGame = function () {}




module.export = {
  displayBoard
};
