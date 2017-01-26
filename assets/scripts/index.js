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

const createBoard = function () {
  for (let i = 0; i < 9; i++) {
    let node = $('<div id=' + i + ' class="square">_</div>');
    $('.game-board').append(node);
  }
};

//$(document).ready(ticTacToe.createBoard());

$(document).ready(createBoard());

// change game.js functions to jquery. Maybe not just look at the code tomorrow and determine best course of action.
// On document ready

$(document).ready(function () {
    $('.square').on('click', function(event) {
      if (count % 2 === 0 && $(this).text() === '_') {
        $(this).text('x');
        count ++;
        console.log(count);
      } else if (count % 2 !== 0 && $(this).text() === '_') {
        $(this).text('o');
        count ++;
        console.log(count);
      } else {
        console.log('try again');
        console.log(count);
      }
    });
  });

// $('.square').on('click', function() {
//     let id = $(this).attr('id');
//     $('#' + id).text('x');
// });

//parseInt function
//.bind function
