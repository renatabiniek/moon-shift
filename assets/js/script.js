/**
 * Wait for DOM to load
 * and display Work timer mode of 25 mins as a default 
 */
let minutes = 25;
let seconds = 0;
let interval;

let displayMins = document.getElementById("countdown-mins");
let displaySecs = document.getElementById("countdown-secs");

//wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    
});

//add event listeners for mode buttons 

let modes = document.getElementsByClassName("mode");
    
    for (let mode of modes){
        mode.addEventListener("click", function() {
            if (this.getAttribute("data-mode") === "1500") {
                alert("Time to work");
            } else if (this.getAttribute("data-mode") === "300") {
                alert("Take a short break!");
            } else {
                alert("Take a longer break!");
            }
        });

    }

// timer functions

//get timer buttons and add event listeners to each

let timerbuttons = document.getElementsByClassName("timer-btn");

    for (let timerbutton of timerbuttons) {
        timerbutton.addEventListener("click", function() {
            if (this.getAttribute("data-status") === "start") {
            clearInterval(interval);
            startFocusing();

        } else if (this.getAttribute("data-status") === "stop") {
            stopTimer();

        } else {
            resetTimer();
        }          
    });
}

//function to start a 25 minute focus session

function startFocusing() {
    
let minutes = 1;

    interval = setInterval(function() {
        
        if (minutes == 0 && seconds == 0) {
            clearInterval(interval);
            alert("Take a break!");
            document.title = "Take a break!";

        } else if (seconds == 0) {
            minutes = minutes - 1;
            seconds = 59;
            
            //add leading zeros to numbers that only are one digit long
            displayMins.innerHTML = minutes  < 10 ? "0" + minutes : minutes;
            displaySecs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            
            //display current time in the browser tab
            let currentTime = `${minutes  < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
            document.title = currentTime;

        } else if (seconds != 0) {
            seconds = seconds - 1;

            //add leading zeros to numbers that only are one digit long
            displayMins.innerHTML = minutes  < 10 ? "0" + minutes : minutes;
            displaySecs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            
            //display current time in the browser tab
            let currentTime = `${minutes  < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
            document.title = currentTime;     
        } 

    }, 1000);
   
}

function stopTimer() {
    clearInterval(interval);
    console.log("you clicked stop");
}

// rest timer 
function resetTimer() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    displayMins.innerHTML = minutes  < 10 ? "0" + minutes : minutes;
    displaySecs.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    
    let currentTime = `${minutes  < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;
    document.title = currentTime;     
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
