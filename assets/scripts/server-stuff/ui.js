'use strict';

const onSuccess = function (data) {
  // debugger;
  if (data.book) {
    console.log(data.book);
  } else {
    console.table(data.books);
  }
};

const onSignInSuccess = function () {

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
  setTimeout(function () {alert('yay!'); }, 3000);
};

module.exports = {
  onSuccess,
  onError,
  onPatchSuccess,
  onPostSuccess,
  onSignInSuccess,
};
