'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const ticTacToe = require('../game');

$(() => {
  setAPIOrigin(location, config);
});
let gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let playerXWins = 0;
let playerOWins = 0;
let count = 0;


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

let displayBoard = function () {
  for (let i = 0; i < gameBoard.length; i += 3) {
    console.log(gameBoard[i] + ' | ' + gameBoard[i + 1] + ' | ' + gameBoard[i + 2]);
  }
};

let playerTurn = function () {
  if (count % 2 === 0) {
    console.log('Player X select index to mutate');
  } else {
    console.log('Player O select index to mutate');
  }
  displayBoard();
};

let resetGame = function () {
  gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  count = 0;
  playerTurn(count);
  $('.square').text('_');
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


let xEvent = function () {
  if (checkWinner()){
    return;
  } else if(count % 2 !== 0 && $(this).text() === '_') {
    let classStr = $(this).attr('class');
    let classNum = parseInt(classStr);
    $(this).text('o');
    gameBoard[classNum] = 'o';
    checkWinner();
    count++;
    console.log(count);
    console.log('classStr:' + classStr);
    console.log('classNum:' + classNum);
    console.log(gameBoard);
  }
};

let oEvent = function () {
  if (checkWinner()) {
    return;
  } else if (count % 2 === 0 && $(this).text() === '_') {
    let classStr = $(this).attr('class');
    let classNum = parseInt(classStr);
    $(this).text('x');
    gameBoard[classNum] = 'x';
    count ++;
    checkWinner();
    console.log(count);
    console.log('classStr:' + classStr);
    console.log('classNum:' + classNum);
    console.log(gameBoard);
  }
};





// const authEvents = require('../../game.js');



$(document).ready(ticTacToe.createBoard());


$(() => {
  $('.square').on('click', xEvent);
});

$(() =>  {
    $('.square').on('click', oEvent);
});

//parseInt function
//.bind function
