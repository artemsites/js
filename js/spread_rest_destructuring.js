/************************************** Spread *************************************/
// Spread (...) - разворачивает массив или объект или NodeList...
// console.log('Spread');
// const arrayNum = [1, 1, 2, 3, 5, 8];
// const arrayStr = ['a', 'b', 'c', 'd', 'e', 'f'];
// [a, b, c, d, e, f] = [...arrayNum];//создали новый массив и внутри Spread присвоили его элементы переменным в другом массиве
// console.log(a);//1
// console.log(b);//1
// console.log(c);//2
// const newArrayNum = [...arrayNum];//создали новый массив и развернули его в новую переменную, то есть мы не ссылку на массив скопировали, а новый массив создали идентичный

// const newArray = [...arrayNum, 'TEST', ...arrayStr];//[1, 1, 2, 3, 5, 8, "TEST", "a", "b", "c", "d", "e", "f"]//можно несколько массивов развернуть
// const newArray2 = arrayNum.concat(arrayStr);//раньше это делалось так (неочень наглядно)
// console.log(newArray);

// console.log(Math.max(...arrayNum));//можно разложить массив на аргументы функции
// console.log(Math.max.apply(null, arrayNum));//раньше так делали



// const obj1 = {
//   Artem: 32,
//   Olesya: 28,
//   Dan: 9,
// };
// const obj2 = {
//   Danif: 48,
//   Dan: 30,
//   Viliya: 48,
// };
// // Spread у объектов
// // console.log({ ...obj1 });//создаём объект и в нём раскладываем внутренности объекта obj1, то есть создаём копию

// const objConcat = { ...obj1, ...obj2 };//конкатинация объектов, одинаковые ключи (Dan) будут перезаписаны последним объектом!
// console.log(objConcat);



// const divs = document.querySelectorAll('div');
// console.log(divs);
// const arrNodes = [...divs];//создаём массив и раскладываем в нём элементы с помощью Spread (...)
// // Или:
// const objNodes = {...divs};//создаём объект и раскладываем в нём элементы с помощью Spread (...)
// console.log(arrNodes);//[ div#box1, div#box2, div#circle1 ]



/************************************** Rest **************************************/
// Rest - собирает все аргументы функции сверх заданных, в массив или 
// function sum(a, b, ...arRest) {//1, 2, [3, 4, 5]
//   console.log(arRest);//[3, 4, 5]
//   return a + b + arRest.reduce((acc, it) => acc + it, 0);//1+2, затем reduce() обходит массив и возвращает аккумулятор (единое значение acc) которому изначально задали значение 0, 3+4+5=12
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(sum(...numbers));//Spread! - тут мы раскладываем массив на аргументы функции!


// console.log('Rest');
// function average(...args) {
//   return args.reduce((acc, el) => acc+=el, 0) / arguments.length;
// } 

// console.log( average( 10,20,30,40,50 ) );



/************************************ Destructuring ***********************************/
// Destructuring (деструктуризация) - это разложение массива или объекта на переменные в другом массиве или объекте
// const numbers = [1, 2, 3, 4, 5];
// const [a, b, ...other] = numbers;//...other - это Rest оператор который создаёт массив other со всеми остальными переменными сверх заданных (a, b)
// console.log(a, b, other);//1, 2, [3, 4, 5]



// Ещё деструктуризация
const obj = {
  name: 'Artem',
  age: 32,
  city: 'Samara',
  country: 'Russia'
};
const {name, age, ...otherProps} = obj;//other это Rest который создаёт объект с остаточными свойствами объекта
console.log(name, age, otherProps);//Artem 32 { city: "Samara", country: "Russia" }



// console.log('Destructuring');
// const arr = [1, null, 3, 5, 8];
// // const [a, b, ...c] = arr;
// // console.log(a, b, c);
// const test = true;

// const [a, , ...c] = arr;
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