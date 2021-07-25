
/**
 * Wait for DOM to load
 * and display Work timer mode of 25 mins as a default 
 */

document.addEventListener("DOMContentLoaded", function() {
    let minutes = 1500 / 60;
    let seconds = 00;
    document.getElementById("countdown-min").innerHTML = minutes;
    document.getElementById("countdown-sec").innerHTML = seconds;
})

//add event listeners for mode buttons 

let modes = document.getElementsByClassName("mode");
    
    for (let mode of modes){
        mode.addEventListener("click", function() {
            if (this.getAttribute("data-mode") === "1500") {
                alert("Time to work");
                startTimer(10);
            } else if (this.getAttribute("data-mode") === "300") {
                alert("Take a short break!");
            } else {
                alert("Take a longer break!")
            }
        })

    };

// timer functions

let timer;

function startTimer(seconds) {
    //get current time stamp and add a number of seconds converted into miliseconds
    const now = Date.now();
    const then = now + seconds * 1000;

    //count down every second

    timer = setInterval(function() {
        const remainingSeconds = Math.floor((then - Date.now()) / 1000);
        console.log(remainingSeconds);
    //stop if seconds get to zero    
        if (remainingSeconds <= 0) {
            clearInterval(timer);
        }
    }, 1000);

}


function stopTimer() {

}

function resetTimer() {

}



//functions for modals

//when user clicks on "?" button, open the modal with instructions
let modal = document.getElementById("instructions-modal");
document.getElementById("open-btn").addEventListener("click", function() {
modal.style.display = "block";
})

//when user clicks on "x" button, close the modal
document.getElementsByClassName("close-modal")[0].addEventListener("click", function() {
    modal.style.display = "none";
    })

//when user clicks anywhere else on the window, close the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
}
