var currentDay = $('#currentDay')
var appointments = [];
var timeBlockEl = $('.time-block');
var liveTime = new Date().toLocaleTimeString();
var day = dayjs();
var saveBtn = $('.saveBtn');
// empty times array for office
var timesArr = [];
i = 0;
$('div.row').each(function () {
  timesArr[i++] = $(this).attr('id');
})
console.log(timesArr); // logs the times array in order on page load...

$(function () {   
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
      currentBlock = parseInt($(this).attr("id"));

      console.log(this);

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
    var time = $(this).siblings(".row").text();
    var appointment = $(this).sublings(".description");

    localStorage.setItem(time, appointment);
  });

    function displayAppointment () {
    $('.row').each(function () {
      var textInput = $(this).text();
      var userInput = localStorage.getItem(textInput);

      if(userInput !== null) {
        $(this).siblings(".description").val(userInput);
      }
    })
  }
  checkTime();
  displayAppointment();
});

