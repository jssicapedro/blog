const likes = document.querySelectorAll('.icon-heart1')
/* likes.addEventListener('click', function() {
   
    if(likes.classList.contains("icon-heart1")){
        likes.classList.remove("icon-heart1");
        likes.classList.add("icon-heart");
    } else {
        likes.classList.remove("icon-heart");
        likes.classList.add("icon-heart1");
    }
}) */

for (let like of likes) {
    like.addEventListener("click", function () {
      if (like.classList.contains("icon-heart1")) {
        like.classList.remove("icon-heart1");
        like.classList.add("icon-heart");
      } else {
        like.classList.remove("icon-heart");
        like.classList.add("icon-heart1");
      }
    });
  }