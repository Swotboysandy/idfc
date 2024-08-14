function openWallpaper(element) {
    const overlay = document.getElementById('overlay');
    const downloadButton = document.getElementById('downloadOverlayBtn');
    
    // Clear any existing content in the overlay
    overlay.innerHTML = '';

    // Get the image source
    const imgSrc = element.querySelector('img').src;

    // Create and append the wallpaper image to the overlay
    const overlayImage = document.createElement('img');
    overlayImage.src = imgSrc;
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

    // Add the download button/link
    downloadButton.href = imgSrc;  // Set the href to the image source
    downloadButton.download = 'wallpaper.jpg';  // Set the default filename
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

document.getElementById("pcButton").addEventListener("click", function() {
    // Remove active class from mobile button and add to pc button
    document.getElementById("mobileButton").classList.remove("active");
    this.classList.add("active");
    
    let images = document.querySelectorAll(".image");
    images.forEach(function(image) {
        if (image.classList.contains("landscape") && !image.classList.contains("mobile-only")) {
            image.style.display = "block";  // Show images for PC
        } else {
            image.style.display = "none";  // Hide all non-PC images
        }
    });
});

document.getElementById("mobileButton").addEventListener("click", function() {
    // Remove active class from pc button and add to mobile button
    document.getElementById("pcButton").classList.remove("active");
    this.classList.add("active");

    let images = document.querySelectorAll(".image");
    images.forEach(function(image) {
        if (image.classList.contains("mobile-only") || !image.classList.contains("remove-for-pc")) {
            image.style.display = "block";  // Show mobile-only images and those not removed for PC
        } else {
            image.style.display = "none";  // Hide PC-specific images
        }
    });
});
