const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backWard = document.querySelector("#backward");
const $forWard = document.querySelector("#forward");

$play.addEventListener("click", handlePlay);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

$pause.addEventListener("click", handlePause);

function handlePause(params) {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

$backWard.addEventListener("click", handlebackWard);

function handlebackWard(params) {
  $video.currentTime -= 10;
}

$forWard.addEventListener("click", handleforWard);

function handleforWard(params) {
  $video.currentTime += 10;
}

const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded(params) {
  $progress.max = $video.duration;
}

function handleTimeUpdate(params) {
  $progress.value = $video.currentTime;
}

$progress.addEventListener("input", handleInput);

function handleInput(params) {
  $video.currentTime = $progress.value;
}
