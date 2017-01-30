'use strict';




const onSuccess = function (data) {
    $('.log').text('You\'ve played ' + data.games.length + ' games');
};

const showSuccess = function () {
};

const onError = function () {

};

const onPatchSuccess = function () {
};

const onPostSuccess = function () {

};

module.exports = {
  onSuccess,
  onError,
  onPatchSuccess,
  onPostSuccess,
  showSuccess
};
