const audio =
document.querySelector(".body");
audio.addEventListener('play',() =>{
    body.addEventListener('play-music');
});
audio.addEventListener('pause',() => {
    body.classList.remove('play-music');
});