const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  let all = true;
  for (let indexSpecie = 0; indexSpecie < data.species.length; indexSpecie += 1) {
    const specie = data.species[indexSpecie];
    if (specie.name === animal) {
      for (let indexAnimal = 0; indexAnimal < specie.residents.length; indexAnimal += 1) {
        const animal = specie.residents[indexAnimal];
        if (animal.age < age)
          all = false;
      }
    }
  }
  return all;
};

module.exports = getAnimalsOlderThan;
