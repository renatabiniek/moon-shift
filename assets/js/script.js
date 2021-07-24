
/**
 * Wait for DOM to load
 * and display Work timer mode of 25 mins as a default 
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded")
})


// timer


function startTimer(seconds) {
    const now = Date.now(); 
    console.log(now);
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
