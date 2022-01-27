const users = [
  {name: 'Artem'},
  {name: 'Olesya'},
  {name: 'Daniel'},
];

// WeakSet является слабым, то есть ссылки на объекты в WeakSet хранятся слабо. Если других ссылок на объект, хранящийся в WeakSet, не существует, эти объекты могут быть удалены сборщиком мусора.
const visits = new WeakSet();//WeakSet как и WeakMap хранит в себе ключи в виде объектов

visits.add(users[0]).add(users[1]);

users.splice(1, 1);//в первом индексе удаляем 1 элемент //splice(start, deleteCount, item1, item2, itemN)

console.log( visits.has(users[0]) );//true
console.log( visits.has(users[1]) );//false