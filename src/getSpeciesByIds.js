const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const arraySpecies = [];
  if (!ids) return arraySpecies;
  for (let indexSpecies = 0; indexSpecies < data.species.length; indexSpecies += 1) {
    const specie = data.species[indexSpecies];
    if (ids.includes(specie.id))
      arraySpecies.push(specie);
  }
  return arraySpecies;
};

module.exports = getSpeciesByIds;
