const convertToCelsius = function(temp) {
  const temperatureC = (temp - 32) * (5 / 9);  
  return temperatureC;
};

const convertToFahrenheit = function(temp) {
  
};

console.log(convertToCelsius(86));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
