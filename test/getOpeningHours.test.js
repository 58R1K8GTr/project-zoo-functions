const getOpeningHours = require('../src/getOpeningHours');

const closed = 'The zoo is closed';
const open = 'The zoo is open';

describe('Testes da função getOpeningHours', () => {
  test('não passando argumentos deve retornar todos os horários', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  test('segunda feira está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
  });
  test('terça está fechado às 7:59-AM', () => {
    expect(getOpeningHours('Tuesday', '07:59-AM')).toBe(closed);
  });
  test('terça está aberto às 8:00-AM', () => {
    expect(getOpeningHours('Tuesday', '08:00-AM')).toBe(open);
  });
  test('terça está aberto às 5:59-PM', () => {
    expect(getOpeningHours('Tuesday', '05:59-PM')).toBe(open);
  });
  test('terça está fechado às 6:00-PM', () => {
    expect(getOpeningHours('Tuesday', '06:00-PM')).toBe(closed);
  });

  test('quarta está fechado às 7:59-AM', () => {
    expect(getOpeningHours('Wednesday', '07:59-AM')).toBe(closed);
  });
  test('quarta está aberto às 8:00-AM', () => {
    expect(getOpeningHours('Wednesday', '08:00-AM')).toBe(open);
  });
  test('quarta está aberto às 5:59-PM', () => {
    expect(getOpeningHours('Wednesday', '05:59-PM')).toBe(open);
  });
  test('quarta está fechado às 6:00-PM', () => {
    expect(getOpeningHours('Wednesday', '06:00-PM')).toBe(closed);
  });

  test('sábado está fechado às 7:59-AM', () => {
    expect(getOpeningHours('Saturday', '07:59-AM')).toBe(closed);
  });
  test('sábado está aberto às 8:00-AM', () => {
    expect(getOpeningHours('Saturday', '08:00-AM')).toBe(open);
  });
  test('sábado está aberto às 9:59-PM', () => {
    expect(getOpeningHours('Saturday', '09:59-PM')).toBe(open);
  });
  test('sábado está fechado às 10:00-PM', () => {
    expect(getOpeningHours('Saturday', '10:00-PM')).toBe(closed);
  });

  test('domingo está fechado às 7:59-AM', () => {
    expect(getOpeningHours('Sunday', '07:59-AM')).toBe(closed);
  });
  test('domingo está aberto às 8:00-AM', () => {
    expect(getOpeningHours('Sunday', '08:00-AM')).toBe(open);
  });
  test('domingo está aberto às 7:59-PM', () => {
    expect(getOpeningHours('Sunday', '07:59-PM')).toBe(open);
  });
  test('domingo está fechado às 8:00-PM', () => {
    expect(getOpeningHours('Sunday', '08:00-PM')).toBe(closed);
  });

  test('quinta está fechado às 9:59-AM', () => {
    expect(getOpeningHours('Thursday', '9:59-AM')).toBe(closed);
  });
  test('quinta está aberto às 10:00-AM', () => {
    expect(getOpeningHours('Thursday', '10:00-AM')).toBe(open);
  });
  test('quinta está aberto às 7:59-PM', () => {
    expect(getOpeningHours('Thursday', '07:59-PM')).toBe(open);
  });
  test('quinta está fechado às 8:00-PM', () => {
    expect(getOpeningHours('Thursday', '08:00-PM')).toBe(closed);
  });

  test('passando uma string com somente letras na hora deve retornar um erro', () => {
    expect(() => getOpeningHours('Thursday', 'asdfipasdf-AM')).toThrow('The hour should represent a number');
  });
  test('passando uma abreviação de hora errada deve retornar um erro', () => {
    expect(() => getOpeningHours('Thursday', '08:00-aam')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  test('passando uma hora fora do intervalo deve retornar um erro', () => {
    expect(() => getOpeningHours('Thursday', '13:00-am')).toThrow('The hour must be between 0 and 12');
  });
  test('passando minutos fora do intervalo deve retornar um erro', () => {
    expect(() => getOpeningHours('Thursday', '12:60-am')).toThrow('The minutes must be between 0 and 59');
  });
  test('passando um dia inválido deve retornar um erro', () => {
    expect(() => getOpeningHours('Sábado', '12:59-AM')).toThrow('The day must be valid. Example: Monday');
  });
});
