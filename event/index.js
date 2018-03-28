'use strict';
// первый стиль inputClickHandler
// второй стиль onInputClick

var setupOpen = document.querySelector('.setup-open'),
    setup = document.querySelector('.setup'),
    close = setup.querySelector('.close'); // ищем в setup

setupOpen.addEventListener('click', function () {
  setup.classList.toggle('hidden'); // удаляем/добавляем класс
}, false);
close.addEventListener('click', function () {
  setup.classList.add('hidden'); // добавляем класс
})

document.addEventListener('click', function (e) {
  console.log(e.target);
})