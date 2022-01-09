// String
const str = 'Hello';
console.log(str.startsWith('He'));
console.log(str.endsWith('lo'));
console.log(str.includes('ll'));

console.log(str.repeat(3));

console.log(str.trim());//обрезка пробелов с начала и с конца
console.log(str.trimEnd());//обрезка пробелов с конца
console.log(str.trimStart());//обрезка пробелов с начала

console.log(str.padStart(10));//добавление пробелов или символов
console.log(str.padStart(10, '12345'));//добавление пробелов или символов
console.log(str.padEnd(10, '12345'));//добавление пробелов или символов