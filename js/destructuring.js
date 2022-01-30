/************************************ Destructuring ***********************************/
// Destructuring (деструктуризация) - это разложение массива или объекта на переменные в другом массиве или объекте
// const numbers = [1, 2, 3, 4, 5];
// const [a, b, ...other] = numbers;//...other - это Rest оператор который создаёт массив other со всеми остальными переменными сверх заданных (a, b)
// console.log(a, b, other);//1, 2, [3, 4, 5]



// Ещё деструктуризация
// const obj = {
//   name: 'Artem',
//   age: 32,
//   city: 'Samara',
//   country: 'Russia'
// };
// const {name, age, ...otherProps} = obj;//other это Rest который создаёт объект с остаточными свойствами объекта
// console.log(name, age, otherProps);//Artem 32 { city: "Samara", country: "Russia" }



// const arr = [1, null, 3, 5, 8];

// const [a, b, ...c] = arr;//здесь идёт деструктуризация arr, а ...c это Rest который собирает оставшиеся значения из массива arr
// console.log(a, b, c);

// const [a, , ...c] = arr;//1 [3, 5, 8]//null из arr пропускается потому что мы не поставили имя переменной 
// console.log(a, c);

// const address = {
//   country: 'Russia',
//   city: 'Samara',
//   street: 'D.Donskogo',
//   concat: function() {
//     return `Hi! ${this.country}, ${this.city}, ${this.street}`;
//   }
// };

// // console.log(address.concat());  

// // const {city, country, street, concat} = address;
// // console.log( concat.call(address) );

// // const {city, country, street, concat: customNameConcat} = address;
// // console.log( customNameConcat.call(address) );

// // const {city, ...rest} = address;
// // console.log(city);
// // console.log(rest);

// // const newAddress = {...address};
// const newAddress = {...address, street: 'Tashkentskaya', test: 'test'};
// console.log(newAddress);



// // Деструктуризация массива (который возвращается из функции)
// function calc(a, b) {
//   return [
//     a + b,
//     undefined,
//     a * b,
//     a / b
//   ];
// }
// const [sum, sub='Вычитания нет!', mult, ...other] = calc(50, 2);//...other это оператор Rest который собирает оставшиеся значения в массив
// console.log(sum, sub, mult, other);//52 'Вычитания нет!' 100 [ 25 ]



const art = {
  name: 'Artem',
  age: 32,
  job: 'frontend',
  address: {
    country: 'Russia',
    city: 'Samara',
    street: 'Dmitriya Donskogo'
  }
};

// const {name} = art;//то же что и: const name = art.name;
// const { 
//   car = 'skoda',//в деструктуризации можно добавить значение по умолчанию (car = 'Skoda')
//   name: firstName = 'без имени',//в деструктуризации можно переменную положить в другое название (name: firstName) тут name мы положили в firstName
//   age,
//   address: {
//     city: town,
//     country
//   }
// } = art;
// // console.log(country, town, firstName, age, car);//name мы положили в firstName

// const {name, ...other} = art;//...other это Rest оператор который собирает оставшиеся значения в объект
// console.log(name, other);



// Деструктуризация в параметрах функции, это бывает и при разработке на React при приёме props сразу же их деструктуризировать на переменные
function logPerson({name: firstName = 'нет имени', age, ...other}) {//name: firstName - тут мы делаем деструктуризацию в другое название переменной, а также добавляем значение по умолчанию: firstName = 'нет имени'
  console.log(firstName, age, other);
}
logPerson(art);