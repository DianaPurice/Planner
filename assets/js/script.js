// existing elements
var currentDayEl = $("#currentDay");
var timeslot1 = $("#09");
var timeslot2 = $("#10");
var timeslot2 = $("#11");
var timeslot3 = $("#12");
var timeslot4 = $("#13");
var timeslot5 = $("#14");
var timeslot6 = $("#15");
var timeslot7 = $("#16");
var timeslot8 = $("#17");

// display current date
function currentDay() {
  var today = moment().format("dddd[,] MMMM YYYY");
  currentDayEl.text(today);
}

currentDay();

function currentHour() {
  var hourNow = moment().format("HH:mm");
  return hourNow;
}

function checkHour() {
  var hourNow = currentHour();
  var hourCheck = hourNow.slice(0, 2);
  console.log(timeslot1);
  console.log(hourCheck);
  if (hourCheck === timeslot1.attr("id")) {
    timeslot1.addClass("present");
  } else if (hourCheck === timeslot1.attr("id")) {
    timeslot2.addClass("present");
  }
}
checkHour();
