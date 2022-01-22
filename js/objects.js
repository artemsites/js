// Objects
// const job = 'frontend';

// const person = {
//   age: 26, 
//   name: 'Боря',
//   'country-live': 'Russia',
//   // job: job,
//   job,
//   print: () => 'person',//такие методы не работают с контекстом
//   toString: function() {//такие методы работают с контекстом
//     return Object
//       .keys(this)
//       .filter(key => key !== 'toString')
//       .map(key => this[key])
//       .join(', ')
//   },
// }

// console.log(person.print());
// console.log(person.toString());
// console.log(person);

// Methods
// const first = {a: 1};
// const second = {b: 2};

// // console.log(Object.is(10, 10));
// console.log(Object.assign(first, second));//в first добавляется seconed, second не изменяется
// console.log(first);//в first добавляется seconed
// console.log(second);//second не изменяется

// const obj = Object.assign({}, first, {//first уже изменённый
//   c: 3,
//   d: 4
// });
// console.log(obj);
// console.log( Object.entries( obj ) );
// console.log( Object.keys( obj ) );
// console.log( Object.values( obj ) );



const person = Object.create({
  // Первый объект это прототип для создаваемого объекта
  calculateAge() {
    return new Date().getFullYear() - this.birthYear;
  }
}, {
  name: {
    value: 'Artem',
    // По умолчанию false
    enumerable: true,//с этим параметром ключи становятся перебираемыми в циклах, например for (let i in person) {}
    // По умолчанию false
    writable: true,//указывает можно ли перезаписать данное свойство
    // По умолчанию false
    configurable: true,//позволяет удалять свойство из объекта 
  },
  birthYear: {
    value: 1989,
    // По умолчанию false
    enumerable: false,//с этим параметром ключи становятся перебираемыми в циклах, например for (let i in person) {}
    // По умолчанию false
    writable: false,//указывает можно ли перезаписать данное свойство
    // По умолчанию false
    configurable: false,//позволяет удалять свойство из объекта 
  },
  test: {
    value: function test() {
      console.log('TEST!');
    },
    enumerable: false,
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthYear;
    },
    set(age) {
      console.log('Set age', age);
    },
  }
});


console.group('Person: ');
console.log(person);
console.log(person.age);
console.log(person.calculateAge());
console.log(person.test());
console.groupEnd();


console.group('for in hasOwnProperty: ');
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    // Выведет только собственные свойства и методы (не выведет свойства и методы прототипа, а так-же не выведет свойства и методы у которых enumerable = false)
    console.log('Key: ', key, person[key]);//Key:  name Artem
  }
}
console.groupEnd();