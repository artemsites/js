// function createCalcFunction(n) {
//   return function() {
//     console.log( 1000 * n );
//   }
// }

// const fnCalc = createCalcFunction(12);
// fnCalc();



// function createIncrementor(a) {
//   return function(b) { 
//     return a + b;
//   }
// }

// const addOne = createIncrementor(1);//здесь вернулась функция внутри createIncrementor(1){}, единичка замыкается в верхнем уровне (scope) функции!
// console.log( addOne(2) );//здесь в вернувшуюся функцию передаём аргумент 2 и вызываем её!



function urlGenerator(domain) {
  return function(url) {
    return `https://${domain}/${url}`;
  }
}

const domainReq = urlGenerator('yandex.ru');
console.log(domainReq('search/?text=test'));