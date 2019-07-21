"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const number = document.querySelector('.counter__number--js');
const addButton = document.querySelector('.buttons__add--js');
const deleteButton = document.querySelector('.buttons__delete--js');
const historyButton = document.querySelector('.buttons__history--js');

