function updateClock() {
  var timeElement = document.getElementById('time');
  var ampmElement = document.getElementById('ampm');
  var dateElement = document.getElementById('date');

  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
  var monthIndex = now.getMonth();
  var dayIndex = now.getDay();
  var dayOfMonth = now.getDate();

  var ampm = hours >= 12 ? 'PM' : 'AM';

  // Arrays for month and day names
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, set it to 12

  // Add leading zeros
  var formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  // Format date as Oct, Tuesday 01
  var formattedDate = `${monthNames[monthIndex]}, ${dayNames[dayIndex]} ${String(dayOfMonth).padStart(2, '0')}`;

  // Update the HTML elements
  timeElement.textContent = formattedTime;
  ampmElement.textContent = ampm;
  dateElement.textContent = formattedDate;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();
