// Date Example
dateBtn = document.getElementById("button-date");
dateResult = document.getElementById("date-result");
dateBtn.onclick = function () {
  dateResult.innerHTML = Date();
};
// Lamp Example
lampBtnOn = document.getElementById("button-on");
lampBtnOff = document.getElementById("button-off");
lamp = document.getElementById("lamp");
lampBtnOn.onclick = function () {
  lamp.src = "./images/pic_bulbon.gif";
};
lampBtnOff.onclick = function () {
  lamp.src = "./images/pic_bulboff.gif";
};