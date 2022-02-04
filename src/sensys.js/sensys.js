let but = document.getElementById("submitButton")
//let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let firstDay = false
let firstDayAgain = false;

for (let i = 0; i < days.length; i++) {
    if (i != 0) {
        startDate.value = endDate.value
        firstDay = true
    }
    for (let j = 0; j < days[i] - 1; j++) {
        if (firstDay != true) {
            startDate.value = (i + 1) + '/' + (j + 1) + '/2018 00:00'
            endDate.value = (i + 1) + '/' + (j + 2) + '/2018 00:00'
        } else if (firstDayAgain) {
            startDate.value = (i + 1) + '/' + (j) + '/2018 00:00'
            j--
        } else {
            endDate.value = (i + 1) + '/' + (j + 1) + '/2018 00:00'
            firstDayAgain = true;
        }
        console.log(startDate.value)
        console.log(endDate.value)
        firstDay = false;
        but.click()
    }
}

let j=0;
let i =0;
let timerId=0;

// let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


//From here
// let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let days = [31, 28]
let prev = "01/01/2018 00:00";
let day = 2;
let month = 0;
let tId = setInterval(iterate, 30000);
let startDate = document.getElementById("criteria.startDateString")
let endDate = document.getElementById("criteria.endDateString")
let but = document.getElementById("submitButton")
let b2;
setTimeout(() => {
    b2 = document.querySelectorAll('.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only')[1]
    if (b2) {
        
        console.log("clicked! :");
        console.log(b2);
        b2.click();   
    } else {
        console.log('button not found!');
    }

}, 40000);

function iterate() {
    if(day > days[month]) {
        day = 1;
        month++;
        console.log("new month is " + (month + 1))
    }
    if (month === days.length) {
        clearInterval(tId);
        console.log("ended")
    } else {
        startDate.value = prev;
        prev = (month + 1) + '/' + (day) + '/2018 00:00'
        endDate.value = prev;
        console.log("start: " + startDate.value + ", end: " + endDate.value);
        but.click()
    }
    day++;
    
}
//To here



for (i=0; i<days.length; i++) {
    if (i != 0) {
        startDate.value = endDate.value
        firstDay = true
    }
    timerId = setInterval(getDay, 7000)
}

function getDay() {
    if (firstDay != true) {
        startDate.value = (i + 1) + '/' + (j + 1) + '/2018 00:00'
        endDate.value = (i + 1) + '/' + (j + 2) + '/2018 00:00'
    } else if (firstDayAgain) {
        startDate.value = (i + 1) + '/' + (j) + '/2018 00:00'
        j--
    } else {
        endDate.value = (i + 1) + '/' + (j + 1) + '/2018 00:00'
        firstDayAgain = true;
    }
    console.log(startDate.value)
    console.log(endDate.value)
    firstDay = false;
    but.click()
    if (j < days[i] - 1) {
        clearInterval(timerId)
    }
    j++
}