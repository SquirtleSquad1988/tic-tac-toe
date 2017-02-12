'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');
const index = require('../game-util');
const getFormFields = require('../../../lib/get-form-fields');

let haventSubmittedEnd = {over: true};

const resetFun = function () {
  haventSubmittedEnd.over = true;
};

const onShowGame = function (event) {
  event.preventDefault();
  let gameId = $('#game-id').val();
  if (gameId.length === 0) {
    api.showGames()
    .then(ui.showGames)
    .catch(ui.onShowError);
  } else {
    api.showGame(gameId)
    .then(ui.showGame)
    .catch(ui.onShowError);
  }
};

const onJoinGame = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.patch(data)
  .then(ui.onPatchSuccess)
  .catch(ui.onError);
};


const onLogGame = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.patch(data)
  .then(ui.onPatchSuccess)
  .catch(ui.onError);
};

const onCreateGame = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createGame(data)
  .then((response) => {
    store.game = response.game;
    ui.onPostSuccess(response.game.id);
  });
//   .then(ui.onPostSuccess)
//   .catch(ui.onError);
};

const onUpdateGame = function (event) {
  if (haventSubmittedEnd.over) {
    event.preventDefault();
    api.updateGame(+$(this).data('index'), $(this).text(), index.gameOver.state)
    .then(ui.onPatchSuccess)
    .catch(ui.onError);
    if (index.gameOver.state) {
      haventSubmittedEnd.over = false;
    }
  }
};


module.exports = {
  onShowGame,
  onJoinGame,
  onLogGame,
  onCreateGame,
  onUpdateGame,
  haventSubmittedEnd,
  resetFun
};
