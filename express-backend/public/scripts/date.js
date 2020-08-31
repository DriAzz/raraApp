function checkDate() {
    var date = new Date();
    var months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"];

    document.getElementById("month").innerHTML = months[date.getMonth()];
    document.getElementById("dayNumber").innerHTML = date.getDate();
}

function startTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    document.getElementById('time').innerHTML =
        hours + ":" + minutes + ":" + seconds;
    var t = setTimeout(startTime, 500);
}

function getDay() {
    var getDate = new Date();
    var daysOfTheWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    var day = getDate.getDay();
    document.getElementById("dayWord").innerHTML = daysOfTheWeek[day];
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}