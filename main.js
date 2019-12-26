// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll('.like-glyph')
const errorModal = document.getElementById("modal")
const errorMessage = document.getElementById("modal-message")


hearts.forEach(function(heart) {
  heart.addEventListener("click", function(event) {
      const h = event.target
      updateHeart(h)
  })
})

const updateHeart = (h) => {
  id = h.id 
  updateLike(id)
}

function updateLike(id) {
  mimicServerCall()
    .then(response => checkResponse(response, id))
    .catch(error => renderError(error))
    .then(setTimeout(() => {
      resetModal();
    }, 5000));
}


function checkResponse(response, id) {
  if (response == "Pretend remote server notified of action!", id) {
    addLike(id)
  }
}


function addLike(id) {
  const newLike = document.querySelector(`#${id}`)
  newLike.textContent = FULL_HEART
  if (newLike.classList.contains('activated-heart')) {
    newLike.className = 'like-glyph'
  } else {
    newLike.className += ' activated-heart'
  }
}


function renderError(error) {
  errorModal.className = "visible"
  errorMessage.innerText = `${error}`
}


function resetModal() {
  errorModal.className = "hidden"
  errorMessage.innerText = ""
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
