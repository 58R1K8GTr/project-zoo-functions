const data = require('../data/zoo_data');

function findEmployee(name, id) {
  const person = data.employees
    .find((employee) => employee.firstName === name
      || employee.lastName === name || employee.id === id);
  if (!person) throw new Error('Informações inválidas');
  return person;
}

function getAReport(name, id) {
  const person = findEmployee(name, id);
  const species = data.species
    .filter(({ id: idSpecie }) => person.responsibleFor.includes(idSpecie));
  const { firstName, lastName } = person;
  return {
    id: person.id,
    fullName: `${firstName} ${lastName}`,
    species: species.map(({ name: nameSpecie }) => nameSpecie),
    locations: species.map(({ location }) => location),
  };
}

const getEmployeesCoverage = (personIdentifier = {}) => {
  // seu código aqui
  let result;
  const { name, id } = personIdentifier;
  if (!name && !id) {
    result = data.employees
      .map(({ id: idEmployee }) => getAReport(undefined, idEmployee));
  } else {
    result = getAReport(name, id);
  }
  return result;
};

module.exports = getEmployeesCoverage;
