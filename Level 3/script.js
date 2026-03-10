function convertTemp() {
  let tempInput = document.getElementById("temperature").value;
  let unit = document.getElementById("unit").value;
  let result = document.getElementById("result");

  if (tempInput === "" || isNaN(tempInput)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let temperature = parseFloat(tempInput);
  let converted;
  let fromUnit;
  let toUnit;

  if (unit === "celsius") {
    converted = (temperature * 9) / 5 + 32;
    fromUnit = "°C";
    toUnit = "°F";
  } else if (unit === "fahrenheit") {
    converted = ((temperature - 32) * 5) / 9;
    fromUnit = "°F";
    toUnit = "°C";
  } else if (unit === "kelvin") {
    converted = temperature - 273.15;
    fromUnit = "K";
    toUnit = "°C";
  }

  result.textContent =
    temperature + fromUnit + " = " + converted.toFixed(2) + toUnit;
}
