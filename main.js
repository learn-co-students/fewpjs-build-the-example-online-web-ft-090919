// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let onOff = {
  '♡': '♥',
  '♥': '♡'
};

const hearts = document.getElementsByClassName('like-glyph')

function acivateLike(event){
  const heart = event.target;
  mimicServerCall("url")
  .then(msg => {
    heart.innerText = onOff[heart.innerText];
    heart.classList.contains("activated-heart") ? heart.classList.remove("activated-heart") : heart.classList.add("activated-heart");
  })
  .catch(error => {
    document.getElementById("modal").className = "";
    document.getElementById("modal-message").innerText = error.message;
    setTimeout(function(){
      document.getElementById("modal").className = "hidden";
    }, 5000);
  })
}

for (const heart of hearts) {
  heart.addEventListener("click", acivateLike)
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
