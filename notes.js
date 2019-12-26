
// change heart on click
function clickEvent(){
    //  document.querySelector(".like-glyph")
    const heart = document.getElementsByClassName("like-glyph")
    heart.forEach(addEventListener("click", function(){
        updateHeart(heart)
    }))
  }
  
  const updateHeart = (heart) => {
    heart.style.color = "red"
  }
  