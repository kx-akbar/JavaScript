
"use script";

function timeShower() {
    let timeNow = new Date();

document.getElementById("days").textContent = timeNow.getDate();
document.getElementById("hour").textContent = timeNow.getHours();
document.getElementById("minute").textContent = timeNow.getMinutes();
document.getElementById("second").textContent = timeNow.getSeconds();
}

timeShower();

setInterval (function() {
    timeShower();
}, 1000);
