'use strict';

let gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let whichPlayer = {player: 'X'};
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

const resetGame = function () {
  event.preventDefault();
  gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  count = 0;
  whichPlayer.player = 'X';
  $('.square').text('');
  $('.winner').text('');
  gameOver.state = false;
};

const checkWinner = function () {
  if (checkHorizontalWin('x') || checkVerticalWin('x') || checkDiagonalWin('x')) {
    $('.winner').text('X Wins!');
    gameOver.state = true;
    return true;
  } else if (checkHorizontalWin('o') || checkVerticalWin('o') || checkDiagonalWin('o')) {
    $('.winner').text('O Wins!');
    gameOver.state = true;
    return true;
  } else if (count === 9) {
    $('.winner').text('Draw!');
    gameOver.state = true;
  }
};

const xEvent = function () {
  event.preventDefault();
  if (checkWinner()){
    return;
  } else if(whichPlayer.player === 'O' && $(this).text() === '') {
    $(this).text('o');
    gameBoard[+$(this).data('index')] = 'o';
    whichPlayer.player = 'X';
    count++;
    checkWinner();
  }
};

const oEvent = function () {
    event.preventDefault();
  if (checkWinner()) {
    return;
  } else if (whichPlayer.player === 'X' && $(this).text() === '') {
    $(this).text('x');
    gameBoard[+$(this).data('index')] = 'x';
    whichPlayer.player = 'O';
    count ++;
    checkWinner();
  }
};



module.exports = {
  whichPlayer,
  gameOver,
  oEvent,
  xEvent,
  resetGame,
  checkWinner,
};
