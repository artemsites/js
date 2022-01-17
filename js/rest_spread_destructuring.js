// Rest
console.log('Rest');
function average(...args) {
  return args.reduce((acc, el) => acc+=el, 0) / arguments.length;
} 

console.log( average( 10,20,30,40,50 ) );



// Spread
console.log('Spread');
const array = [1,2,3,5,8];
console.log(...array);

console.log(Math.max(...array));
// console.log(Math.max.apply(null, array));//раньше

const fibonacci = [1, ...array];
console.log(fibonacci);



// Destructuring
console.log('Destructuring');
const arr = [1, null, 3, 5, 8];
// const [a, b, ...c] = arr;
// console.log(a, b, c);
const test = true;

const [a, , ...c] = arr;
console.log(a, c);

const address = {
  country: 'Russia',
  city: 'Samara',
  street: 'D.Donskogo',
  concat: function() {
    return `Hi! ${this.country}, ${this.city}, ${this.street}`;
  }
};

// console.log(address.concat());  

// const {city, country, street, concat} = address;
// console.log( concat.call(address) );

// const {city, country, street, concat: customNameConcat} = address;
// console.log( customNameConcat.call(address) );

// const {city, ...rest} = address;
// console.log(city);
// console.log(rest);

// const newAddress = {...address};
const newAddress = {...address, street: 'Tashkentskaya', test: 'test'};
console.log(newAddress);