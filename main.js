// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";
const headerError = document.querySelector("#modal");

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
  hideError();
});

function hideError() {
  headerError.classList.add("hidden");
  console.log("hideError() called");
}

mimicServerCall();

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
