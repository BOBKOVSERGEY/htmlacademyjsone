//console.log(document.parentElement);

//console.dir(document.children);
console.log(document.children.length);

for (var i = 0; i < document.children.length; i++) {
  console.log(document.children[i].tagName);
}

//document.body.textContent = 'милый';


// назначаем атрибут
var elTitle = document.querySelector('.page__title');
console.log(elTitle);

// получаем содержимое атрибута
elTitle.setAttribute('style', 'color: white; border-bottom: 2px solid red');



console.log(elTitle.getAttribute('style'));

// добавляем класс
var elTitleClass = elTitle.className;
elTitle.className = elTitleClass + ' newClass';

// получаем id
var getId = elTitle.id;


console.log(getId);

var elInput = document.querySelector('input');
elInput.disabled = true;

console.log(elInput);

var elHeading = document.querySelector('h3');

// добавление классов
elHeading.classList.add('myClassOne', 'myClassTwo');
console.log(elHeading.className);