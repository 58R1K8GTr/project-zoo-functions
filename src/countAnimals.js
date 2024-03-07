const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  // seu código aqui
  let result;
  if (!animal) {
    result = data.species
      .reduce((acc, specie) => {
        acc[specie.name] = specie.residents.length;
        return acc;
      }, {});
  } else {
    const specie = data.species
      .find(({ name }) => name === animal.species);
    result = specie.residents;
    if (animal.sex) {
      result = specie.residents
        .filter(({ sex }) => sex === animal.sex);
    }
    result = result.length;
  }
  return result;
};

module.exports = countAnimals;
