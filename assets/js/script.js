// existing elements
var currentDayEl = $("#currentDay");
var timeslot1 = $("#9am");
var timeslot2 = $("#10am");
var timeslot2 = $("#11am");
var timeslot3 = $("#12am");
var timeslot4 = $("#1pm");
var timeslot5 = $("#2pm");
var timeslot6 = $("#3pm");
var timeslot7 = $("#4pm");
var timeslot8 = $("#5pm");

// display current date
function currentDay() {
  var today = moment().format("dddd[,] MMMM YYYY");
  currentDayEl.text(today);
}

currentDay();

function currentHour() {
  var hourNow = moment().format("h:mm:ss a");
  return hourNow;
}

function checkHour() {
  var hourNow = currentHour();
  var hourLenght = hourNow.lenght;
  console.log(typeof hourNow.length);
  console.log(hourNow);
  console.log(hourNow);
  if (hourLenght === 11) {
    console.log("here");
  } else {
    console.log("hereee");
  }
  console.log(hourNow);
}
checkHour();
