const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const arraySpecies = [];
  data.species.forEach((item) => {
    if (ids.includes(item.id)) {
      arraySpecies.push(item)
    }
  });
  return arraySpecies;
};

module.exports = getSpeciesByIds;
