'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const ticTacToe = require('../game');

$(() => {
  setAPIOrigin(location, config);
});

// const ticTacToe = require("../../game.js");
//
// $('.square').on('click', .mutateBoard());
//
// // use require with a reference to bundle the file and use it in this file
// // const example = require('./example');
//
// // use require without a reference to ensure a file is bundled
// require('./example');
//
// module.export = {
//   ticTacToe,
//   game
// };

// const authEvents = require('../../game.js');

let count = 0;

let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
//
$(document).ready(ticTacToe.createBoard());
//
// // $(document).ready(createBoard());

// const mutateArrayX = function () {
//   let classStr = $(this).attr('class');
//   let classNum = parseInt(classStr);
//   board[classNum] = 'x';
//   console.log(classStr);
//   console.log(classNum);
//   console.log(board);
// };
//
// const mutateArrayO = function () {
//   let classStr = $(this).attr('class');
//   let classNum = parseInt(classStr);
//   board[classNum] = 'o';
//   console.log(classStr);
//   console.log(classNum);
//   console.log(board);
// };
$(() => {
  $('.square').on('click', function () {
    if (count % 2 !== 0 && $(this).text() === '_') {
      let classStr = $(this).attr('class');
      let classNum = parseInt(classStr);
      $(this).text('o');
      board[classNum] = 'o';
      count++;
      console.log(count);
      console.log('classStr:' + classStr);
      console.log('classNum:' + classNum);
      console.log(board);
    }
  });
});


$(() =>  {
    $('.square').on('click', function () {
      if (count % 2 === 0 && $(this).text() === '_') {
        let classStr = $(this).attr('class');
        let classNum = parseInt(classStr);
        $(this).text('x');
        board[classNum] = 'x';
        count ++;
        console.log(count);
        console.log('classStr:' + classStr);
        console.log('classNum:' + classNum);
        console.log(board);
      }
    });
  });





// change game.js functions to jquery. Maybe not just look at the code tomorrow and determine best course of action.
// On document ready

// $(document).ready(function () {
//     $('.square').on('click', function() {
//       if (count % 2 === 0 && $(this).text() === '_') {
//         $(this).text('x');
//         // mutateArrayX();
//         count ++;
//         console.log(count);
//       } else if (count % 2 !== 0 && $(this).text() === '_') {
//         $(this).text('o');
//         count ++;
//         // mutateArrayO();
//         console.log(count);
//       } else {
//         console.log('try again');
//         console.log(count);
//       }
//     });
//   });

// $('.square').on('click', function() {
//     let id = $(this).attr('id');
//     $('#' + id).text('x');
// });

//parseInt function
//.bind function
