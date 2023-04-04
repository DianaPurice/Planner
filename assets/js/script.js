// existing elements
var currentDayEl = $("#currentDay");
var jumbotron = $(".jumbotron");

// style elements
jumbotron.css("text-align", "center");
jumbotron.css("border-bottom", "10px solid black");



// display current date
function currentDay() {
  var today = moment().format("dddd[,] MMMM YYYY");
  currentDayEl.text(today);
}

currentDay();
