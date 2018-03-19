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
elHeading.classList.add('myClassOne', 'myClassTwo', 'myClassThree');

// удаление классов
//elHeading.classList.remove('myClassTwo');

// переключение классов
elHeading.classList.toggle('myClassTwo', true);

console.log(elHeading.classList.contains('myClassTwo'));
console.log(elHeading.className);

// доступ к стилям элемента
elHeading.style.background = 'red';

elHeading.style.margin = '10px';

console.log(elHeading.style.margin);

elHeading.style.margin = parseInt(elHeading.style.margin, 10) + 10 + 'px';
console.log(elHeading.style.margin);


// новые комментарии


var pools = document.querySelectorAll('.pool');
var blocks = document.querySelectorAll('.el');

// можем удолить элемент из dom
//blocks[0].remove();
console.log(pools);
console.log(blocks);
console.log(blocks[0]);
pools[1].appendChild(blocks[0]);

pools[1].appendChild(blocks[1]);
pools[1].appendChild(blocks[0]);


pools[1].insertBefore(blocks[3], blocks[0]); // вставка в середину


var replaced = pools[0].replaceChild(blocks[2], blocks[4]); // замена

pools[0].appendChild(replaced);
pools[0].appendChild(blocks[0].cloneNode(true));

var increaseBy2 = function (val) {
  val += 2;
  return val;
}

var two = 2;

console.log(increaseBy2(6));

var increaseByObj2 = function (obj) {
  obj.prop += 2;
  return obj;
}

var myObject = {
  prop: 2
};
console.log(myObject.prop);
console.log(increaseByObj2(myObject));

console.log(myObject.prop);

var foo = {
  a: 1
}

var bar = foo;

foo.a++;
console.log('bar a: ' + bar.a);

var description = document.querySelector('.stringtext');

console.log(description.innerHTML); // возвращает всю разметку
console.log(description.textContent); // возвращает толко текстовое содержимое

var elLogin = document.querySelector('.login');
elLogin.innerHTML = 'Pet';