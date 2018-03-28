'use strict';
// первый стиль inputClickHandler
// второй стиль onInputClick

var setupOpen = document.querySelector('.setup-open'),
    setup = document.querySelector('.setup'),
    close = setup.querySelector('.close'), // ищем в setup
    cart = document.querySelector('.cart');

cart.addEventListener('click', function (e) {
  e.preventDefault();
})

setupOpen.addEventListener('click', function (e) {
  setup.classList.toggle('hidden'); // удаляем/добавляем класс
  e.stopPropagation(); // останавливаем всплытие
});
close.addEventListener('click', function () {
  setup.classList.add('hidden'); // добавляем класс
})

document.addEventListener('click', function (e) {
  var elClass = e.target.className;
  var attrHref = e.target.href;
  console.log(elClass);
  console.log(attrHref);
})