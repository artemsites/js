// // const animal = {
// //   name: 'Animal',
// //   age: 3,
// //   hasTail: true,
// // }

// class Animal {
//   static type = 'ANIMAL';

//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }

//   // Будет присутствовать в прототипе класса но не в созданном от него объекте
//   voice() {
//     console.log('I am ' + this.name + '!!!');
//   }
// }

// const animal = new Animal({
//   name: 'animal',
//   age: 3,
//   hasTail: true,
// });

// console.log(Animal.type);
// console.log(animal);
// console.log(animal.voice());/* наследуется из прототипа (class Animal) */


// class Cat extends Animal {
//   static type = 'CAT';

//   constructor(props) {
//     super(props);
//     this.color = props.color;
//   }

//   voice() {
//     super.voice();//можем вызвать метод унаследованного class Animal
//     console.log('Type: ' + Cat.type);
//   }

//   get ageInfo() {
//     return this.age;
//   }

//   set ageInfo(newAge) {
//     return this.age = newAge;
//   }
// }

// const cat = new Cat({
//   name: 'cat',
//   age: 1.5,
//   hasTail: true,
//   color: 'black',//это свойство уже можно присвоить благодаря constructor class Cat
// });

// console.log(cat);
// console.log(cat.voice());
// console.log(cat.ageInfo);
// console.log(cat.ageInfo = 10);

class Component {
  constructor(selector) {
    this.domEl = document.querySelector(selector);
  }

  hide() {
    this.domEl.style.display = 'none'; 
  }

  show() {
    this.domEl.style.display = 'block';
  }
}

class Box extends Component {
  constructor(props) {
    super(props.selector);

    this.domEl.style.width = this.domEl.style.height = props.size+'px';
    this.domEl.style.backgroundColor = props.color;
  }  
}

const box1 = new Box({
  selector: '#box1',
  size: 100,
  color: 'yellow',
});

const box2 = new Box({
  selector: '#box2',
  size: 150,
  color: 'green',
});


class Circle extends Box {
  constructor(props) {
    super(props);

    this.domEl.style.borderRadius = '50%';
  }
}

const circle1 = new Circle({
  selector: '#circle1',
  size: 125,
  color: 'red',
});