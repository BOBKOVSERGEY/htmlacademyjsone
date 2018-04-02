'use strict';
// первый стиль inputClickHandler
// второй стиль onInputClick

var setupOpen = document.querySelector('.setup-open'),
    setup = document.querySelector('.setup'),
    close = setup.querySelector('.close'), // ищем в setup
    cart = document.querySelector('.cart'),
    ESC_KEYCOSE = 27,
    ENTER_KEYCODE = 13;

cart.addEventListener('click', function (e) {
  e.preventDefault();
})


var onPopupEscPress = function (e) {
  //если нажали esc
  if (e.keyCode === ESC_KEYCOSE) {
    setup.classList.add('hidden'); // удаляем/добавляем класс
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  // события нажатия на клавиши
  document.addEventListener('keydown', onPopupEscPress)
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress)
};


setupOpen.addEventListener('click', function (e) {
  openPopup();
});

setupOpen.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
})

close.addEventListener('click', function () {
  closePopup();
});
close.addEventListener('keydown', function (e) {
  closePopup();
});




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


