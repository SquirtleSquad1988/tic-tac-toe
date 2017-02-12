'use strict';



const signInSuccess = () => {
  $('.log').text('Click New Game to Begin');
  $('button').removeClass('hide');
  $('.new').show();
  $('#game-search').show();
  $('#game-id').show();
  $('.credential-status').text('Click New Game to Begin');
};

const signInFailure = () => {
    $('.log').text('Please enter a valid username and password');
    $('.credential-status').text('Please enter a valid username and password');
};

const signUpSuccess = () => {
    $('.log').text('Welcome! Please Sign In!');
    $('.credential-status').text('Welcome! Please Sign In!');
    // close modal
    // $('.modal').modal('hide')
};

const signUpFailure = () => {
    $('.log').text('Please enter a valid username (e.g. name@name) and password (must be 4 or more characters)');
    $('.credential-status').text('Please enter a valid username (e.g. name@name) and password (must be 4 or more characters)');
};

const changePasswordSuccess = () => {
  $('.log').text('Password Successfully Changed');
  $('.credential-status').text('Password Successfully Changed');
};

const changePasswordFailure = () => {
    $('.log').text('Please Try Again');
    $('.credential-status').text('Please Try Again');
};

const signOutSuccess = () => {
  $('.log').text('Successfully Signed Out. Sign In to Play Again!');
  $('.new').hide();
  $('#game-search').hide();
  $('#game-id').hide();
  $('.square').hide();
  $('.game-board').hide();
  $('.credential-status').text('Please Sign In or Sign Up!');
  $('.winner').text('');
};

module.exports = {
  changePasswordSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  changePasswordFailure,
  signOutSuccess,
  signUpSuccess,
};
