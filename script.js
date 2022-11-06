var currentDay = $('#currentDay')
var appointments = [];
var timeBlockEl = $('.time-block');
var day = dayjs();
var saveBtn = $('.saveBtn');
// empty times array for office

var day = dayjs();   
window.onload = displayClock(); 

function displayClock() {   
    var liveTime = new Date().toLocaleTimeString();    
    currentDay.text(day.format("MM DD, YYYY") + " " + liveTime);   
    setTimeout(displayClock, 1000);   
}

function checkTime() {
    var hour = day.hour();

    timeBlockEl.each(function() {
      var currentBlock = parseInt($(this).attr("id"));

      if (currentBlock > hour) {
        $(this).addClass("future");
      } else if (currentBlock === hour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("past");
      }
    })
}

saveBtn.on('click', function() {
    // console.log(this); // this is the save button

    var time = $(this).siblings("div.hour").text(); // this should be the hours typed in the div

    var appointment = $(this).siblings(".description").val(); // this should be the text input for the colored time block
    
    localStorage.setItem(time, appointment);

});

function displayAppointment () {
  $('.row').each(function () {
    console.log(this);
    var textInput = $(this).children(".hour").text();
    console.log(textInput);

    var userInput = localStorage.getItem(textInput);

    if(userInput !== null) {
      $(this).children(".description").val(userInput);
    }
  })


}
checkTime();
displayAppointment();


