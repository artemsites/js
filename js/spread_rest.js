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