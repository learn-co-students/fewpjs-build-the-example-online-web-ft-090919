// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const HEART_STYLE = {
  "like-glyph" : "like-glyph activated-heart",
  "like-glyph activated-heart" : "like-glyph"
}

function hideError(){
  let modal = document.querySelector("#modal")
    modal.classList.add("hidden")
    return true
}

function showError(error){
  let modal = document.querySelector("#modal")
  let message = document.querySelector("#modal-message")

  message.textContent = error
  modal.classList.remove("hidden")
  setTimeout(function(){ hideError() }, 5000)
}


function likeHandler(e){
  mimicServerCall()
  .then(function(resp){
    return resp.json()
  })
  .then(function(json){
    let heartSpan = e.target
    heartSpan.className = HEART_STYLE[heartSpan.className]
  })
  .catch(function(error){
    let heartSpan = e.target
    showError(error)
  })

}


document.addEventListener('DOMContentLoaded', function(){

  let likes = document.querySelectorAll(".like-glyph")

  likes.forEach(elem => elem.addEventListener('click', function(e){
    likeHandler(e)
  }))

})

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
}
