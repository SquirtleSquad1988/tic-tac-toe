'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const handlers = require('./auth/events');
const poop = require('./server-stuff/events');
const gameUtil = require('./game-util');

$(() => {
  setAPIOrigin(location, config);
});

$(document).ready(handlers.addHandlers);

$(() => {
  $('#game-id').hide();
  $('.log').text('Please Sign In or Sign Up!');
  $('.square').on('click', gameUtil.xEvent);
  $('.square').on('click', gameUtil.oEvent);
  $('.square').on('click', poop.onUpdateGame);
  $('.new').on('click', poop.onCreateGame);
  $('.new').on('click', gameUtil.resetGame);
  $('.new').on('click', poop.resetFun);
  $('#game-search').on('submit', poop.onShowGame);
  $('.new').on('click', function () {
    event.preventDefault();
    $('.square').show();
    $('.game-board').show();
    $('#game-id').show();
    $('.log').text('Go!');
  });
});
