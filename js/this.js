//this - указывает на текущий контекст
function hello() {
  console.log( 'Hello!', this );
}
// hello();

const person = {
  name: 'Artem',
  age: 32,
  sayHello: hello,
  sayHelloGlobal: hello.bind(global),
  // sayHelloGlobal: hello.bind(window),
  logInfo(job, phone) {
    console.group(`Info of object ${this.name}: `);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  }
}
// person.sayHello();
// person.sayHelloGlobal();
// person.logInfo();

const olesya = {
  name: 'Олеся',
  age: 28,
};

//Метод .bind() не вызывает функцию он возвращает функцию с новым контекстом, чтобы её тут же вызвать нужно вызвать вернувшуюся функцию ()
// person.logInfo.bind(olesya)();

// const fnOlesyaLog = person.logInfo.bind(olesya);
// fnOlesyaLog('Ya.Support', 89171111111);

// const fnOlesyaLog = person.logInfo.bind(olesya, 'Ya.Support', 89171111111);
// fnOlesyaLog();

// person.logInfo.bind(olesya, 'Ya.Support', 89171111111)();

//Метод .call() не возвращает функцию он её сразу вызывает с новым контекстом!
// person.logInfo.call(olesya, 'Ya.Support', 89171111111);

//Метод .apply() не возвращает функцию он её сразу вызывает с новым контекстом, но аргументы передаются массивом!
// person.logInfo.apply(olesya, ['Ya.Support', 89171111111]);

const arr = [1,2,3,4,5];

// function multiply(arr, num) {
//   return arr.map((it)=>{
//     return it * num;
//   });
// }

// console.log( multiply(arr, 5) );

Array.prototype.multiply = function(num) {
  return this.map((it)=>{
    return it * num;
  });
}

console.log( arr.multiply(5) );