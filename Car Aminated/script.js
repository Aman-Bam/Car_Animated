var audio = document.createElement('audio');
audio.src = 'sound.mp3';
// audio.loop = true;
// audio.autoplay = true; 
audio.setAttribute('preload', 'auto');
document.body.appendChild(audio);

audio.play().catch(() => {

    var playButton = document.createElement('button');
    playButton.textContent = 'Play Sound';
    playButton.style.position = 'absolute';
    playButton.style.top = '20px';
    playButton.style.left = '20px';
    playButton.style.padding = '10px 20px';
    playButton.style.fontSize = '16px';
    playButton.style.cursor = 'pointer';
    document.body.appendChild(playButton);

    playButton.addEventListener('click', function () {
        // audio.play();
        playButton.remove(); 
    });
});
