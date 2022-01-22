// const animal = {
//   name: 'Animal',
//   age: 3,
//   hasTail: true,
// }

class Animal {
  static type = 'ANIMAL';

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  // Будет присутствовать в прототипе класса но не в созданном от него объекте
  voice() {
    console.log('I am ' + this.name + '!!!');
  }
}

const animal = new Animal({
  name: 'animal',
  age: 3,
  hasTail: true,
});

console.log(Animal.type);
console.log(animal);
console.log(animal.voice());/* наследуется из прототипа (class Animal) */


class Cat extends Animal {
  static type = 'CAT';

  constructor(props) {
    super(props);
    this.color = props.color;
  }

  voice() {
    super.voice();//можем вызвать метод унаследованного class Animal
  }
}

const cat = new Cat({
  name: 'cat',
  age: 1.5,
  hasTail: true,
  color: 'black',//это свойство уже можно присвоить благодаря constructor class Cat
});

console.log(cat);
console.log(cat.voice());