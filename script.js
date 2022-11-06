var currentDay = $('#currentDay')
var appointments = [];
var timeBlockEl = $('.time-block');
var day = dayjs();
var saveBtn = $('.saveBtn');
// empty times array for office

var day = dayjs();   
window.onload = displayClock(); 

// display a live clockin header & current date
function displayClock() {   
    // declare variable liveTime assign the 
    // value of current clock string to it
    var liveTime = new Date().toLocaleTimeString();    
    currentDay.text(day.format("MM DD, YYYY") + " " + liveTime); 
    // runs continuously updating every second 
    setTimeout(displayClock, 1000);   
}

// check time to change block colors
function checkTime() {
    // variable for current hour 
    // of the day
    var hour = day.hour();
    // variable for parent div 
    // control colors with classes: 
    // "past","present","future".
    timeBlockEl.each(function() {
      // change id string to integer
      var currentBlock = parseInt($(this).attr("id"));
      
      // check current hour to determine
      // colors on scheduler
      if (currentBlock > hour) {
        $(this).addClass("future");

      } else if (currentBlock === hour) {
        $(this).addClass("present");

      } else {
        $(this).addClass("past");
      }
    })
}
// this is the save button 
// event listener
saveBtn.on('click', function() {
    // console.log(this); 

    var time = $(this).siblings("div.hour").text(); // this should be
    // the hours typed in the div "2PM"

    var appointment = $(this).siblings(".description").val(); 
    // this should be the text 
    // input for the colored time block
    
    localStorage.setItem(time, appointment);
    // time, appointment
    //{2PM: Jimmy Johns}

});

// display appointments saved in
// local storage
function displayAppointment () {
  // loop through all elements 
  // in document with class="row"
  $('.row').each(function () {
    // console.log(this);
    // set variable to time 
    // in timeblock -example: "2PM"
    var textInput = $(this).children(".hour").text();
    // console.log(textInput);

    var userInput = localStorage.getItem(textInput);

    // keeps displaying appointment if that time block's key("2PM") has a value("Jimmy Johns")
    if(userInput !== null) {
      $(this).children(".description").val(userInput);
    }
  })


}
// call functions
checkTime();
displayAppointment();


