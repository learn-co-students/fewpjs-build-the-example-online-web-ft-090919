// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHearts = document.querySelectorAll('.like-glyph');
const errorModal = document.querySelector('#modal');

function addLike(id) {
  mimicServerCall()
    .then(response => checkResponse(response, id))
    .catch(error => renderError(error))
    .then(setTimeout(() => {
      resetModal();
    }, 5000));
}

function checkResponse(response, id) {
  if (response == "Pretend remote server notified of action!") {
    renderLike(id);
  }
}

function renderLike(id) {
  const heart = document.querySelector(`#${id}`);
  heart.textContent = FULL_HEART;
  if (heart.classList.contains("activated-heart")) {
    heart.className = "like-glyph";
  } else {
    heart.className += " activated-heart";
  }
}

function renderError(message) {
  errorModal.className = "visible";
  errorModal.querySelector('p').textContent = message;
}

likeHearts.forEach(function(heart) {
  heart.addEventListener('click', function(e) {
    addLike(e.target.id);
  });
});

function resetModal() {
  errorModal.className = "hidden";
  errorModal.querySelector('p').textContent = "";
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'


// // Your JavaScript code goes here!
// const hearts = [...document.getElementsByClassName('like')]
// const modal = document.getElementById('modal')
// hearts.forEach( heart => heart.addEventListener('click', toggleLike))

// function toggleLike(e) {
//   let heart = e.target;
//   mimicServerCall()
//   .then(resp => {
//     if (resp == "Pretend remote server notified of action!") {
//       modal.className = "hidden";
//       heart.className = "activated-heart"
//       console.log("no errors here");

//     }
//   })

//     .catch(error => {
//     modal.className = null
//     modal.innerHTML = `<h1>ERROR</h1><br>${error}`
//     })
// }


// //------------------------------------------------------------------------------
// // Ignore after this point. Used only for demo purposes
// //------------------------------------------------------------------------------

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }
