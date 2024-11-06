const convertToCelsius = function(temp) {
  const temperatureC = (temp - 32) * (5 / 9);  
  return Number(temperatureC.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  const temperatureF = (temp * 9 / 5 + 32);
  return Number(temperatureF.toFixed(1));
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
