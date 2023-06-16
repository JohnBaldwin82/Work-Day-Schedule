let currentDate =
  moment().format("dddd") + " " + moment().format("Do MMM YYYY");
let currentHour = moment().format("h:mm:ss");

let eightAm = $("#8am");
let nineAm = $("#9am");
let tenAm = $("#10am");
let elevenAm = $("#11am");
let twelvePm = $("#12pm");
let onePm = $("#13pm");
let twoPm = $("#14pm");
let threePm = $("#15pm");
let fourPm = $("#16pm");
let fivePm = $("#17pm");
let sixPm = $("#18pm");
let sevenPm = $("#19pm");

let hour = moment().hours();
let myInput;
let hourSpan;

let interval = setInterval(function () {
  let momentNow = moment();
  $("#currentDay").html(
    momentNow.format("YYYY MMMM DD") +
      " " +
      momentNow.format("dddd").substring(0, 3).toUpperCase()
  );
  $("#currentDay").html(currentDate + " " + momentNow.format("hh:mm:ss "));
}, 100);

function myTime() {
  console.log("Current Hour " + hour);
  let myTime8 = JSON.parse(localStorage.getItem("08:00 am"));
  eightAm.val(myTime8);

  let myTime9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(myTime9);

  let myTime10 = JSON.parse(localStorage.getItem("10:00 am"));
  tenAm.val(myTime10);

  let myTime11 = JSON.parse(localStorage.getItem("11:00 am"));
  elevenAm.val(myTime11);

  let myTime12 = JSON.parse(localStorage.getItem("12:00 pm"));
  twelvePm.val(myTime12);

  let myTime1 = JSON.parse(localStorage.getItem("01:00 pm"));
  onePm.val(myTime1);

  let myTime2 = JSON.parse(localStorage.getItem("02:00 pm"));
  twoPm.val(myTime2);

  let myTime3 = JSON.parse(localStorage.getItem("03:00 pm"));
  threePm.val(myTime3);

  let myTime4 = JSON.parse(localStorage.getItem("04:00 pm"));
  fourPm.val(myTime4);

  let myTime5 = JSON.parse(localStorage.getItem("05:00 pm"));
  fivePm.val(myTime5);

  let myTime6 = JSON.parse(localStorage.getItem("06:00 pm"));
  sixPm.val(myTime6);

  let myTime7 = JSON.parse(localStorage.getItem("07:00 pm"));
  sevenPm.val(myTime7);
}

function backing() {
  $(".form-control").each(function () {
    let savings = parseInt($(this).attr("id"));
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
  backing();

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
