document.addEventListener("DOMContentLoaded", function() {
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        // Randomize position (left side or right side)
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Between 2-5 seconds

        document.body.appendChild(heart);

        // Remove hearts after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Generate multiple hearts every 300ms
    setInterval(createHeart, 300);
});


document.addEventListener("DOMContentLoaded", function() {
    // Love messages array
    const loveMessages = [
        "You are my heart and soul ❤️",
        "I Love You 💕",
        "Happy Valentine's Day, My Princess 👑",
        "My love for you grows every day 🌹",
        "You make my world brighter ☀️",
        "I am so Blessed to have you 💖",
        "With you, every moment is special 💞",
        "You are my forever and always 🥰",
        "Every heartbeat of mine whispers your name 💓",
        "You are my sweetest dream come true 💘"
    ];

    const modalBody = document.querySelector(".modal-body");

    // Show a random love message in the modal
    $("#exampleModalLong").on("show.bs.modal", function() {
        const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        modalBody.textContent = randomMessage;
        launchHeartConfetti(); // Trigger heart confetti when modal opens
    });



    // Function to launch heart-shaped confetti
    function launchHeartConfetti() {
        const duration = 3 * 1000; // Confetti lasts for 3 seconds
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff4d6d', '#ff99ac']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff4d6d', '#ff99ac']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Select elements
    const loveSong = document.getElementById("loveSong");
    const loveButton = document.querySelector('[data-target="#exampleModalLong"]');

    // Ensure audio can play only after user interaction
    function playMusic() {
        if (loveSong.paused) {
            loveSong.play().catch(error => console.log("Audio play blocked:", error));
        }
    }

    // Function to launch heart confetti
    function launchHeartConfetti() {
        const duration = 3 * 1000; // Confetti lasts for 3 seconds
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff4d6d', '#ff99ac']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff4d6d', '#ff99ac']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }

    // Add event listener to the button
    loveButton.addEventListener("click", function() {
        playMusic(); // Play romantic music
        launchHeartConfetti(); // Trigger confetti
    });

    // Allow user to start music manually if needed
    document.body.addEventListener("click", function() {
        playMusic();
    }, { once: true }); // Ensures audio starts only once after user clicks anywhere
});


document.addEventListener("DOMContentLoaded", function() {
    const wrapOverlay = document.querySelector(".wrap-overlay");
    const mainContent = document.querySelector(".main-content");
    const ribbon = document.querySelector(".ribbon");

    ribbon.addEventListener("click", function() {
        wrapOverlay.classList.add("open");

        setTimeout(() => {
            mainContent.classList.add("show");
        }, 1000);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const aladdin = document.querySelector(".aladdin-container");

    function launchConfetti() {
        const rect = aladdin.getBoundingClientRect();
        confetti({
            particleCount: 10, // Adjust amount
            spread: 50,
            startVelocity: 30,
            origin: {
                x: (rect.left + 50) / window.innerWidth, // Adjust X position
                y: (rect.top + 80) / window.innerHeight // Adjust Y position
            },
            colors: ["#ff0", "#ff4500", "#ff1493", "#00ced1"],
            scalar: 0.8, // Scale of confetti pieces
        });
    }

    // Generate confetti continuously from Aladdin's tail
    setInterval(launchConfetti, 500);
});