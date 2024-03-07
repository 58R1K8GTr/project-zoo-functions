const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('não passando parâmetro, é retornado undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  test('passando um parâmetro que não é uma string e retornando um valor de erro', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('passando um parâmetro como "popularity" e retornando 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('passando "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('passando "names" e recebendo uma lista com os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('passando "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('passando um parâmetro diferente, retorna null', () => {
    expect(handlerElephants('teste')).toBe(null);
  });
});
