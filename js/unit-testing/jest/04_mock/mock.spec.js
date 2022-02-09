const { map } = module.require('./mock.js');



describe('Map function: ', () => {

  let array;
  let fn;

  beforeEach(() => {
    array = [1, 1, 2, 3, 5];
    fn = jest.fn(x => x ** 2);//'x**2' - значит перемножить 'x' дважды
    map(array, fn);
  });

  test('должен вызвать callback', () => {
    expect(fn).toBeCalled();
  });

  test('должен вызвать callback 5 раз', () => {
    expect(fn).toBeCalledTimes(5);
    expect(fn.mock.calls.length).toBe(5);
  });

  test('должен перемножить  2 раза пернеменную', () => {
    expect(fn.mock.results[0].value).toBe(1);
    expect(fn.mock.results[1].value).toBe(1);
    expect(fn.mock.results[2].value).toBe(4);
    expect(fn.mock.results[3].value).toBe(9);
    expect(fn.mock.results[4].value).toBe(25);
  });

  test('fn должен работать', ()=>{
    fn
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue('84');

    expect(fn()).toBe(100);
    expect(fn()).toEqual(200);
    expect(fn()).toEqual('84');
    expect(fn()).toEqual('84');
  });

});