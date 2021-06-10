const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');
const nextYearContainer = document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
const countdownContainer = document.querySelector('#countdown');

// Catch the nextYear
const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

// Put the nextYear in the screen
nextYearContainer.textContent = nextYear;

// Time < 10 the time will receive a zero before
const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
  secondsContainer.innerHTML = getTimeUnit(seconds);
  minutesContainer.innerHTML = getTimeUnit(minutes);
  hoursContainer.innerHTML = getTimeUnit(hours);
  daysContainer.innerHTML = getTimeUnit(days);
};

const updateCountdown = () => {
  const currentTime = new Date();
  // Catch the difference between the new year and the current time
  const difference = newYearTime - currentTime;

  // Milliseconds / 1000 turn to seconds / 60 turn to minutes / 60 to hours / 24 to days   
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);

  // (Milliseconds / 1000 turn to seconds / 60 turn to minutes / 60 to hours) % 24 
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;

  // (Milliseconds / 1000 turn to seconds / 60 turn to minutes) % 60 
  const minutes = Math.floor(difference / 1000 / 60) % 60;

  // (Milliseconds / 1000 turn to seconds) % 60 
  const seconds = Math.floor(difference / 1000) % 60;

  insertCountdownValues({ days, hours, minutes, seconds });
};

// Remove the loading gif and show the countdown display
const handleCountdownDisplay = () => {
  spinnerLoading.remove();
  countdownContainer.style.display = 'flex';
}
// Start the handleCountdownDisplay when the page starts and stop one second after
setTimeout(handleCountdownDisplay, 1000);

// Start the function every second
setInterval(() => updateCountdown(), 1000);