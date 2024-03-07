const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const result = data.species.find((item) => item.name === animal);
  return result.residents.every(({ age: ageCompare }) => ageCompare > age);
};

module.exports = getAnimalsOlderThan;
