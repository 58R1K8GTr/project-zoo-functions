const data = require('../data/zoo_data');

const isManager = (id) => {
  // seu código aqui
  const isManager = data.employees
    .some(({ managers }) => managers.includes(id));
  return isManager;
};

const getRelatedEmployees = (managerId) => {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employeePeople = data.employees
    .filter(({ managers }) => managers.includes(managerId));
  const employeePeopleNames = employeePeople
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  return employeePeopleNames;
};

module.exports = { isManager, getRelatedEmployees };
