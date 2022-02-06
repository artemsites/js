function expect(value) {
  return {
    toBe: exp => {
      if (value === exp) {
        console.log('success');
      } else {
        console.error(`Value is ${value}, but expectation is ${exp}`);
      }
    }
  }
}

// expect(sum(23, 23)).toBe(46);



const sum = (a, b) => a + b;

const nativeNull = ()  => null;

module.exports = {sum, nativeNull};