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

if(number){
  if(!localStorage.getItem(key)) {
    localStorage.setItem(key, 0);
    number.innerHTML = 0;
  } else {
    number.innerHTML = localStorage.getItem(key);
  }
}

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  number.innerHTML = parseInt(number.innerHTML) + 1;
  localStorage.setItem(key, number.innerHTML);

});

deleteButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(number.innerHTML>0){
    number.innerHTML = parseInt(number.innerHTML) - 1;
    localStorage.setItem(key, number.innerHTML);
  }
});

let nextValue;
for (let i = 0; i < localStorage.length; i++){
    nextValue = localStorage.getItem(localStorage.key(i));
    console.log(`${localStorage.key(i)} ${nextValue}`);
}