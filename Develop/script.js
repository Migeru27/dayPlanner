// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let time = dayjs();
let hour = time.format('HH');

//grabs the id of each time slot
//using id by 24hr time over 12hr
let hourOne = document.getElementById("hour-9");
let hourTwo = document.getElementById("hour-10");
let hourThree = document.getElementById("hour-11");
let hourFour = document.getElementById("hour-12");
let hourFive = document.getElementById("hour-13");
let hourSix = document.getElementById("hour-14");
let hourSeven = document.getElementById("hour-15");
let hourEight = document.getElementById("hour-16");
let hourNine = document.getElementById("hour-17");

$(function currentTime(){
  
  //adding message gm if morning and ga if afternoon
  let mess = "";
  
  if(hour < 12){
    mess = "Good Morning \n";
  }
  else{
    mess = "Good Afternoon \n";
  }
  //format the time and spaced the time 
  var todayDate = time.format('MMM DD, YYYY');
  //wwt == whats the time?
  
  var wtt = time.format('HH:mm'); 
  var today = document.getElementById("currentDay");
  today.innerText = mess + todayDate +'\n'+ wtt;

  
  //couldn't get updated time to work properly 
});



//save button function
$(".saveBtn").on("click", function () {
  let events = $(this).siblings(".description").val();
  let hour = $(this).parents().attr("id");
  localStorage.setItem(events, hour);
});


//save contents to local storage when opened again
$(function savePage() {
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});

/*changes the color depending on the time of day
  red == past
  grey == present
  green == present

*/
$(function colorChange() {

  if (hour > 9) {
    $(hourOne).addClass("past");
  } else if (hour == 9) {
    $(hourOne).addClass("present");
  } else {
    $(hourOne).addClass("future");
  }

  if (hour > 10) {
    $(hourTwo).addClass("past");
  } else if (hour == 10) {
    $(hourTwo).addClass("present");
  } else {
    $(hourTwo).addClass("future");
  }

  if (hour > 11) {
    $(hourThree).addClass("past");
  } else if (hour == 11) {
    $(hourThree).addClass("present");
  } else {
    $(hourThree).addClass("future");
  }

  if (hour > 12) {
    $(hourFour).addClass("past");
  } else if (hour == 12) {
    $(hourFour).addClass("present");
  } else {
    $(hourFour).addClass("future");
  }

  if (hour > 13) {
    $(hourFive).addClass("past");
  } else if (hour == 13) {
    $(hourFive).addClass("present");
  } else {
    $(hourFive).addClass("future");
  }

  if (hour > 14) {
    $(hourSix).addClass("past");
  } else if (hour == 14) {
    $(hourSix).addClass("present");
  } else {
    $(hourSix).addClass("future");
  }

  if (hour > 15) {
    $(hourSeven).addClass("past");
  } else if (hour == 15) {
    $(hourSeven).addClass("present");
  } else {
    $(hourSeven).addClass("future");
  }

  if (hour > 16) {
    $(hourEight).addClass("past");
  } else if (hour == 16) {
    $(hourEight).addClass("present");
  } else {
    $(hourEight).addClass("future");
  }

  if (hour > 17) {
    $(hourNine).addClass("past");
  } else if (hour == 17) {
    $(hourNine).addClass("present");
  } else {
    $(hourNine).addClass("future");
  }
});




