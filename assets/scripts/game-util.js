'use strict';

const poop = require('./server-stuff/events');

let gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let whichPlayer = {player: 'X'};
let playerXWins = 0;
let playerOWins = 0;
let count = 0;
let gameOver = {state: false};

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
  event.preventDefault();
  gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  count = 0;
  playerTurn(count);
  whichPlayer.player = 'X';
  $('.square').text('_');
  $('.winner').text('');
  gameOver.state = false;
};

const checkWinner = function () {
  if (checkHorizontalWin('x') || checkVerticalWin('x') || checkDiagonalWin('x')) {
    console.log('X is the winner');
    displayBoard();
    playerXWins += 1;
    $('.winner').text('X Wins!');
    gameOver.state = true;
    return true;
  } else if (checkHorizontalWin('o') || checkVerticalWin('o') || checkDiagonalWin('o')) {
    displayBoard();
    console.log('O is the winner');
    $('.winner').text('O Wins!');
    playerOWins += 1;
    gameOver.state = true;
    return true;
  } else if (count === 9) {
    $('.winner').text('Draw!');
    displayBoard();
    console.log('Draw!');
    gameOver.state = true;
  } else {
    playerTurn(count);
  }
};


let xEvent = function () {
  event.preventDefault();
  if (checkWinner()){
    return;
  } else if(whichPlayer.player === 'O' && $(this).text() === '_') {
    let classStr = $(this).attr('class');
    let classNum = parseInt(classStr);
    $(this).text('o');
    gameBoard[classNum] = 'o';
    whichPlayer.player = 'X';
    checkWinner();
    count++;
    console.log(count);
    console.log('classStr:' + classStr);
    console.log('classNum:' + classNum);
    console.log(gameBoard);
  }
};

let oEvent = function () {
    event.preventDefault();
  if (checkWinner()) {
    return;
  } else if (whichPlayer.player === 'X' && $(this).text() === '_') {
    let classStr = $(this).attr('class');
    let classNum = parseInt(classStr);
    $(this).text('x');
    gameBoard[classNum] = 'x';
    whichPlayer.player = 'O';
    count ++;
    checkWinner();
    console.log(count);
    console.log('classStr:' + classStr);
    console.log('classNum:' + classNum);
    console.log(gameBoard);
  }
};

module.exports = {
  whichPlayer,
  gameOver,
  oEvent,
  xEvent,
  resetGame,
  checkWinner
};
