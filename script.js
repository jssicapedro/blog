const likes = document.querySelectorAll('.icon-heart1')

const title = document.querySelectorAll(".title");
const news = document.querySelectorAll(".news");
const search = document.querySelector("input");


// likes

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

//busca

search.onkeyup = function () {
    let searchValue = search.value.toLowerCase();
    for (let i = 0; i < news.length; i++) {
      let titleContain = title[i].innerText;
      let results = titleContain.toLowerCase().indexOf(searchValue) >= 0;
      news[i].style.display = results ? "" : "none";
    }
  };