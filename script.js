// Conversion factors relative to mmHg
const conversionFactors = {
  mmHg: 1,
  cmHg: 10,              // 1 cmHg = 10 mmHg
  kPa: 7.50062,          // 1 kPa = 7.50062 mmHg
  inHg: 25.4             // 1 inHg = 25.4 mmHg
};

function convertPressure(value, fromUnit) {
  // First, convert the input value to mmHg
  const valueInMmHg = value * conversionFactors[fromUnit];

  // Then convert mmHg to all units
  return {
    mmHg: valueInMmHg,
    cmHg: valueInMmHg / conversionFactors['cmHg'],
    kPa: valueInMmHg / conversionFactors['kPa'],
    inHg: valueInMmHg / conversionFactors['inHg']
  };
}

function updateOutput(conversions) {
  document.querySelector("#output-mmhg p").textContent = conversions.mmHg.toFixed(2);
  document.querySelector("#output-cmhg p").textContent = conversions.cmHg.toFixed(2);
  document.querySelector("#output-kpa p").textContent = conversions.kPa.toFixed(2);
  document.querySelector("#output-inhg p").textContent = conversions.inHg.toFixed(2);
}

document.getElementById("calculateBtn").addEventListener("click", () => {
  const inputValue = parseFloat(document.getElementById("pressureInput").value);
  const fromUnit = document.getElementById("unitSelect").value;
  if (!isNaN(inputValue)) {
    const conversions = convertPressure(inputValue, fromUnit);
    updateOutput(conversions);
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("pressureInput").value = "";
  updateOutput({ mmHg: 0, cmHg: 0, kPa: 0, inHg: 0 });
});
