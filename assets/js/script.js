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
var button1 = $("#btn9");
var button2 = $("#btn10");
var button3 = $("#btn11");
var button4 = $("#btn12");
var button5 = $("#btn13");
var button6 = $("#btn14");
var button7 = $("#btn15");
var button8 = $("#btn16");
var button9 = $("#btn17");
var value1 = $("#val1");

// time variables
var early = "-08-07-06-05-04-03-02-01-00";
var late = "-18-19-20-21-22-23";
// display current date
function currentDay() {
  var today = moment().format("dddd[,] MMMM Do");
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
  if (hourCheck === timeslot1.attr("id")) {
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
  } else if (late.includes(`-${hourCheck}`)) {
    timeslot1.addClass("past");
    timeslot2.addClass("past");
    timeslot3.addClass("past");
    timeslot4.addClass("past");
    timeslot5.addClass("past");
    timeslot6.addClass("past");
    timeslot7.addClass("past");
    timeslot8.addClass("past");
    timeslot9.addClass("past");
  } else if (early.includes(`-${hourCheck}`)) {
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

function sendData() {
  button1.click(console.log("here"));
}
// sendData();
$(document).ready(function () {
  timeslot1.val(JSON.parse(localStorage.getItem("timeslotText1")));
  timeslot2.val(JSON.parse(localStorage.getItem("timeslotText2")));
  timeslot3.val(JSON.parse(localStorage.getItem("timeslotText3")));
  timeslot4.val(JSON.parse(localStorage.getItem("timeslotText4")));
  timeslot5.val(JSON.parse(localStorage.getItem("timeslotText5")));
  timeslot6.val(JSON.parse(localStorage.getItem("timeslotText6")));
  timeslot7.val(JSON.parse(localStorage.getItem("timeslotText7")));
  timeslot8.val(JSON.parse(localStorage.getItem("timeslotText8")));
  timeslot9.val(JSON.parse(localStorage.getItem("timeslotText9")));
});

$(document).ready(function () {
  $("#btn9").click(function () {
    var timeslot1Text = timeslot1.val();
    localStorage.setItem("timeslotText1", JSON.stringify(timeslot1Text));
  });
  $("#btn10").click(function () {
    var timeslot2Text = timeslot2.val();
    localStorage.setItem("timeslotText2", JSON.stringify(timeslot2Text));
  });
  $("#btn11").click(function () {
    var timeslot3Text = timeslot3.val();
    localStorage.setItem("timeslotText3", JSON.stringify(timeslot3Text));
  });
  $("#btn12").click(function () {
    var timeslot4Text = timeslot4.val();
    localStorage.setItem("timeslotText4", JSON.stringify(timeslot4Text));
  });
  $("#btn13").click(function () {
    var timeslot5Text = timeslot5.val();
    localStorage.setItem("timeslotText5", JSON.stringify(timeslot5Text));
  });
  $("#btn14").click(function () {
    var timeslot6Text = timeslot6.val();
    localStorage.setItem("timeslotText6", JSON.stringify(timeslot6Text));
  });
  $("#btn15").click(function () {
    var timeslot7Text = timeslot7.val();
    localStorage.setItem("timeslotText7", JSON.stringify(timeslot7Text));
  });
  $("#btn16").click(function () {
    var timeslot8Text = timeslot8.val();
    localStorage.setItem("timeslotText8", JSON.stringify(timeslot8Text));
  });
  $("#btn17").click(function () {
    var timeslot9Text = timeslot9.val();
    localStorage.setItem("timeslotText9", JSON.stringify(timeslot9Text));
  });
});
