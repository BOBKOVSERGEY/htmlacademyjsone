var calculateDistance = function (time, speedOfFirstCycle, speedOfSecondCycle) {
  // Алгоритм
  // 1. Найти расстояние, которое проехал первый велосипедист,
  // умножив скорость на время
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