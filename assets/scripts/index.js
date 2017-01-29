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




//Why can I import into this file from ./server-stuff/events
// but not import files from ./server-stuff/events into game-util

// const authEvents = require('../../game.js');

$(document).ready(handlers.addHandlers);

// $(document).ready(ticTacToe.createBoard());

$(() => {
  $('.square').on('click', gameUtil.xEvent);
  $('.square').on('click', gameUtil.oEvent);
  $('.square').on('click', poop.onUpdateGame);
  $('.new').on('click', poop.onCreateGame);
  $('.new').on('click', gameUtil.resetGame);
  $('.new').on('click', poop.resetFun);
  $('#game-search').on('submit', poop.onShowGame);
  // $('.games').on('click', function () {
  //   $('.log').text(poop.data.game);
  // });
  $('.new').on('click', function () {
    event.preventDefault();
    $('.square').show();
    $('.game-board').show();
  });

  });
