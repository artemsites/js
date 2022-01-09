// Objects
const job = 'frontend';

const person = {
  age: 26, 
  name: 'Боря',
  'country-live': 'Russia',
  // job: job,
  job,
  print: () => 'person',//такие методы не работают с контекстом
  toString: function() {//такие методы работают с контекстом
    return Object
      .keys(this)
      .filter(key => key !== 'toString')
      .map(key => this[key])
      .join(', ')
  },
}

// console.log(person.print());
// console.log(person.toString());
// console.log(person);

// Methods
const first = {a: 1};
const second = {b: 2};

// console.log(Object.is(10, 10));
console.log(Object.assign(first, second));//в first добавляется seconed, second не изменяется
console.log(first);//в first добавляется seconed
console.log(second);//second не изменяется

const obj = Object.assign({}, first, {//first уже изменённый
  c: 3,
  d: 4
});
console.log(obj);
console.log( Object.entries( obj ) );
console.log( Object.keys( obj ) );
console.log( Object.values( obj ) );