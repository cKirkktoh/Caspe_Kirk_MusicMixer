const dropZone = document.getElementById("drop-zone");
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

audioPlayer.play();

// Set up drag and drop events
dropZone.addEventListener("dragover", function(event) {
    event.preventDefault();
});

dropZone.addEventListener("drop", function(event) {
    event.preventDefault();
    const iconSrc = event.dataTransfer.getData("text");
    audioPlayer.src = "audio/malay_music.mp3";
    playButton.style.display = "inline-block";
    pauseButton.style.display = "inline-block";
    audioPlayer.play(); // Add this line to play the audio automatically
});


// Set up audio player controls
playButton.addEventListener("click", function() {
    audioPlayer.play();
});

pauseButton.addEventListener("click", function() {
    audioPlayer.pause();
    });
    
    // Reset audio player when it finishes playing
    audioPlayer.addEventListener("ended", function() {
    audioPlayer.currentTime = 0;
    playButton.style.display = "inline-block";
    pauseButton.style.display = "none";
    });
    
    // Hide play and pause buttons initially
    playButton.style.display = "none";
    pauseButton.style.display = "none";