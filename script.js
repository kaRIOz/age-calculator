// input number
const inputYears = document.querySelector(".input-years");
const inputMonth = document.querySelector(".input-month");
const inputDay = document.querySelector(".input-day");

// output number
const outputYears = document.querySelector(".output-years");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");

// errors
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYears = document.querySelector(".error-years");

// btn
const btn = document.querySelector(".btn");

btn.addEventListener("click", getResult);

function getResult() {
  if (inputDay.value > 31 || inputDay.value < 1) {
    errorDay.textContent = "must be a valid day";
    inputDay.style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    errorDay.textContent = "";
    inputDay.style.borderColor = "hsl(0, 0%, 94%)";
  }
  if (inputMonth.value > 12 || inputMonth.value < 1) {
    errorMonth.textContent = "must be a valid day";
    inputMonth.style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    errorMonth.textContent = "";
    inputMonth.style.borderColor = "hsl(0, 0%, 94%)";
  }
  if (inputYears.value > 2024 || inputYears.value < 1950) {
    errorYears.textContent = "must be a valid day";
    inputYears.style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    errorYears.textContent = "";
    inputYears.style.borderColor = "hsl(0, 0%, 94%)";
  }

  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const date = new Date();
  let day = date.getDate();
  let month = 1 + date.getMonth();
  let year = date.getFullYear();

  if (inputDay.value > day) {
    day = day + months[month - 1];
    month = month - 1;
  }
  if (inputMonth.value > month) {
    month = month + 12;
    year = year - 1;
  }

  const getDay = day - inputDay.value;
  const getMonth = month - inputMonth.value;
  const getYear = year - inputYears.value;

  outputYears.textContent = getYear;
  outputMonth.textContent = getMonth;
  outputDay.textContent = getDay;
}
