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
  //e.stopPropagation(); // останавливаем всплытие

  // события нажатия на клавиши
  document.addEventListener('keydown', function (e) {

    //если нажали esc
    if (e.keyCode === 27) {
      setup.classList.add('hidden'); // удаляем/добавляем класс
    }

  })

});
close.addEventListener('click', function () {
  setup.classList.add('hidden'); // добавляем класс
})

document.addEventListener('click', function (e) {
  var elClass = e.target.className;
  var attrHref = e.target.href;
  console.log(elClass);
  //console.log(attrHref);
});

// валицация форм
var userNameInput = document.querySelector('.form__input');
userNameInput.addEventListener('invalid', function (e) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-x символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  }
})


