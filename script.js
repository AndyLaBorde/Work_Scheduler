// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentTime = dayjs();
var currentDay = $('#currentDay')
var textArea = $('textarea', this).val();
var appointments = [];
var hoursEl = $('#hours', this).children();
var timesArr = [];
i = 0;
$('div.row').each(function () {
  timesArr[i++] = $(this).attr('data-hour');
  
})
console.log(timesArr);
$(function () {
  console.log(hoursEl);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  $(document).on('click', '.saveBtn', function() {
    // DOM traversal can be used to get the "hour-x" id of the parent element a.k.a ->
    var parentEl = $(this).parent();

    var userInputObject = {
      id: parentEl[0].id,
      userInput: parentEl[0].children[1].value
    }
    appointments.push(userInputObject);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    console.log(localStorage.appointments);
    console.log(parentEl[0].id);
    
    // textArea.text(localStorage.getItem("appointments")) || [];
    
    console.log(textArea);
    // for (var i = 0; i < appointments.length; i++){
    //   textArea.textContent = `${textArea[i].userInput}`;
    //   textArea.append('userInput');
    // }
  })

  // .then(function displayApp() {

  // })
  // How might the id be
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
  var day = dayjs();
  window.onload = displayClock();
  function displayClock(){
    var liveTime = new Date().toLocaleTimeString();
  
    currentDay.text(day.format("MM DD, YYYY") + " " + liveTime);
    setTimeout(displayClock, 1000);
  }
});

