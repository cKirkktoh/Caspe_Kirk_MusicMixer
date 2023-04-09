// Get all the SVG icons and add a dragstart event listener to them
const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
  icon.addEventListener('dragstart', e => {
    // Set some data on the drag event that identifies which audio file to play
    const audioSrc = icon.getAttribute('data-audio-src');
    e.dataTransfer.setData('text/plain', audioSrc);
  });
});

// Get all the drop zones and add dragover and drop event listeners to them
const dropZones = document.querySelectorAll('.drop-zone');
dropZones.forEach(zone => {
  zone.addEventListener('dragover', e => {
    e.preventDefault();
  });

  zone.addEventListener('drop', e => {
    e.preventDefault();
    // Get the audio file to play from the data set on the drag event
    const audioSrc = e.dataTransfer.getData('text/plain');
    // Find the corresponding audio player and play it
    const audioPlayer = document.querySelector(`.audio-player[src="${audioSrc}"]`);
    if (audioPlayer) {
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    }
  });
});

// Get all the audio players and add event listeners to their corresponding play/pause buttons
const audioPlayers = document.querySelectorAll('.audio-player');
audioPlayers.forEach(player => {
  const parentLi = player.parentNode;
  const playBtn = parentLi.querySelector('.play-button');
  const pauseBtn = parentLi.querySelector('.pause-button');

  playBtn.addEventListener('click', () => {
    player.play();
  });

  pauseBtn.addEventListener('click', () => {
    player.pause();
  });
});

