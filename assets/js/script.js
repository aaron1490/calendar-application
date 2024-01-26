// Pseudocode for the application
// Get the current day and time and display in the header
dayjs.extend(window.dayjs_plugin_advancedFormat);
$("#currentDay").text(dayjs().format("ddd, Do MMM YYYY, HH:mm"));

// declare variables for start and end of day
var start = 9;
var end = 17;

var currentHour = dayjs().hour();
console.log(currentHour);

// Define how the app understands time
function whatHour(hour) {
  // ie time in the past = time block greyed out
  if (hour < currentHour) {
    return "past";
    // ie time in the present = time block in color
  } else if (hour === currentHour) {
    return "present";
    // ie time in the future = time block in color
  } else {
    return "future";
  }
}

// Create a time block for each hour of the day between 9am and 5pm
for (let i = start; i <= end; i++) {
  var timeBlocks = dayjs().hour(i).format("HA");
  console.log(timeBlocks);
  var timeStatus = whatHour(i);

  // Append the time block to the container
  $('.container').append(`
<div class="row time-block">
    <div class="col-2 col-sm-1 hour center">${timeBlocks}</div>
    <textarea class="col-8 col-sm-10 description ${timeStatus}"></textarea>
    <button class="col-2 col-sm-1 saveBtn saveButton"><i class="fas fa-save"></i></button>
</div>
`);
}

// Add the event listener to the time block save button
$('.saveButton').on('click', function() {
    // Get the value of the textarea
    var textValue = $(this).siblings('.description').val();
    // Save the value to local storage or perform any other action
    localStorage.setItem($(this).siblings('.hour').text(), textValue);
});

// Load events from local storage
for (let i = start; i <= end; i++) {
    var timeBlocks = dayjs().hour(i).format("HA");
    var textValue = localStorage.getItem(timeBlocks);
    $(`.${whatHour(i)}`).val(textValue);
}