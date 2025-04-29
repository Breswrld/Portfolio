 const music = document.getElementById("bg-music");
 const icon = document.getElementById("music-icon");

  
  music.muted = true;

  
  document.addEventListener("click", () => {
    music.play().catch(() => {
      console.warn("Autoplay blocked.");
    });
  });

  function toggleMusic() {
    if (music.muted || music.paused) {
      music.muted = false;
      music.play();
      icon.classList.remove("fa-volume-xmark");
      icon.classList.add("fa-volume-up");
    } else {
      music.muted = true;
      icon.classList.remove("fa-volume-up");
      icon.classList.add("fa-volume-xmark");
    }
  }
 function hamburger() {
    const links = document.getElementById("mobile-links");
    const header = document.querySelector(".hero-nav header"); // Adjusted selector
    const mobileNav = document.querySelector(".mobile-nav");

    // Only apply on screens where mobile nav is visible
    if (getComputedStyle(mobileNav).display === "block") {
        const isOpen = links.style.display === "block";

        // Toggle nav links
        links.style.display = isOpen ? "none" : "block";

        // Toggle header visibility
        header.style.display = isOpen ? "block" : "none";
    }
}

 document.addEventListener('DOMContentLoaded', function() {
        const gallery = document.querySelector('.image-gallery');
        let zoomedInContainer = null; // To hold the zoomed image and exit button

        gallery.addEventListener('click', function(event) {
            const target = event.target;

            if (target.tagName === 'IMG') {
                if (zoomedInContainer) {
                    // If already zoomed, remove the zoomed view
                    document.body.classList.remove('zoomed-in-active');
                    zoomedInContainer.remove();
                    zoomedInContainer = null;
                } else {
                    // Zoom in
                    document.body.classList.add('zoomed-in-active');
                    zoomedInContainer = document.createElement('div');
                    zoomedInContainer.classList.add('zoomed-in-container');

                    const zoomedImage = document.createElement('img');
                    zoomedImage.classList.add('zoomed-in-image');
                    zoomedImage.src = target.src;
                    zoomedImage.alt = target.alt;

                    const exitButton = document.createElement('button');
                    exitButton.innerText = 'X';
                    exitButton.classList.add('exit-button');

                    exitButton.addEventListener('click', function() {
                        document.body.classList.remove('zoomed-in-active');
                        zoomedInContainer.remove();
                        zoomedInContainer = null;
                    });

                    zoomedInContainer.appendChild(zoomedImage);
                    zoomedInContainer.appendChild(exitButton);
                    document.body.appendChild(zoomedInContainer);
                }
            }
        });
    });