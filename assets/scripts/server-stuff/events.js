'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const index = require('../index');
const store = require('../store');

const getFormFields = require('../../../lib/get-form-fields');

const onShowGame = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  if (data.game.id.length === 0) {
    api.index()
    .then(ui.onSuccess)
    .catch(ui.onError);
  } else {
    api.show(data.game.id)
    .then(ui.onSuccess)
    .catch(ui.onError);
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
  })
  .then(ui.onPostSuccess)
  .catch(ui.onError);
};

const onUpdateGame = function (event) {
  event.preventDefault();
  api.updateGame(parseInt(event.target.class), index.whichPlayer, index.gameOver)
  .then(ui.onPostSuccess)
  .catch(ui.onError);
};


module.exports = {
  onShowGame,
  onJoinGame,
  onLogGame,
  onCreateGame,
  onUpdateGame
};
