'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const ticTacToe = require('../game');
const handlers = require('./auth/events');
const poop = require('./server-stuff/events');
const gameUtil = require('./game-util');

$(() => {
  setAPIOrigin(location, config);
});






// const authEvents = require('../../game.js');

$(document).ready(handlers.addHandlers);

// $(document).ready(ticTacToe.createBoard());

$(() => {
  $('.square').on('click', poop.onUpdateGame);
  $('.new').on('click', poop.onCreateGame);
  $('.reset').on('click', gameUtil.resetGame);
  $('.square').on('click', gameUtil.oEvent);
  $('.square').on('click', gameUtil.xEvent);
});



//parseInt function
//.bind function
