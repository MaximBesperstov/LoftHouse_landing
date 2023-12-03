function playVideo() {
    // Hide the play icon
    document.querySelector('.video__icon').style.display = 'none';

    // Show the video iframe
    const videoIframe = document.querySelector('.video__iframe');
    videoIframe.style.display = 'block';

    // Add event listeners to close video on mouseup
    document.addEventListener('mouseup', closeVideo);
}

function closeVideo(event) {
    const videoContainer = document.querySelector('.video');
    const iframe = document.querySelector('.video__iframe');
    const icon = document.querySelector('.video__icon');

    // Check if the click was inside the video container and not on the icon
    const clickedInsideVideo = videoContainer.contains(event.target) && event.target !== icon;

    // Check if the clicked element is outside the iframe and not the icon
    const clickedOutsideIframe = !iframe.contains(event.target) && event.target !== icon;

    // If clicked inside the video container, close the video
    if (clickedInsideVideo) {
        // Hide the video iframe
        iframe.style.display = 'none';

        // Show the play icon
        icon.style.display = 'block';

        // Remove the event listeners
        document.removeEventListener('mouseup', closeVideo);
        document.removeEventListener('mousemove', checkMouseMovement);
    }

    // If clicked outside the iframe, close the video
    if (clickedOutsideIframe) {
        // Hide the video iframe
        iframe.style.display = 'none';

        // Show the play icon
        icon.style.display = 'block';

        // Remove the click event listener
        document.removeEventListener('click', closeVideo);
    }
}