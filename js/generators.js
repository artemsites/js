function *generator(num = 4) {
  for (let i=0; i<num; i++) {
    try {
      yield i;      
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}

const iter = generator(3);
console.log(iter.next());
console.log(iter.throw('My error'));
console.log(iter.next());
console.log(iter.next());

for (let it of generator(5)) {
  console.log(it);
}