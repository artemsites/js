class Student {
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

class ProtoStudent {
  university = 'SGASU';
}

//Создание объекта от класса Student только с прототипом другого класса ProtoStudent 
// const student = Reflect.construct(Student, ['Artem'], ProtoStudent);
// console.log( student.__proto__ === ProtoStudent.prototype );

const student = Reflect.construct(Student, ['Artem']);

//Запуск метода объекта с другим контекстом, третий параметр набор аргументов для вызываемого метода .greet()
Reflect.apply( student.greet, {name: 'Tester'}, [] ); 
console.log( Reflect.ownKeys(student) );//name

//Блокировка модификации объекта
Reflect.preventExtensions( student );
console.log( 'Reflect.isExtensible(student): ', Reflect.isExtensible(student) );
student.age = 30;
console.log(student);