document.addEventListener("DOMContentLoaded", function () {

    let covers = document.getElementsByClassName("item");
    covers[Math.floor(Math.random() * 16 + 1)].classList.remove("cover");
    covers[Math.floor(Math.random() * 16 + 1)].classList.remove("cover");
});