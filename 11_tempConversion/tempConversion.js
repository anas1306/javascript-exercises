const convertToCelsius = function(originalTemp) {
  converted = (originalTemp - 32) * (5/9);
  newTemp = Math.round(converted * 10) / 10;
  return newTemp;
};

const convertToFahrenheit = function(originalTemp) {
  converted = (originalTemp * (9/5)) + 32;
  newTemp = Math.round(converted * 10) / 10;
  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
