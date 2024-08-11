function openWallpaper(element) {
    const overlay = document.getElementById('overlay');
    
    // Clear any existing content in the overlay
    overlay.innerHTML = '';

    // Create and append the wallpaper image to the overlay
    const overlayImage = document.createElement('img');
    overlayImage.src = element.querySelector('img').src;
    overlayImage.style.width = '100%';
    overlayImage.style.height = '100%';
    overlayImage.style.objectFit = 'cover';
    overlay.appendChild(overlayImage);

    // Add the back button
    const backButton = document.createElement('button');
    backButton.classList.add('overlay-button', 'back-btn');
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i>';
    backButton.onclick = closeWallpaper;
    overlay.appendChild(backButton);

    // Add the download button
    const downloadButton = document.createElement('button');
    downloadButton.classList.add('overlay-button', 'download-btn');
    downloadButton.innerHTML = '<i class="fas fa-download"></i>';
    overlay.appendChild(downloadButton);

    // Display the overlay and buttons immediately
    overlay.style.display = 'flex';

    // Request full screen
    if (overlay.requestFullscreen) {
        overlay.requestFullscreen();
    } else if (overlay.mozRequestFullScreen) { // Firefox
        overlay.mozRequestFullScreen();
    } else if (overlay.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        overlay.webkitRequestFullscreen();
    } else if (overlay.msRequestFullscreen) { // IE/Edge
        overlay.msRequestFullscreen();
    }
}

function closeWallpaper() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    // Exit full screen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}
