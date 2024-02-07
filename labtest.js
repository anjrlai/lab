function isFloat(value) {
  if (isNaN(value)) {
    return false;
  }
  return parseFloat(value);
}
var previousMovieName ="";

const setTimeoutHandler = () => {
const isAd = document.getElementById('movie_player').classList.contains("ad-interrupting") || document.getElementById('movie_player').classList.contains("ad-showing");
console.log(isAd);
if(isAd)
{
const nowplaying = document.getElementsByClassName("video-stream")[0];
console.log("有廣告!!!");
const ticks = isFloat(nowplaying.duration -0.5);
nowplaying.currentTime =ticks;
document.querySelector(".ytp-ad-skip-button")?.click();
document.querySelector(".ytp-ad-skip-button-modern")?.click();
console.log("廣告影片縮短了!!!");
}
const movieName = document.querySelector('yt-formatted-string.ytd-watch-metadata').innerText;
if(movieName!=previousMovieName){
console.log("現在播放:"+movieName);
previousMovieName=movieName;
}
setTimeout(setTimeoutHandler, 500);
};
setTimeoutHandler();
