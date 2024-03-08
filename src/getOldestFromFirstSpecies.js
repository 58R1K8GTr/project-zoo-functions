const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // seu código aqui
  const person = data.employees
    .find(({ id: idPerson }) => id === idPerson);
  const specieId = person.responsibleFor[0];
  const olderAnimal = data.species
    .find(({ id: id2 }) => specieId === id2)
    .residents.reduce((acc, curr) => {
      let returnValue;
      if (acc.age < curr.age) {
        returnValue = curr;
      } else {
        returnValue = acc;
      }
      return returnValue;
    }, { age: 0 });
  return Object.values(olderAnimal);
};

module.exports = getOldestFromFirstSpecies;
