// global variables (so used in different functions)
var secondsRemaining;
var intervalHandle;

// reset page function to reset the countdown again.
function resetPage() {
  document.getElementbyId("inputArea").stlye.display ="block";
}

function tick(){
  // grab hold of the h1 by creating a var called timeDisplay
  var timeDisplay = document.getElementbyId("time");
  // then turn the seconds that are in the secondsRemaining var into minutes and seconds.
  // math.floor makes a number a basic integer, just ignore any remainder.
  var min = Math.floor(secondsRemaining / 60);
  var sec = secondsRemaining - (min * 60);
  // if seconds are less than 10, then add a leading zero as a string value
  if (sec < 10) {
    sec = "0" + sec;
  }
  // take min and seconds value and concatenate using colon
    var message = min + ":" + sec;
    // and finally we change what the page actually displays
    timeDisplay.innerHTML = message;
    // Did the seconds make it down to zero?
    if (secondsRemaining === 0) {
      alert("Done!");
      clearInterval(intervalHandle);
      resetpage();

    }
    // subtract one from the seconds remaining, because this is the function thats called every second.
    secondsRemaining --;
}


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
window.onload = function() {
  // create an input text box and give it an id of "minutes
    var inputMinutes = document.createElement("input");
  inputMinutes.setAttribute("id", "minutes");
  inputMinutes.setAttribute("type", "text");

  // create the button
  var startButton = document.createElement("input");
  startButton.setAttribute("type", "button");
  startButton.setAttribute("value", "Start Countdown");

  // associate that click event of the button with a function called Start Countdown
startButton.onclick = function() {
  startCountdown();
};
// Take the two new elements and add them to the div called "inputArea"
document.getElementById("inputArea").appendChild(inputMinutes);
document.getElementById("inputArea").appendChild(startButton);
};
