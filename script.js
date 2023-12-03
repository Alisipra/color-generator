let inputRed = document.getElementById("inputRed");
let inputGreen = document.getElementById("inputGreen");
let inputBlue = document.getElementById("inputBlue");

let spRed = document.getElementById("red");
let spGreen = document.getElementById("green");
let spBlue = document.getElementById("blue");

let colorBox = document.getElementById("Color-box");
let copyBtn = document.getElementById("btn");

inputRed.addEventListener("input", updateColor);
inputGreen.addEventListener("input", updateColor);
inputBlue.addEventListener("input", updateColor);
copyBtn.addEventListener("click", copyValue);
function updateColor() {
  const redValue = inputRed.value;
  const greenValue = inputGreen.value;
  const blueValue = inputBlue.value;
  //   console.log(redValue, greenValue, blueValue);
  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
  //   console.log(rgb);
  colorBox.style.backgroundColor = rgbColor;

  spRed.textContent = redValue;
  spGreen.textContent = greenValue;
  spBlue.textContent = blueValue;
}
updateColor();
function copyValue() {
  const redValue = inputRed.value;
  const greenValue = inputGreen.value;
  const blueValue = inputBlue.value;
  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
  navigator.clipboard
    .writeText(rgbColor)
    .then(() => {
      alert("copy to clipboard" + rgbColor);
    })
    .catch((error) => {
      console.error("Could not copy....");
    });
}
