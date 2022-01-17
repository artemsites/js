//this - указывает на текущий контекст
function hello() {
  console.log( 'Hello!', this );
}
// hello();

const person = {
  name: 'Artem',
  age: 32,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  // sayHelloWindow: hello.bind(window),
}
person.sayHello();
person.sayHelloWindow();