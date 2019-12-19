// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeBtns = document.querySelectorAll(".like")
const likeGlyphs = document.querySelectorAll(".like-glyph")
for (let i = 0; i < likeBtns.length; i++) {
  likeBtns[i].addEventListener("click", () => {
    if (likeGlyphs[i].classList.contains("activated-heart") == true) {
      mimicServerCall()
      .then(() => {
        likeGlyphs[i].innerText = EMPTY_HEART
        likeGlyphs[i].classList.remove("activated-heart")
      })
      .catch(err => displayError(err))
      

    } else {
      mimicServerCall()
      .then(() => {
        likeGlyphs[i].classList.add("activated-heart")
        likeGlyphs[i].innerText = FULL_HEART
      })
      .catch(err => displayError(err))
    }
})

function displayError(err) {
        let errModal = document.querySelector("#modal")
        errModal.classList.remove("hidden")
        console.log(err)
        errModal.innerText = err
        setTimeout(() => {
          errModal.classList.add("hidden")
        }, 5000)
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}}
