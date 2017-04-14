// global variables (so used in different functions)
var secondsRemaining;
var intervalHandle;



function startCountdown(){
  // get the contents of the "minutes" text box which we are using the .value propert of.
  var minutes = document.getElementbyId("minutes").value;
  // check if it is not a number using isNaN
if (isNaN(minutes)){
  alert("Please enter a number!");
  return;
  // return just means im done with this function, I cannot go any further so pop out now
}
// however if it is a number that has been entered then move past the if statement and find out how many seconds are remaining.
// how many seconds?
secondsRemaining = minutes * 60;
// every second(1000milliseconds), call the tick function
intervalHandle = setInterval(tick, 1000);
// hide the form when the clock is ticking
document.getElementbyId("inputArea").style.display="none";
};




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
