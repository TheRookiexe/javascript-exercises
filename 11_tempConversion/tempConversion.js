const convertToCelsius = function(ftemp) {
  ctmp=(ftemp-32)*(5/9);
  return Math.round(ctmp*10)/10;
};

const convertToFahrenheit = function(ctemp) {
  ftmp=(ctemp*(9/5)+32);
  return Math.round(ftmp*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
