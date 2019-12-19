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

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
    //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage) {
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      // Basic
      // alert("Something went wrong!");
      // or....
      document.getElementById("modal").className = "";
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

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
