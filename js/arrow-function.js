// Arrow functions () => {}
// У стрелочной функции контекст смотрит наружу функции (как бы не имеет своего контекста), а в обычной функции контекст смотрит на саму функцию (внутрь)
const person = {
  name: 'Артём',
  age: 30,
  delayLog: function() {
    // const self = this
    // setTimeout(function() {
    //   console.log(self.name + ' ' + self.age);
    // }, 1000)
    // OR:
    setTimeout(() => {
      console.log(this.name + ' ' + this.age);
    }, 1000)
  },
};

person.delayLog();