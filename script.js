// GSAP animation for heading
gsap.from(".site-title", { opacity: 0, y: -50, duration: 1.5, ease: "bounce" });
gsap.from(".hero-quote", { opacity: 0, y: 30, delay: 0.5, duration: 1 });
gsap.from(".glow-btn", { opacity: 0, y: 30, delay: 1, duration: 1 });

// Typewriter effect
const text = "Let your dreams take flight above the clouds...";
let index = 0;
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();


// Lucide Icons init
lucide.createIcons();


VANTA.CLOUDS({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    skyColor: 0x1a1a2e,           // dark navy background
    cloudColor: 0x4b4b4b,         // darker clouds
    cloudShadowColor: 0x2f2f2f,   // deep gray cloud shadows
    sunColor: 0xffa500,           // optional, warm sunset orange
    speed: 0.8
});


// Initialize Birds on birds-bg
VANTA.BIRDS({
    el: "#birds-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    backgroundAlpha: 0.0, // Fully transparent background
    birdSize: 0.50,
    wingSpan: 20.00,
    speedLimit: 3.00,
    separation: 30.00,
    alignment: 20.00,
    cohesion: 20.00
});

