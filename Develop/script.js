// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let time = dayjs();
console.log(time);

//used to display time on the top of the page
// let todayDate = time.format('DD/MM/YYYY');
// $('#currentDay').text(todayDate);

$(function currentTime(){
  //adding message gm if morning and ga if afternoon
  let mess = time.format('MM');

  if(toString(mess) <= '11'){
    mess = "Good Morning \n";
  }
  else{
    mess = "Good Afternoon \n";
  }




  //format the time and spaced the time 
  let todayDate = time.format('MM/DD/YYYY');
  //wwt == whats the time?
  let wtt = time.format('HH:mm:ss'); 
  let today = document.getElementById("currentDay");
  today.innerText = mess + todayDate + wtt;

    

  
});




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







$(function main() {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  currentTime();

});
