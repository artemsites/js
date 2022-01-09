const symbol = Symbol('test');
const otherSymbol = Symbol('test');

// console.log(symbol);
// console.log(otherSymbol);

const obj = {
  name: 'Olesya',
  demo: 'test',
  [symbol]: 'meta data',

};

// console.log(obj[symbol]);

for (let key in obj) {
  console.log(key);
}



const array = [10, 20, 30, 40];
const str = 'Hello';

console.log(array[Symbol.iterator]);
console.log(str[Symbol.iterator]);

const arrIter = array[Symbol.iterator]();
const iterStr = str[Symbol.iterator]();

console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());
console.log(arrIter.next());

console.log(iterStr.next());
console.log(iterStr.next());
console.log(iterStr.next());
console.log(iterStr.next());
console.log(iterStr.next());

// for (let i of array) {
//   console.log(i);
// }

const countries = {
  values: ['ru', 'kz', 'ua', 'by'],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        const value = this.values[i];
        i++;
        return {
          done: i > this.values.length,
          value: value,
        }
      },
    } 
  }
};

for (let it of countries) {
  console.log(it);
}