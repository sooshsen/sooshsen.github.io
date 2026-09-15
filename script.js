const toggle = document.getElementById("theme-toggle");

// load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    toggle.checked = true;
}



// toggle theme
toggle.addEventListener("change", function() {

    if (toggle.checked) {
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
    }
})



// welcome title in diff languages
const welcome = document.getElementById("welcome");

const greetings = [
    "Welcome",
    "Willkommen",
    "Bienvenue",
    "Bienvenido",
    "Benvenuto",
    "Welkom",
    "स्वागत है",
    "স্বাগতম",
    "ようこそ",
    "환영합니다",
    "欢迎"
];

let currentGreeting = 0;

setInterval(function() {
    welcome.style.opacity = 0;

    setTimeout(function() {
        currentGreeting++;

        if (currentGreeting >= greetings.length) {
            currentGreeting = 0;
        }

        welcome.textContent = greetings[currentGreeting];
        welcome.style.opacity = 1;
    }, 1250);

}, 5000);



// Know-me slider functionality
let information;

const slider = document.getElementById("info-slider");
const introduction = document.getElementById("introduction");

const skillsPanel = document.getElementById("skills-panel");
const researchPanel = document.getElementById("research-panel");

const skillsList = document.getElementById("skills-list");
const researchList = document.getElementById("research-list");

const cvPanel = document.getElementById('cv-panel');

fetch("data/details_2026.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not load JSON file");
        }
        return response.json();
    })
    .then(data => {
        information = data;
        updateIntroduction();
    })
    .catch(error => {
        console.error("Error loading information:", error);
    });


function updateIntroduction() {
    
    const level = slider.value;
    const info = information[level];

    introduction.innerHTML = "";

    info.content.forEach(paragraph => {
        const p = document.createElement("p");
        p.className = "personal-details";
        p.textContent = paragraph;
        introduction.appendChild(p);
    });

    // link to CV
    if (info.cv) {
        const p = document.createElement("p");
        p.className = "personal-details";

        const link = document.createElement("a");
        link.href = info.cv;
        link.textContent = "CV";
        link.target = "_blank";

        p.appendChild(link);
        introduction.appendChild(p);
    }

    // skills panel
    skillsList.innerHTML = "";

    if (info.skills) {
        info.skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        skillsPanel.classList.add("show");
    } else {
        skillsPanel.classList.remove("show");
    }

    // research panel
    researchList.innerHTML = "";

    if (info.research) {
        info.research.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            researchList.appendChild(li);
        });

        researchPanel.classList.add("show");
    } else {
        researchPanel.classList.remove("show");
    }

    // CV panel

    if (info.cv && Number(level) >= 11) {
        cvPanel.classList.add("show");
    } else {
        cvPanel.classList.remove("show");
    }
}

slider.addEventListener("input", updateIntroduction);




