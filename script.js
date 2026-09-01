const illustrations = [
    1,
    2
];

let current = localStorage.getItem("illustration");
let next;

do {
    next = illustrations[Math.floor(Math.random() * illustrations.length)];
} while (next == current && illustrations.length > 1);

localStorage.setItem("illustration", next);

function updateIllustration() {
    const image = document.getElementById("corner-illustration");

    if (document.body.classList.contains("light-mode")) {
        image.src = `images/light/illustration${next}.png`;
    } else {
        image.src = `images/dark/illustration${next}.png`;
    }
}

updateIllustration();




const button = document.getElementById("theme-toggle");

button.addEventListener("click", function() {
document.body.classList.toggle("light-mode");

if (document.body.classList.contains("light-mode")) {
    button.textContent = "🌙";
} else {
    button.textContent = "☀️";
}

updateIllustration();

});

