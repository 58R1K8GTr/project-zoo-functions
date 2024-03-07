const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  const employee = data.employees
    .find((item) => item.firstName === employeeName || item.lastName === employeeName);
  return employee || {};
};

module.exports = getEmployeeByName;
