class Person {
  constructor(name) {
    this.name = name;
  }

  type = 'human';

  greet() {
    console.log(this.name + ' говорит привет!');
  }
}

const max = new Person('Max');
console.log(max);
console.log(max.type);
console.log(max.greet());

console.log(max.__proto__ === Person.prototype);



class Programmer extends Person {
  constructor(name, job) {
    super(name);

    this._job = job;
  }
  
  get job() {
    return this._job.toUpperCase();
  }

  set job(job) {
    if (job.length < 2) {
      throw new Error('Название профессии слишком мало!');
    }
    this._job = job;
  }

  greet() {//переопределение метода
    super.greet();//вызов метода базового класса Person
    console.log(this.name + ' говорит: я прогер '+this.job+'!!!');//дополнительный функционал
  }
}

const frontender = new Programmer('Боря', 'frontend');

console.log(frontender);
console.log(frontender.greet());
console.log(frontender.job);
// console.log( frontender.job = 'back' );
// console.log( frontender.job );



// Static 
class Util {
  static average(...args) {
    return args.reduce((acc, el) => acc+el, 0) / args.length;
  }
}

console.log( Util.average(1,1,2,3,5,8) );