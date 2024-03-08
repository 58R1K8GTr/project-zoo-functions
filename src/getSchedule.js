const data = require('../data/zoo_data');

function getScheduleDay(day) {
  let dayObject;
  if (day === 'Monday') {
    dayObject = {
      exhibition: 'The zoo will be closed!',
      officeHour: 'CLOSED',
    };
  } else {
    dayObject = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species
        .filter(({ availability }) => availability.includes(day))
        .map(({ name }) => name),
    };
  }
  return dayObject;
}

function getScheduleAllDays(days) {
  const objectReturn = days.reduce((acc, curr) => {
    acc[curr] = getScheduleDay(curr);
    return acc;
  }, {});
  return objectReturn;
}

const getSchedule = (scheduleTarget) => {
  // seu código aqui
  const animals = data.species.map(({ name }) => name);
  const days = Object.keys(data.hours);
  let result;
  if (!scheduleTarget || !days.concat(animals).includes(scheduleTarget)) {
    result = getScheduleAllDays(days);
  } else if (days.includes(scheduleTarget)) {
    result = {};
    result[scheduleTarget] = getScheduleDay(scheduleTarget);
  } else {
    result = data.species
      .find(({ name }) => name === scheduleTarget).availability;
  }
  return result;
};

module.exports = getSchedule;
