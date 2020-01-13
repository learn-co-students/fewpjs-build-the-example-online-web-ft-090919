// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


hideErrorModal();
document.addEventListener('DOMContentLoaded', function(){
  createLikeEvents();  
});

function createLikeEvents(){
  document.querySelectorAll("li.like").forEach(function(likeButton){
    likeButton.addEventListener('click', function(){
      mimicServerCall()
      .then(function(response){
        let likeHeart = likeButton.children[0];
        if(likeHeart.innerHTML == EMPTY_HEART){
          likeHeart.innerHTML = FULL_HEART;
          likeHeart.className = 'activated-heart';
        } else {
          likeHeart.innerHTML = EMPTY_HEART;
          likeHeart.className = '';
        }
      })
      .catch(function(error){
        displayError(error);
      });      
    });
  });
}

function displayError(errorText){
  document.getElementById('modal').className = '';
  document.getElementById('modal-message').innerHTML = errorText;
  setTimeout(hideErrorModal, 5000);
};

function hideErrorModal(){
  document.getElementById('modal').className = 'hidden';
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
