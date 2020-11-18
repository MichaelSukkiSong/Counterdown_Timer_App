/* **************************
1. Countdown Timeer
s- future date
- timer
************************** */

/*********** */
/*Calculation*/
/*********** */

// current time in milliseconds
let now = Date.now();
// target date
const NewYear2021 = new Date(2021, 0, 1, 0, 0, 0);
// target date in milliseconds
const NewYear2021_millisecond = NewYear2021.getTime();
// remaining time in milliseconds
let remainingTime_millisecond = NewYear2021_millisecond - now;
// remaining time in seconds
remainingTime_second = Math.floor(remainingTime_millisecond / 1000);

// calculating it into month/day/hour/min/sec
let month_final = (remainingTime_second / 60 / 60 / 24 / 30)
  .toString()
  .split(".")[0];

let day_final = ((remainingTime_second / 60 / 60 / 24 / 30 - month_final) * 30)
  .toString()
  .split(".")[0];

let hour_final = (
  ((remainingTime_second / 60 / 60 / 24 / 30 - month_final) * 30 - day_final) *
  24
)
  .toString()
  .split(".")[0];

let minute_final = (
  (((remainingTime_second / 60 / 60 / 24 / 30 - month_final) * 30 - day_final) *
    24 -
    hour_final) *
  60
)
  .toString()
  .split(".")[0];

let second_final = Math.round(
  ((((remainingTime_second / 60 / 60 / 24 / 30 - month_final) * 30 -
    day_final) *
    24 -
    hour_final) *
    60 -
    minute_final) *
    60
).toString();
// console.log(month_final, day_final, hour_final, minute_final, second_final);

/*********** */
/*Display in UI*/
/*********** */

// setTimeout(window.location.reload(), 3);

document.querySelector(".months h1").textContent = month_final;
document.querySelector(".days h1").textContent = day_final;
document.querySelector(".hours h1").textContent = hour_final;
document.querySelector(".minutes h1").textContent = minute_final;
document.querySelector(".seconds h1").textContent = second_final;
