'use strict';

const onSuccess = function (data) {

  // debugger;
  if (data.game) {
    console.log(data.game);
  } else {
    console.table(data.games);
    $('.log').text('You\'ve played ' + data.games.length + ' games');
  }
};

const onSignInSuccess = function () {

};

const showSuccess = function (data) {

};

const onError = function (response) {
  console.error(response);
};



const onPatchSuccess = function () {
  console.log('Game was successfully patched.');
};

const onPostSuccess = function (data) {
  console.log('Game was successfully posted.');
  console.log(data);
};

module.exports = {
  onSuccess,
  onError,
  onPatchSuccess,
  onPostSuccess,
  onSignInSuccess,
  showSuccess
};
