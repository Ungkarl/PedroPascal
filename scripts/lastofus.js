const playbtnLASTOFUS = document.querySelector(".play-button-lastofus");
const closevideoLASTOFUS = document.querySelector(".close-icon-lastofus");
const stopvideoLASTOFUS = document.querySelector(".lastofus-video");
const videoFORE = document.querySelector(".video-container");




playbtnLASTOFUS.addEventListener("click", () => {
  document.getElementById("yt-video-lastofus").src =
    "https://www.youtube.com/embed/uLtkt8BonwM?&autoplay=1";
  setTimeout(() => {
    videoFORE.classList.add("show");
    document.getElementById("play-btn-lastofus").style.display = "none";
  }, 500);
});
closevideoLASTOFUS.addEventListener("click", () => {
  videoFORE.classList.remove("show");
  document.getElementById("yt-video-lastofus").src = "";
  document.getElementById("play-btn-lastofus").style.display = "block";
});