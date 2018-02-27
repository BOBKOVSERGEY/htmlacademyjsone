var calculateDistance = function (time, speedOfFirstCycle, speedOfSecondCycle) {
  // Алгоритм
  // 1. Найти расстояние, которое проехал первый велосипедист,
  // умножив скорость на время

  // запускаем режим отладки
  //debugger;


  var distanceOfFirstCycle = speedOfFirstCycle * time;

  // 2. Найти расстояние которое проехал второй велосипедист
  var distanceOfSecondCycle = speedOfSecondCycle * time;

  // 3. Сложить полученные растояния
  var totalDistance = distanceOfFirstCycle + distanceOfSecondCycle;

  return totalDistance;
}

var measureUnit = 'км';

console.log('Расстояние между первыми поселками: ' + calculateDistance(3, 12, 14) + measureUnit);
console.log('Расстояние между вторыми поселками: ' + calculateDistance(5, 1, 2) + measureUnit);

// рекурсия
var washNextItem = function (itemsLeft) {
  itemsLeft--;
  console.log('В раковине осталось ' + itemsLeft + ' предметов');

  if (itemsLeft > 0) {
    washNextItem(itemsLeft);
  }
};

washNextItem(10);

var washItems = function (itemsLeft) {
  while (itemsLeft-- > 0) {
    //debugger;
    console.log('В раковине осталось ' + itemsLeft + ' предметов');
  }
};
washItems(10);

window.addEventListener('load', function () {
  // тут код
});
var numbers = [1,2,3,4,5,6,6];
var number = Math.floor(Math.random() * numbers.length);

console.log(number);

// двумерные массивы
var bag = [
  ['посох', 'Кулак'],
  ['Файрбол', 'Молния', 'Стрела'],
  ['Заклинание', 'Проклятие']
];

console.log(bag[1][2]);