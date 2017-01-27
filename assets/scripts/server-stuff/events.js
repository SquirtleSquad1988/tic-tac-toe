'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

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
  api.post(data)
  .then(ui.onPostSuccess)
  .catch(ui.onError);
};

module.exports = {
  onShowGame,
  onJoinGame,
  onLogGame,
  onCreateGame
};
