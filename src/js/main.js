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
const key = new Date().toISOString().slice(0, 10);
let glass = 0;

if(localStorage.getItem(key)) {
  number.innerHTML = localStorage.getItem(key);
} else {
  localStorage.setItem(key, glass);
  number.innerHTML = glass;
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  glass++;
  localStorage.setItem(key, glass);
  number.innerHTML = glass;
});

deleteButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(glass>0){
    glass--;
    localStorage.setItem(key, glass);
    number.innerHTML = glass;
  }
});