// function* generator(num = 4) {
//   for (let i=0; i<num; i++) {
//     try {
//       yield i;      
//     } catch (error) {
//       console.log('Error: ', error);
//     }
//   }
// }

// const iter = generator(3);
// console.log(iter.next());
// console.log(iter.throw('My error'));
// console.log(iter.next());
// console.log(iter.next());

// for (let it of generator(5)) {
//   console.log(it);
// }



// Функция генератор
// function* strGenerator() {
//   // Порционно выдаёт результат
//   yield 'H';
//   yield 'e';
//   yield 'l';
//   yield 'l';
//   yield 'o';
//   yield '!';
// }

// const str = strGenerator();
// console.log(str);
// console.log( str.next() );//выдать следующий реультат генератора



// Функция генератор
// function* numGen(num = 10) {
//   for (let i = 0; i < num; i++) {
//     yield i;
//   }
// }

// const num = numGen(7);
// console.log( num.next() );//выдать следующий реультат генератора



// Свой генератор
// const iterator = {
//   gen(n = 10) { 
//     let i = 0;

//     return {
//       next() {
//         if (i < n) {
//           return {
//             value: ++i,
//             done: false
//           }
//         }
//         return {
//           value: undefined,
//           done: true
//         }
//       }
//     }
//   }
// }

// const itr = iterator.gen();
// console.log( itr.next() );



// Свой генератор (итерируемый благодаря Symbol.iterator)
// const iterator = {
//   [Symbol.iterator](n = 10) { 
//     let i = 0;

//     return {
//       next() {
//         if (i < n) {
//           return {
//             value: ++i,
//             done: false
//           }
//         }
//         return {
//           value: undefined,
//           done: true
//         }
//       }
//     }
//   }
// }

// for (let it of iterator) {
//   console.log(it);
// }



function* iter(num = 10) {
  for (let i = 0; i < num; i++) {
    yield i;
  }
}

console.log(iter());

for (let it of iter(7)) {
  console.log(it);
}