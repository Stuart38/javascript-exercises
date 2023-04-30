const convertToCelsius = function (temp) {
  let result = (temp - 32) * (5 / 9);
  return Math.round(result * 1e1) / 1e1;
};

const convertToFahrenheit = function (temp) {
  let result = (temp * 1.8) + 32;
  return Math.round(result * 1e1) / 1e1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
