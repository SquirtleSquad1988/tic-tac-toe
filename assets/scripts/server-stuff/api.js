'use strict';

const config = require('../config.js');
const store = require('../store.js');

const showGames = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const showGame = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
  });
};

const updateGame = function (indx, currentPlayer, state) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: {
  game: {
    cell: {
      index: indx,
      value: currentPlayer,
    },
    over: state
  }
}
  });
};

const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data,
  });
};

const joinGame = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data,
  });
};

const logGame = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data,
  });
};

module.exports = {
  updateGame,
  showGame,
  showGames,
  joinGame,
  logGame,
  createGame,
};
