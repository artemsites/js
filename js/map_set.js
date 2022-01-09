// Map
const map = new Map(
  [
    [1, 'a'],
  ]
);

// console.log( map.get(1) );
map.set(2, 'b');
map.set(3, 'c').set(4, 'd');
// console.log(map);
// map.clear();
// console.log( map.has(21) );
// map.delete(1); 
// console.log(map.size);

// console.log(map.keys());
// console.log(map.entries());
// console.log(map.values());



// Set - устанавливает только уникальные значения
const set = new Set([ 1,1,2,2,3,5,8,8,5,3,2,1 ]);
console.log(set);
console.log(set.size);
console.log(set.add(13));
// set.clear();
// set.delete(1);
console.log(set);

console.log(set.keys());
console.log(set.entries());
console.log(set.values());