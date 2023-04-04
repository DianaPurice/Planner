// existing elements
var currentDayEl = $("#currentDay");
var timeslot1 = $("#09");
var timeslot2 = $("#10");
var timeslot3 = $("#11");
var timeslot4 = $("#12");
var timeslot5 = $("#13");
var timeslot6 = $("#14");
var timeslot7 = $("#15");
var timeslot8 = $("#16");
var timeslot9 = $("#17");

// time variables
var early = "080706050403020100";
var late = "181920212223";
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
  if (hourCheck === timeslot2.attr("id")) {
    timeslot1.addClass("present");
  } else if (hourCheck === timeslot2.attr("id")) {
    timeslot2.addClass("present");
  } else if (hourCheck === timeslot3.attr("id")) {
    timeslot3.addClass("present");
  } else if (hourCheck === timeslot4.attr("id")) {
    timeslot4.addClass("present");
  } else if (hourCheck === timeslot5.attr("id")) {
    timeslot5.addClass("present");
  } else if (hourCheck === timeslot6.attr("id")) {
    timeslot6.addClass("present");
  } else if (hourCheck === timeslot7.attr("id")) {
    timeslot7.addClass("present");
  } else if (hourCheck === timeslot8.attr("id")) {
    timeslot8.addClass("present");
  } else if (hourCheck === timeslot9.attr("id")) {
    timeslot9.addClass("present");
  } else if (late.includes(hourCheck)) {
    timeslot1.addClass("past");
    timeslot2.addClass("past");
    timeslot3.addClass("past");
    timeslot4.addClass("past");
    timeslot5.addClass("past");
    timeslot6.addClass("past");
    timeslot7.addClass("past");
    timeslot8.addClass("past");
    timeslot9.addClass("past");
  } else if (early.includes(hourCheck)) {
    timeslot1.addClass("future");
    timeslot2.addClass("future");
    timeslot3.addClass("future");
    timeslot4.addClass("future");
    timeslot5.addClass("future");
    timeslot6.addClass("future");
    timeslot7.addClass("future");
    timeslot8.addClass("future");
    timeslot9.addClass("future");
  }
}
checkHour();
