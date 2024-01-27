// Pseudocode for the application
// Get the current day and time and display in the header
dayjs.extend(window.dayjs_plugin_advancedFormat);
$("#currentDay").text(dayjs().format("ddd, Do MMM YYYY, HH:mm"));

// declare variables for start and end of day
var start = 9;
var end = 17;

// get the current hour
var currentHour = dayjs().hour();

// Define how the app defines time
function whatHour(hour) {
  // time in the past = time block greyed out
  if (hour < currentHour) {
    return "past";
    // time in the present = time block in red
  } else if (hour === currentHour) {
    return "present";
    // everything else is time in the future = time block in green
  } else {
    return "future";
  }
}

// Create a time block for each hour of the day between 9am and 5pm
for (let i = start; i <= end; i++) {
  // create a variable for the time format
  var timeBlocks = dayjs().hour(i).format("HA");

  // variable that runs the whatHour function to determines the status of the current hour
  var timeStatus = whatHour(i);

  // Append the time block to the container
  $(".container").append(`
    <div class="time-block row" data-time="${i}">
      <div class="col-2 col-sm-1 hour center">${timeBlocks}</div>
      <textarea class="col-8 col-sm-10 description ${timeStatus}"></textarea>
      <button class="col-2 col-sm-1 saveBtn saveButton"><i class="fas fa-save"></i></button>
    </div>
  `);

  // Load events from local storage for the current time block
  var textValue = localStorage.getItem(`time-${i}`);
  // if there is a saved value, set it in the textarea
  if (textValue) {
    $(`.time-block[data-time="${i}"] textarea`).val(textValue);
  }
}

// Add the event listener to the time block save button
$(".saveButton").on("click", function () {
  // Get the value of the textarea
  var textValue = $(this).siblings(".description").val();
  // Get the data-time attribute of the parent time block
  var time = $(this).parent().data("time");

  // Save the value to local storage for the current time block
  localStorage.setItem(`time-${time}`, textValue);
});
