const people = [
  { name: 'Sergey', age: 52, budget: 550000 },
  { name: 'Elena', age: 52, budget: 550000 },
  { name: 'Danif', age: 48, budget: 50000 },
  { name: 'Viliya', age: 48, budget: 20000 },
  { name: 'Artem', age: 32, budget: 3000 },
  { name: 'Olesya', age: 28, budget: 500 },
  { name: 'Daniel', age: 9, budget: 1 },
  { name: 'Somebody', age: 17, budget: 150 },
];

// for (let it of people) {
//   console.log(it);
// }



// Декларативной функцией:
// people.forEach(function(item, i, arr) {//i & arr необязательны
//   console.log(item);
//   // console.log(i);
//   // console.log(arr);
// });

// Стрелочной функцией:
// people.forEach( (item) => console.log(item) );



// Map нужен для создания нового массива путём перебора и модификации существующего
// const newPeople = people.map(function(item) {
//   // return item.name;//например можно создать массив только имён
//   return `${item.name} (${item.age})`;//например можно создать маccив имён и возраста в скобках
// });

// console.log(newPeople);



// Filter нужен для создания нового массива путём фильтрации существующего
// Декларативной функцией:
// const adultsPeople = people.filter(function (item, i, arr) {
//   if (item.age >= 18) return true;
// });
// console.log(adultsPeople);

// Стрелочной функцией:
// const adultsPeople = people.filter( (item) => (item.age >= 18) );
// console.log(adultsPeople);



// Reduce для получения единого значения по перебору массива и аккумулированию единого значения
// Декларативной функцией:
// let amount = people.reduce(function(total, item) {
//   return total += item.budget;
// }, 0);//0 - здесь мы задаём начальное значение для параметра total
// console.log(amount);

// Стрелочной функцией:
// let amount = people.reduce((total, item) => (total += item.budget), 0);
// console.log(amount);



// Find - поиск элемента в массиве
// const findMan = people.find(item => (item.name === 'Artem'));
// console.log(findMan);



// FindIndex - поиск индекса в массиве
const findManIndex = people.findIndex(item => (item.name === 'Artem'));
console.log(findManIndex);