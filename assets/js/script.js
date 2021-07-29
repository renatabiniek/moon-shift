/**
 * Wait for DOM to load
 * and display Work timer mode of 25 mins as a default 
 */
let focusMinutes = 25;
let breakMinutes = 5;
let longBreak = 15;
let minutes;
let seconds = 0;
let interval;

//the timer isn't paused at the start so isPaused is false in the beginning 
let isPaused = false;

//check if break mode button has been clicked or if break is running
let breakRunning = false;

//track if focusing session is active
let isFocused = false;

let longBreakRunning = false;

const displayMins = document.getElementById("countdown-mins");
const displaySecs = document.getElementById("countdown-secs");

//wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

});

//add event listeners for mode buttons 

let modes = document.getElementsByClassName("mode");
    
    for (let mode of modes){
        mode.addEventListener("click", function() {
            if (this.getAttribute("data-mode") === "focus") {

                    clearInterval(interval);
                    alert("Time to work");
                    displayMins.innerText = focusMinutes < 10 ? "0" + focusMinutes : focusMinutes;
                    displaySecs.innerText = seconds < 10 ? "0" + seconds : seconds;
                    console.log("time to work");
                    console.log(isFocused);  


            } else if (this.getAttribute("data-mode") === "shortbreak") {
               
                if (isFocused === false) {
                    clearInterval(interval);
                    alert("Take a short break!");
                    displayMins.innerText = breakMinutes < 10 ? "0" + breakMinutes : breakMinutes;
                    displaySecs.innerText = seconds < 10 ? "0" + seconds : seconds;
                    breakRunning = true;
                    console.log("short break");
                    console.log(isFocused);
                }
                
            } else {
                alert("Take a longer break!");
                displayMins.innerText = longBreak < 10 ? "0" + longBreak : longBreak;
                displaySecs.innerText = seconds < 10 ? "0" + seconds : seconds;
                longBreakRunning = true;
                console.log("long break");
                console.log(isFocused);
            }
        });

    }

//timer functions

//get timer buttons and add event listeners to each

let timerbuttons = document.getElementsByClassName("timer-btn");

    for (let timerbutton of timerbuttons) {
        timerbutton.addEventListener("click", function() {

            if (this.getAttribute("data-status") === "start") {
                //If the break button was clicked run 5 min break 
                if (breakRunning === true) {
                    startBreak();
                    console.log("start break")
                } else if (longBreakRunning === true) {
                    longbreak();
                    console.log("start long break")

                //if the break button wasn't clicked start focusing 
                } else if (!breakRunning) {
                    startFocusing();
                    console.log("start focusing")
                }

            } else if (this.getAttribute("data-status") === "stop") {
                stopTimer();
                console.log("stop timer")

            } else {
                resetTimer();
                console.log("reset timer")
        }          
    });
}

/**
 * function to start a 25 minute focus session
 */

function startFocusing() {

    isFocused = false;

    //check if the value of isPaused === false; if it is, change the minutes and seconds back to the orginal numbers
    if (!isPaused) {
        minutes = 25;
        seconds = 0;
    }

    interval = setInterval(function() {
        
        if (minutes == 0 && seconds == 0) {

            //this is set back to false as the timer has completed here and needs to be reset back to the original numbers so that another timer can be started at 25 minutes
            isPaused = false;
            alert("Take a break!");
            document.title = "Take a break!";
            isFocused = false;
            console.log(isFocused);

        } else if (seconds == 0) {
            minutes = focusMinutes - 1;
            seconds = 59;
            
            //add leading zeros to numbers that only are one digit long
            displayMins.innerHTML = minutes  < 10 ? "0" + minutes : minutes;
            displaySecs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            
            //display current time in the browser tab
            let currentTime = `${minutes  < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
            document.title = currentTime;

            isFocused = true;
            console.log(isFocused);

        } else if (seconds != 0) {
            seconds = seconds - 1;

            //add leading zeros to numbers that only are one digit long
            displayMins.innerHTML = minutes  < 10 ? "0" + minutes : minutes;
            displaySecs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            
            //display current time in the browser tab
            let currentTime = `${minutes  < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
            document.title = currentTime;     

            isFocused = true;
            console.log(isFocused);
        } 
    }, 1000);
}

/**
 * start a short break session after a full focusing session has been completed
 */

function startBreak() {

    if (!isPaused) {
        minutes = 5;
        seconds = 0;
    }

    displayMins.innerHTML = minutes  < 10 ? "0" + minutes : minutes;
    displaySecs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
   
    interval = setInterval(function() {

        if (seconds == 0) {
            minutes = breakMinutes - 1;
            seconds = 59;
            displayMins.innerHTML = minutes  < 10 ? "0" + minutes : minutes;
            displaySecs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            breakRunning = true;

        } else if (seconds !=0) {
            seconds = seconds - 1;
            displayMins.innerHTML = minutes  < 10 ? "0" + minutes : minutes;
            displaySecs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            breakRunning = true;

        } else if (minutes == 0 && seconds == 0) {
            isPaused = false;
            alert("Back to work!");
            breakRunning = false;
        }
    }, 1000);    
}

/**
 * start a longer 15 minute break 
 */

function longbreak() {
 
        minutes = 15;
        seconds = 0;
    
    interval = setInterval(function() {

        if (seconds == 0) {
            minutes = longBreak - 1;
            seconds = 59;
            displayMins.innerHTML = minutes  < 10 ? "0" + minutes : minutes;
            displaySecs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            breakRunning = true;

        } else if (seconds !=0) {
            seconds = seconds - 1;
            displayMins.innerHTML = minutes  < 10 ? "0" + minutes : minutes;
            displaySecs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            breakRunning = true;

        } else if (minutes == 0 && seconds == 0) {
            alert("Back to work!");
            breakRunning = false;
        }
    }, 1000);
}

// pause timer
function stopTimer() {
    clearInterval(interval);
    //set timer to isPaused = true to prevent the timer from resetting the clock 
    isPaused = true;
    breakRunning = false;
    isFocused = false;
    console.log("you clicked stop");
    console.log(isFocused);
}

// reset timer 
function resetTimer() {
    clearInterval(interval);
    breakRunning = false;
    isFocused = false;
    seconds = 0;
    minutes = 0;
    displayMins.innerHTML = minutes  < 10 ? "0" + minutes : minutes;
    displaySecs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    
    let currentTime = `${minutes  < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
    document.title = currentTime;
    //set to false so that the timer can reset the minutes and seconds to the orginal session time when the startFocusing function is run again
    isPaused = false;
    console.log(isFocused);
}


//functions for modals

//when user clicks on "?" button, open the modal with instructions
let modal = document.getElementById("instructions-modal");
document.getElementById("open-btn").addEventListener("click", function() {
modal.style.display = "block";
});

//when user clicks on "x" button, close the modal
document.getElementsByClassName("close-modal")[0].addEventListener("click", function() {
    modal.style.display = "none";
    });

//when user clicks anywhere else on the window, close the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
};
