const { Ajax } = module.require('./async-code');

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