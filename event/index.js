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

// перетаскивание drag
var elDrag = document.querySelector('.drag__item');
var dialogHandler = document.querySelector('.drag__item-bars');

// событие клика на лев клавишу
dialogHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var onMouseMove = function (moveEvent) {
    moveEvent.preventDefault();

    var shift = {
      x: startCoords.x - moveEvent.clientX,
      y: startCoords.y - moveEvent.clientY
    };
    startCoords = {
      x: moveEvent.clientX,
      y: moveEvent.clientY
    };
    elDrag.style.top = (elDrag.offsetTop - shift.y) + 'px';
    elDrag.style.left = (elDrag.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('mousemove', onMouseMove); // перемещаем объект
  document.addEventListener('mouseup', onMouseUp); // отпускаем мышь
});

// drag-and-drop
var shopElement = document.querySelector('.drag__item');
var draggedItem = null;

shopElement.addEventListener('dragstart', function (e) {

    draggedItem = e.target ;

});

var artifactsElement = document.querySelector('.drag-drop__item');

artifactsElement.addEventListener('dragover', function (e) {
  e.preventDefault();
  return false;
});

artifactsElement.addEventListener('drop', function (e) {
  e.target.style.background = '';
  e.target.appendChild(draggedItem);
  e.preventDefault();
});
artifactsElement.addEventListener('dropdragenter', function (e) {
  e.target.style.background = 'yellow';
  e.preventDefault();
});
artifactsElement.addEventListener('dragleave', function (e) {
  e.target.style.background = '';
  e.preventDefault();
})
