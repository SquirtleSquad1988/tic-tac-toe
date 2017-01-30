'use strict';


const showGames = function (data) {
    $('.log').text('You\'ve played ' + data.games.length + ' games');
};

const showGame = function (data) {
    $('.log').text('Board state of game ' + $('#game-id').val() + ' was ' +
    data.game.cells[0] + ' | ' + data.game.cells[1] + ' | ' + data.game.cells[2] + ' | ' +
     data.game.cells[3] + ' | ' + data.game.cells[4] + ' | ' + data.game.cells[5] + ' | ' +
      data.game.cells[6] + ' | ' + data.game.cells[7] + ' | ' + data.game.cells[8]);
};

const showSuccess = function () {

};

const onError = function () {

};

const onPatchSuccess = function () {

};

const onPostSuccess = function (data) {
  console.log(data);
};



module.exports = {
  showGames,
  showGame,
  onError,
  onPatchSuccess,
  onPostSuccess,
  showSuccess,
};
