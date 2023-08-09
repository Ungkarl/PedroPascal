const playbtnTRIPLE = document.querySelector(".play-button-triple");
const closevideoTRIPLE = document.querySelector(".close-icon-triple");
const stopvideoTRIPLE = document.querySelector(".lastofus-triple");
const videoFORE = document.querySelector(".video-container");

playbtnTRIPLE.addEventListener("click", () => {
  document.getElementById("yt-video-triple").src =
    "https://www.youtube.com/embed/Fo3yRLLrXQA?autoplay=1";
  setTimeout(() => {
    videoFORE.classList.add("show");
    document.getElementById("play-btn-triple").style.display = "none";
  }, 500);
});
closevideoTRIPLE.addEventListener("click", () => {
  videoFORE.classList.remove("show");
  document.getElementById("yt-video-triple").src = "";
  document.getElementById("play-btn-triple").style.display = "block";
});
