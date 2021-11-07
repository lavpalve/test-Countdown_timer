
var timesInSecond = 3603;

var hours = 0;
var minutes = 0;
var seconds = 0;

function calculateTime(){
    hours = parseInt(timesInSecond / 3600);
    minutes = parseInt(timesInSecond / 60) - (hours * 60);
    seconds = timesInSecond % 60;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    timesInSecond -= 1;
}

setInterval(calculateTime, 1000);


