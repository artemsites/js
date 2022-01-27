// Map
// const map = new Map(//массивы обозначающие ключ - значение
//   [
//     [1, 'a'],
//   ]
// );

// console.log( map.get(1) );
// map.set(2, 'b');
// map.set(3, 'c').set(4, 'd');
// console.log(map);
// map.clear();
// console.log( map.has(21) );
// map.delete(1); 
// console.log(map.size);

// console.log(map.keys());
// console.log(map.entries());
// console.log(map.values());



const obj = {
  name: 'Artem',
  age: 32,
  job: 'frontend',
};

const entries = [//что-то наподобии ассоциативного массива в PHP
  ['name', 'Artem'],
  ['age', 32],
  ['job', 'frontend'],
];

// Object.entries() переводит объект в "ассоциативный" массив
// console.log(Object.entries(obj));//[ [ 'name', 'Artem' ], [ 'age', 32 ], [ 'job', 'frontend' ] ]

// Object.entries() переводит "ассоциативный" массив в объект
// console.log(Object.fromEntries(entries));//{ name: 'Artem', age: 32, job: 'frontend' }



// Структура Map ещё больше похожа на ассоциативный массив в PHP и в тоже время это больше похоже на объект
const map = new Map(entries);
// console.log(map);//{ 'name' => 'Artem', 'age' => 32, 'job' => 'frontend' }
// console.log(map.get('name'));//'Artem'

map
  .set('new-field', 10)
  .set(obj, 'Объект Артём ;-)')//тут в качестве ключа мы задаём объект!
  .set(NaN, '???');

// map.delete(NaN);

// console.log(map);
// console.log(map.has(NaN));//false
// console.log(map.size);//5, свойства length нет у него
// map.clear();
// console.log(map);

for (let ent of map) {
  // console.log(ent);
}

for (let [key, val] of map) {//по перебору автоматом выполняется map.entries() === Map Iterator
  // console.log(key, val);
}

for (let val of map.values()) {
  // console.log(val);
}

for (let key of map.keys()) {
  // console.log(key);
}

map.forEach((val, key, m) => {

});

// const array = [...map];//получить "ассоциативный" массив
const array = Array.from(map);//получить "ассоциативный" массив
// console.log(array);

// Перевод в обычный объект в котором, разумеется, объект как ключ не может быть и станет: "[object Object]"
const mapObj = Object.fromEntries(map.entries());//тут можно и не вызывать .entries() потому что он автоматом вызывается при попытке итерировать Map объект
// console.log(mapObj);



// Практическое применение объектов как ключей в Map
const users = [
  {name: 'Artem'},
  {name: 'Olesya'},
  {name: 'Daniel'},
];

const visits = new Map();

visits
  .set(users[0], new Date().getTime())
  .set(users[1], new Date().getTime()+2000*60)
  .set(users[2], new Date().getTime()+4000*60);
  
function getVisitTime(user) {
  return visits.get(user);
}

console.log(getVisitTime(users[1]));