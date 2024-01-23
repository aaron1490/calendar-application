// Pseudocode for the application
// Get the current day and time and display in the header
dayjs.extend(window.dayjs_plugin_advancedFormat);
$("#currentDay").text(dayjs().format('ddd, Do MMM YYYY, HH:mm'));

// Create a time block for each hour of the day between 9am and 5pm
for (let i = 9; i <= 17; i++) {
    var timeBlocks = dayjs().hour(i).format('h A');
    console.log(timeBlocks);

    // Create a time block for each hour of the day

    
    // Add the time block to the container


}


// Add the time block to the container


// Define how the app understands time
// ie time in the past = time block greyed out
// ie time in the future = time block in color



// Add the event listener to the time block


// Add the event listener to the save button


// Add the event listener to the clear button


// Save and load events for each time block