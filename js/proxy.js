// const validator = {
//   get(target, prop) {
//     return prop in target ? target[prop] : `Поля ${prop} в объекте нет!`;
//   },
//   set(target, prop, value) {
//     if (value.length > 2) {
//       Reflect.set( target, prop, value );
//     } else {
//       console.log(`Длина должна быть более 2х символов. А сейчас ${value.length}`);
//     }
//   }
// }

// // const form = {
// //   login: 'test',
// //   password: 'c9O3q85tb398p5vtb37',
// // }

// // const formProxy = new Proxy( form, validator );
// // console.log( formProxy );
// // console.log(formProxy.username);

// // formProxy.password = '12';

// function log(message) {
//   console.log('Log: ', message);
// }

// const logProxy = new Proxy(log, {
//   apply(target, thisArg, argArray) {
//     if (argArray.length === 1) {
//       Reflect.apply(target, thisArg, argArray);
//     } else {
//       console.log('Кол-во аргументов не совпадает!');
//     }
//   }
// });

// logProxy('Custom message 1');
// logProxy('Custom message 2', 2);



// Object
// const person = {
//   name: 'Artem',
//   age: 32,
//   job: 'web frontend'
// };

// const objProxy = new Proxy(person, {
//   get(target, prop) {
//     console.log('Getting prop: ', prop);

//     if (!(prop in target)) {
//       return prop
//         .split('_')
//         .map(part => (target[part]))
//         .join(', ');
//     } 

//     return target[prop];
//   },
//   set(target, prop, val) {
//     if (prop in target) {
//       target[prop] = val;
//     } else {
//       throw new Error(`No ${prop} field in target`);
//     }
//   },
//   // Custom validation
//   has(target, prop) {//для проверок 'name' in op;//true
//     return ['age', 'name', 'job'].includes(prop)
//   },
//   deleteProperty(target, prop) {
//     console.log('Deleting '+prop);
//     delete target[prop];
//     return true;
//   }
// });



// Function
// const funcLog = text => `Log: ${text}`;

// const funcLogProxy = new Proxy(funcLog, {
//   apply(target, context, args) {
//     console.log('Calling fn...');
//     return target.apply(context, args).toUpperCase();
//   }
// });

// funcLogProxy('TEST');



// class Person {
//   constructor(props) {
//     this.name = props.name;
//     this.age = props.age;
//   }
// }

// const PersonProxy = new Proxy(Person, {
//   // Обработчики:
//   // Ловушка:
//   construct(target, props) {
//     console.log('Construct...');

//     return new Proxy(new target(props), {
//       get(tar, prop) {
//         console.log(`Getting prop "${prop}"`);
//         return tar[prop];
//       }
//     });
//   }
// });

// const personProxy = new PersonProxy({
//   name: 'Artem',
//   age: 32,
// });

// console.log(personProxy);



// Wrapper
// const withDefaultValue = (target, defaultValue = 0) => {//defaultValue для определения всех свойств которые не определены
//   return new Proxy(target, {//proxy handlers:
//     get: (obj, prop) => {
//       return (prop in obj) ? obj[prop] : defaultValue;
//     }
//   });
// }

// const position = withDefaultValue(
//   {
//     x: 12,
//     y: 24,
//   }
//   , 0);

// console.log(position);



// Hidden properties
// const withHiddenProperties = (target, prefix = '_') => {//тут мы делаем приватными те поля которые начинаются с "_"
//   return new Proxy(target, {//proxy handlers:
//     has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
//     ownKeys: obj => Reflect.ownKeys(obj)
//       .filter(p => !p.startsWith(prefix)),
//     get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0,
//   });
// }

// const data = withHiddenProperties({
//   name: 'Artem',
//   age: 32,
//   _uid: '19872r5b2178',
// });

// console.log(data);



// Optimization
const arrUserData = [
  { id: 1, age: 21, name: 'Вася', job: 'frontend' },
  { id: 2, age: 22, name: 'Петя', job: 'backend' },
  { id: 3, age: 23, name: 'Стёпа', job: 'designer' },
  { id: 4, age: 24, name: 'Клавдий', job: 'manager' },
];

// const res = arrUserData.find( user => (user.id === 2) );
// console.log(res); 

// const userById = {};
// arrUserData.forEach( user => (userById[user.id] = user) );

// console.log(userById[3]);//теперь мы можем получить user мз массива по id



// Проксирование класса Array для существенного ускорения поиска в массиве arrUserData по id
const IndexedArray = new Proxy(Array,/* - target class Array */ {//handlers:
  construct(target, [args]) {
    const index = {};
    args.forEach((it) => index[it.id] = it);

    return new Proxy(target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return it => {
              index[it.id] = it;
              arr[prop].call(arr, it);
            }
          case 'findById':
            return (id) => index[id];
          default:
            return arr[prop]
        }
      }
    });
  }
});

const users = new IndexedArray(arrUserData);

console.log(users);
console.log(users[3]);
console.log(users.findById[3]);