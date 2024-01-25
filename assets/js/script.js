// Pseudocode for the application
// Get the current day and time and display in the header
dayjs.extend(window.dayjs_plugin_advancedFormat);
$("#currentDay").text(dayjs().format("ddd, Do MMM YYYY, HH:mm"));

// declare variables for start and end of day
var start = 9;
var end = 17;

// Define how the app understands time
var currentHour = dayjs().hour();
console.log(currentHour);

// ie time in the past = time block greyed out
// var pastTime = currentHour > ;

// ie time in the future = time block in color

// Create a time block for each hour of the day between 9am and 5pm
for (let i = start; i <= end; i++) {
  var timeBlocks = dayjs().hour(i).format("HA");
  console.log(timeBlocks);

  // Append the time block to the container
  $('.container').append(`
<div class="row time-block">
    <div class="col-1 hour center">${timeBlocks}</div>
    <textarea class="col-10 description"></textarea>
    <button class="col-1 saveBtn"><i class="fas fa-save"></i></button>
</div>
`);
}

// Add the event listener to the time block save button

// Add the event listener to the save button

// Add the event listener to the clear button

// Save and load events for each time block
