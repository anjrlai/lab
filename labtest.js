function isFloat(value) {
  if (isNaN(value))
    return 0;
  return parseFloat(value);
}
var previousMovieName ="";
const setTimeoutHandler = () => {
  //檢查是否有廣告插入
  const isAd = document.getElementById('movie_player').classList.contains("ad-interrupting") || document.getElementById('movie_player').classList.contains("ad-showing");
  console.log(isAd);
  if(isAd){
    //抓取目前播放影片資訊「廣告」
    const nowplaying = document.getElementsByClassName("video-stream")[0];
    const adtitle = document.querySelector('.ytp-flyout-cta-headline');
    console.log("發現廣告!!");
    const ticks = isFloat(nowplaying.duration -0.3);
    //快轉廣告影片剩下0.3秒
    nowplaying.currentTime =ticks;
    //點選廣告上方的略過按鈕
    document.querySelector(".ytp-ad-skip-button")?.click();
    document.querySelector(".ytp-ad-skip-button-modern")?.click();
    console.log("快轉廣告影片!!");
  }
  const movieName = document.querySelector('yt-formatted-string.ytd-watch-metadata').innerText;
  //抓取自動播放資訊
  const overlay = document.querySelector('.ytp-autonav-endscreen-countdown-overlay');
  //若是出現盜數計時秒數時，自動按下播放下一部影片
  if((overlay != null )&&(overlay.style.display != 'none')){
    console.log("快速播放下一部!!!");
    document.querySelector('.ytp-autonav-endscreen-upnext-play-button').click();
  }
  if(movieName!=previousMovieName){
    //若影片名稱是新的，顯示影片名稱
    console.log("現在播放:"+movieName);
    previousMovieName=movieName;
  }
  //0.5秒後再次檢查是否有廣告插入
  setTimeout(setTimeoutHandler, 500);
};
//啟動檢查程序
setTimeoutHandler();
