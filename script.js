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



let information;

const slider = document.getElementById("info-slider");
const introduction = document.getElementById("introduction");

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
}

slider.addEventListener("input", updateIntroduction);




