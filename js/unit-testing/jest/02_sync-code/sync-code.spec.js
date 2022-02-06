//spec & test в постфиксе одно и тоже для обозначения файла для тестов jest 
const { Lodash } = module.require('./sync-code');

const _ = new Lodash();

describe('Lodash: compact', () => {

  let array;

  beforeEach(() => {//перед каждым тестом
    array = [false, 42, 0, '', true, null, 'hello'];//это для чистоты тестов чтобы перед каждым тестом значение скидывалось в default состояние
  });

  test('Массив должен быть изменяемый:', () => {
    array.push(...['one', 'two']);
    expect(array).toContain('one');
    expect(array).toContain('two');
  });

  test('Метод должен быть определён:', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test('Должна удалить falsy значения из массива', () => {
    const result = [42, true, 'hello'];
    expect(_.compact(array)).toEqual(result);
  });

  test('Не должен содержать falsy значения', () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain('');
    expect(_.compact(array)).not.toContain(null);
  });

});



describe('Lodash: groupBy', () => {

  test('Метод должен быть определён:', () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test('Должен групировать массив по Math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test('Должен групировать массив по length', () => {
    const array = ['one', 'two', 'three'];
    const result = {
      3: ['one', 'two'],
      5: ['three'],
    };
    expect(_.groupBy(array, 'length')).toEqual(result);
  });

  test('Не должен возвращать Array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });

});