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
const history = document.querySelector('.history--js');
const closeIcon = document.querySelector('.history__icon');
const key = currentDate();

function currentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const current = `${dd}/${mm}/${yyyy}`;
  return current;
}

checkTableData('assa')

function checkTableData(data) {
  const regex = new RegExp('\\d{2}/\\d{2}/\\d{4}')
  if (data.match(regex)) {
    return true
  }
}




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
  //window.location.reload(true);
  localStorage.getItem(key);
});

deleteButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(number.innerHTML>0){
    number.innerHTML = parseInt(number.innerHTML) - 1;
    localStorage.setItem(key, number.innerHTML);
  }
  window.location.reload(true);
});

const table = document.querySelector('.body--js');
historyButton.addEventListener('click', (e) => {
  e.preventDefault();
  history.classList.add('history--visible');
  if (table) {
    for (let i = 0; i < localStorage.length; i++) {
      let value = localStorage.getItem(localStorage.key(i));
      if (checkTableData(key)){
        table.innerHTML = `<tr class="body__row">
                              <td class="body__data">${localStorage.key(i)}</td>
                              <td class="body__data">${value}</td>
                            </tr>`;
      }
    }
  }
});

closeIcon.addEventListener('click', (e) => {
  e.preventDefault();
  history.classList.remove('history--visible');
});


if (table) {
  for (let i = 0; i < localStorage.length; i++) {
    let value = localStorage.getItem(localStorage.key(i));
    if (checkTableData(key)){
      table.innerHTML += `<tr class="body__row">
                            <td class="body__data">${localStorage.key(i)}</td>
                            <td class="body__data">${value}</td>
                          </tr>`;
    }
  }
}