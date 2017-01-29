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
  let data = getFormFields(event.target);
  if (data.game.id.length === 0) {
    api.showGame()
    .then(ui.onSuccess)
    .catch(ui.onError);
  } else {
    api.showGames(data.game.id)
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
  if (haventSubmittedEnd.over) {
    event.preventDefault();
    //updateUI and checkWinner whichPlayer is being updated before it
    //is being sent to the server, so x's are getting logged
    //as o's and visa versa. Will have to figure out a way to arrange
    //the functions so that the proper x and o are getting logged
    // I should probably put the xEvent and oEvent functions in here.
    api.updateGame(+$(this).data('index'), $(this).text(), index.gameOver.state)
    .then(ui.onPostSuccess)
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
