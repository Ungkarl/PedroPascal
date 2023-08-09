const playbtnMANDALORIAN = document.querySelector(".play-button-mandalorian");
const videoFORE = document.querySelector(".video-container");
const closevideoMANDALORIAN = document.querySelector(".close-icon-mandalorian");
const stopVIDEO = document.querySelector(".mandalorian-video")


playbtnMANDALORIAN.addEventListener('click', () => {
document.getElementById('yt-video-mandalorian').src = "https://www.youtube.com/embed/aOC8E8z_ifw?autoplay=1";

    setTimeout(() => {
         videoFORE.classList.add("show");
         document.getElementById("play-btn-mandalorian").style.display = "none";
    }, 500);
   


})
closevideoMANDALORIAN.addEventListener('click', () => {
    videoFORE.classList.remove('show')
    document.getElementById('yt-video-mandalorian').src = "";
    document.getElementById('play-btn-mandalorian').style.display = "block"
})


