// Set - устанавливает только уникальные значения
// const set = new Set([ 1,1,2,2,3,5,8,8,5,3,2,1 ]);
// console.log(set);
// console.log(set.size);
// console.log(set.add(13));
// // set.clear();
// // set.delete(1);
// console.log(set);

// console.log('set.keys(): ', set.keys());
// console.log('set.values(): ', set.values());
// console.log('set.entries(): ', set.entries());



// Set хранит в себе значения без дубликатов, ключи и значения в едином экзэмпляре
// const set = new Set( [1, 1, 2, 2, 3, 5, 8] );
// console.log(set);//Set(5) { 1, 2, 3, 5, 8 }

// set
//   .add(13)
//   .add(21)
//   .add(21);//этот дублирующий уже не установится
// console.log(set);//Set(7) { 1, 2, 3, 5, 8, 13, 21 }
// console.log(set.has(8));//true
// console.log(set.size);//7, кол-во также как в Map
// // console.log(set.clear());//очистка также как в Map

// set.add([3, 'three'])
// console.log(set.entries());//Set Iterator, это похоже на .entries() в Map это скорее всего сделано для совместимости и перевода одного в другое 
/*
[Set Entries] {
  [ 1, 1 ],
  [ 2, 2 ],
  [ 3, 3 ],
  [ 5, 5 ],
  [ 8, 8 ],
  [ 13, 13 ],
  [ 21, 21 ],
  [ [ 3, 'three' ], [ 3, 'three' ] ]
}
*/



// Set можно использовать для получения уникальных значений
function uniqValues(array) {
  return Array.from(new Set(array));
}
console.log(uniqValues([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7]));//[ 1, 2, 3, 4, 5, 6, 7 ]