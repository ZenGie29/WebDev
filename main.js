function toggleMenu() {
    document.getElementById("drawer").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("show");
}

const videoCards = document.querySelectorAll(".video-card");
const overlay = document.getElementById("overlay");

videoCards.forEach(card => {
    const video = card.querySelector("video");

    // hover = play
    card.addEventListener("mouseenter", () => {
        video.play();
    });

    // leave = stop only if not fullscreen
    card.addEventListener("mouseleave", () => {
        if (!document.fullscreenElement) {
            video.pause();
            video.currentTime = 0;
        }
    });

    // click = REAL fullscreen
    card.addEventListener("click", () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Safari fallback
        }

        video.play();
    });
});

// exit fullscreen cleanup
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        videoCards.forEach(card => {
            const video = card.querySelector("video");
            video.pause();
            video.currentTime = 0;
        });

        document.getElementById("drawer").classList.remove("open");
        overlay.classList.remove("show");
    }
});

function openImage(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightbox.classList.add("show");
    lightboxImg.src = img.src;
}

function closeImage() {
    document.getElementById("lightbox").classList.remove("show");
}