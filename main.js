// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.like-glyph').forEach(glyph => glyph.onclick = like);
});

let heartStates = {
    '♡': false,
    '♥': true
}
function like(e) {
    mimicServerCall()
        .then(
            () => {
                if(heartStates[e.target.innerText]){
                    e.target.innerText = EMPTY_HEART; 
                    e.target.classList.remove('activated-heart');
                } else {
                    e.target.innerText = FULL_HEART; 
                    e.target.classList.add('activated-heart');
                }
            }
        )
        .catch(
            message => {
                let modal = document.getElementById('modal');
                modal.classList.remove('hidden');
                document.getElementById('modal-message').innerText = message;
                setTimeout(function () { modal.classList.add('hidden') }, 5000);
            }

        );
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
