var currentDate =
  moment().format("dddd") + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format("h:mm:ss");

var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hour = moment().hours();
var myInput;
var hourSpan;

var interval = setInterval(function () {
  var momentNow = moment();
  $("#currentDay").html(
    momentNow.format("YYYY MMMM DD") +
      " " +
      momentNow.format("dddd").substring(0, 3).toUpperCase()
  );
  $("#currentDay").html(currentDate + " " + momentNow.format("hh:mm:ss "));
}, 100);

function myTime() {
  console.log("Current Hour " + hour);
  var myTime8 = JSON.parse(localStorage.getItem("08:00 am"));
  eightAm.val(myTime8);

  var myTime9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(myTime9);

  var myTime10 = JSON.parse(localStorage.getItem("10:00 am"));
  tenAm.val(myTime10);

  var myTime11 = JSON.parse(localStorage.getItem("11:00 am"));
  elevenAm.val(myTime11);

  var myTime12 = JSON.parse(localStorage.getItem("12:00 pm"));
  twelvePm.val(myTime12);

  var myTime1 = JSON.parse(localStorage.getItem("01:00 pm"));
  onePm.val(myTime1);

  var myTime2 = JSON.parse(localStorage.getItem("02:00 pm"));
  twoPm.val(myTime2);

  var myTime3 = JSON.parse(localStorage.getItem("03:00 pm"));
  threePm.val(myTime3);

  var myTime4 = JSON.parse(localStorage.getItem("04:00 pm"));
  fourPm.val(myTime4);

  var myTime5 = JSON.parse(localStorage.getItem("05:00 pm"));
  fivePm.val(myTime5);

  var myTime6 = JSON.parse(localStorage.getItem("06:00 pm"));
  sixPm.val(myTime6);

  var myTime7 = JSON.parse(localStorage.getItem("07:00 pm"));
  sevenPm.val(myTime7);
}

function background() {
  $(".form-control").each(function () {
    var savings = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    console.log(savings);
    console.log(hour);

    if (hour > savings) {
      $(this).addClass("past");
    } else if (hour < savings) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

$(document).ready(function () {
  myTime();
  background();

  $(".saveBtn").on("click", function () {
    myInput = $(this).siblings(".form-control").val().trim();
    console.log(myInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(myInput));
  });

  $("#clear").on("click", function () {
    localStorage.clear();
    myTime();
  });
});
