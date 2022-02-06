const { sum, nativeNull } = require('./intro');

describe('Sum functions:', () => {
  test('Sum должно быть суммой двух чисел:', () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 3)).toEqual(4);
  });

  test('Sum должен быть больше чем:', () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(10);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  test('Sum двух не целых числа должна быть корректна:', () => {
    // expect(sum(0.1, 0.2)).toBe(0.3);//fail = 0.30000000000000004 
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    expect(sum(0.1, 0.2)).toBe
  });
});



describe('Null function:', () => {
  test('Должне вернуть значение false null:', ()=>{
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();//undefined, null, 0, ''
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});