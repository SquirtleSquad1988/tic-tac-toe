'use strict';

const success = (data) => {
  if (data) { console.log(data); }
};

const signInSuccess = () => {
  $('button').removeClass('hide');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
};
