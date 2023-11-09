document.addEventListener('DOMContentLoaded', () => {
    // JS object representing spa services
    const spaServices = {
        massage: {
            description: "A relaxing massage therapy.",
            price: "$100"
        },
        facials: {
            description: "Revitalizing facials and skincare.",
            price: "$80"
        },
        bodyTreatments: {
            description: "Complete body treatments for wellness.",
            price: "$120"
        }
    };

    // Event listener for navigation color change on keypress
    document.addEventListener('keypress', (e) => {
        const navbar = document.getElementById('navbar');
        navbar.style.backgroundColor = '#C9A1D8'; // Example of a color change
    });

    // Event listeners for service items (mouseover)
    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = '#F0E6FF'; // Lighter shade for hover
            // Animation can be added here
        });
    });

    // Click event listener to play a sound
    const soundButton = document.getElementById('learnMore');
    const backgroundSound = document.getElementById('backgroundSound');
    soundButton.addEventListener('click', () => {
        if (!spaServices.soundPlayed) {
            backgroundSound.play();
            spaServices.soundPlayed = true;
            soundButton.textContent = 'Sound Playing...';
        }
    });
});

// A simple animation function to "float" the service items
function floatAnimation(element) {
    let position = 0;
    const interval = setInterval(() => {
        if (position === 10) {
            clearInterval(interval);
        } else {
            position++;
            element.style.transform = `translateY(${position}px)`;
        }
    }, 100);
}



//slider
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
