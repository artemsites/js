// В любом месте программы можно поставить console.trace(); чтобы узнать call stack который был вызван до этого места
console.trace();



// В консоли можно обратиться к узлу DOM
$('#box1')//как в jquery
$0//выделенный узел в "Inspector"



// Представление о переменной в удобочитаемой таблице
console.table(variable);



// Для измерения скорости участка кода:
console.time('timer');//id timer может быть любым
// Какой-то код скорость которого мы хотим подсчитать
console.timeEnd('timer');//id timer может быть любым



// document.addEventListener('DOMContentLoaded', () => {
//   const a = 3;
//   const b = 2;
//   const c = a * b;
//   console.log(c);
// });