



// as soon as page loads,load this code and what we are doing here is creating some new elements
window.onload =function() {
  // create an input text box and give it an id of "minutes"
  var inputMinutes = document.createElement("input");
  inputMinutes.createAttribute(id, "minutes");
  inputMinutes.createAttribute(type, "text");

  // create the button
  var startButton = document.createElement("input");
  startButton.createAttribute(type, "button");
  startButton.createAttribute(value, "Start Countdown");

  // associate that click event of the button with a function called Start Countdown
startButton.onclick = function(){
  startCountdown();
};
// Take the two new elements and add them to the div called "inputArea"
document.getElementbyId("inputArea").appendChild(inputMinutes);
document.getElementbyId("inputArea").appendChild(startButton);
};
