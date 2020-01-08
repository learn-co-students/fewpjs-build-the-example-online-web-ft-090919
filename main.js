// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
likeElementArray = document.querySelectorAll(".like-glyph")
likeElementArray.forEach(element => {addLikeEventListener(element)})

function addLikeEventListener(element){
  element.addEventListener("click", e => {
    if(e.target.innerHTML == EMPTY_HEART){
      mimicServerCall().then(response => {
        e.target.innerHTML = FULL_HEART
        e.target.className = "activated-heart"}) 
      .catch(error => {
        document.querySelector("#modal-message").innerHTML = error
        activateError()})
    } else if (e.target.innerHTML == FULL_HEART){
      mimicServerCall().then(response => {
        e.target.innerHTML = EMPTY_HEART
        e.target.className = ""})
      .catch(error => {
        document.querySelector("#modal-message").innerHTML = error
        activateError()})
    }
  })
}

function activateError(){
  document.querySelector("#modal").className = ""
  setTimeout(()=>{document.querySelector("#modal").className = "hidden"}, 5000)
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
}
