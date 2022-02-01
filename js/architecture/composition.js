/*************************** Композиция ***************************/



function createProgrammer(name) {
  const programmer = {name};//=name: name

  // Здесь вот и случается композиция програмиста и того что он может делать (кодить)
  return {
    ...programmer,//Spread оператор который разворачивает объект или массив
    ...canCoding(programmer),//Spread только здесь мы разворачиваем результат функции который является объектом
  }
}



function canCoding({ name }) {//{name} - это деструктуризация объекта 
  return {
    coding: () => console.log(`${name} is coding...`),
  }
}



function canAngular({ name }) {
  return {
    angular: () => console.log(`${name} is creating Angular app...`),
  }
}



function canNodejs({ name }) {
  return {
    nodejs: () => console.log(`${name} is programming on NodeJS...`),
  }
}



function createFrontender(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,//он уже может кодить (canCoding())  
    ...canAngular(programmer),//Spread - здесь мы разворачиваем результат функции который является объектом
  }
}



function createBackender(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,//он уже может кодить (canCoding())  
    ...canNodejs(programmer),//Spread - здесь мы разворачиваем результат функции который является объектом
  }
}



// И вот вся прелесть композиции в отличии от наследования, мы просто добавляем нужные методы
function createFullstack(name) {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canNodejs(programmer),
    ...canAngular(programmer),
  }
}



const programmer = createProgrammer('Вася');
programmer.coding();

const frontender = createFrontender('Петя');
frontender.coding();
frontender.angular();

const backender = createBackender('Левонтий');
backender.coding();
backender.nodejs();

const fullstacker = createFullstack('Григораж');
fullstacker.coding();
fullstacker.nodejs();
fullstacker.angular();