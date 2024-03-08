const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  // seu código aqui
  let entrantsObject = { child: 0, adult: 0, senior: 0 };
  entrantsObject = entrants
    .reduce((acc, { age }) => {
      if (age < 18) {
        acc.child += 1;
      } else if (age >= 18 && age < 50) {
        acc.adult += 1;
      } else {
        acc.senior += 1;
      }
      return acc;
    }, entrantsObject);
  return entrantsObject;
};

const calculateEntry = (entrants) => {
  // seu código aqui
  if (!entrants || !entrants.length) return 0;
  const count = countEntrants(entrants);
  const sum = (
    (count.child * 20.99) + (count.adult * 49.99) + (count.senior * 24.99)
  );
  return sum;
};

module.exports = { calculateEntry, countEntrants };
