
/**
 * Wait for DOM to load
 * and display Work timer mode of 25 mins as a default 
 */

document.addEventListener("DOMContentLoaded", function() {
    let minutes = 25;
    //display leading 0 for correct time format
    let seconds = "0"+0;
    document.getElementById("countdown-min").innerHTML = minutes;
    document.getElementById("countdown-sec").innerHTML = seconds;
})

// timer functions

function startTimer() {
    
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
