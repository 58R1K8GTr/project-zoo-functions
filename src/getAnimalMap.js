const data = require('../data/zoo_data');

const regions = ['NE', 'NW', 'SE', 'SW'];

function filterByRegion(region) {
  const result = data.species.filter(({ location }) => location === region);
  return result;
}

function createMapWithoutArguments() {
  const result = {};
  regions.forEach((region) => {
    result[region] = filterByRegion(region).map(({ name }) => name);
  });
  return result;
}

function organizeAnimals(residents, sex, sorted) {
  let animals = residents;
  if (sex) {
    animals = residents
      .filter(({ sex: sexAnimal }) => sexAnimal === sex);
  }
  animals = animals.map(({ name: nameAnimal }) => nameAnimal);
  if (sorted) {
    animals.sort((first, second) => first.localeCompare(second));
  }
  return animals;
}

function createMapWithArguments(options = {}) {
  const { sex = false, includeNames = false, sorted = false } = options;
  const result = {};
  regions.forEach((region) => {
    const species = filterByRegion(region);
    result[region] = [];
    species.forEach(({ name, residents }) => {
      const animals = organizeAnimals(residents, sex, sorted);
      if (includeNames) {
        result[region].push({ [name]: animals });
      } else {
        result[region].push(name);
      }
    });
  });
  return result;
}

const getAnimalMap = (options) => {
  // seu código aqui
  let result;
  if (!options) {
    result = createMapWithoutArguments();
  } else {
    result = createMapWithArguments(options);
  }
  return result;
};

module.exports = getAnimalMap;
