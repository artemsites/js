// const person = {
//   name: 'Artem',
//   age: 32,
//   greet: function() {
//     console.log('Greet!!!');
//   }
// };

const person = new Object({
  name: 'Artem',
  age: 32,
  greet: function() {
    console.log('Greet!!!');
  }
});

console.log( person );

//Расширение базового прототипа Object
Object.prototype.sayHello = function() {
  console.log('Hello!!!');
}

person.sayHello();

//Создание объекта по прототипу другого объекта
const olesya = Object.create( person );
console.log(olesya);
olesya.greet();

olesya.name = 'Олеся';
// console.log(olesya.name);

const str = new String( 'Test!' ); 