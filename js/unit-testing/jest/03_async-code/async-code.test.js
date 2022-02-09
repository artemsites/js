const { Ajax } = module.require('./async-code');
const axios = require('axios');

jest.mock('axios');

describe('Ajax echo', () => {
  test('Должен вернуть значение асинхронно:', async () => {
    const result = await Ajax.echo('some data');
    expect(result).toBe('some data');
  });

  test('Должен вернуть значение в Promise:', () => {
    return Ajax.echo('some data')
      .then(data => {
        expect(data).toBe('some data');
      });
  });

  test('Должен вернуть catch error с Promise:', () => {
    return Ajax.echo('some data')
      .catch(err => {
        expect(err).toBeInstanceOf(Error);
      });
  });

  test('Должен вернуть catch error с Promise:', async () => {
    try {
      await Ajax.echo();
    } catch (error) {
      expect(error.message).toBe('Error echo data, class Ajax');//8 строка тестируемого файла
    }
  });
});



describe('Ajax GET', () => {

  let response;
  let todos;

  beforeEach(()=>{
    todos = [
      {id:1, title:'Todo 1', completed:false}
    ];
    response = {
      data: {
        todos
      }
    };
  });

  test('должен вернуть данные с jsonplaceholder/...', () => {
    axios.get.mockReturnValue(response);

    return Ajax.get().then(data=>{
      expect(data.todos).toEqual(todos);
    });
  });

});