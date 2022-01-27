let obj = {
  name: 'weakMap'
};

// В WeakMap ключами могут быть только объекты, из методов есть только get() set() delete() has()
// WeakMap не позволяет наблюдать за живучестью своих ключей, поэтому не допускает перечисления;
const map = new WeakMap([
  [obj, 'Object data']
]);
console.log(map.has(obj));//true

obj = null;//после этого ссылка на объект оборвалась, сборщик мусора удалил этот объект

console.log(map.has(obj));//false ну это логично