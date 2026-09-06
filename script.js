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





const slider = document.getElementById("info-slider");
const infoLevel = document.getElementById("info-level");
const aboutMe = document.getElementById("introduction");


const information = {

    1: {
        level: "Friend",
        text: `
            <p class="personal-details">
                I love to express myself through painting and/or singing along to some good music. 
                Music and colors help me recharge and think in new ways. 
                During my free time, I watch clouds drift by like it is some serious business, 
                binge a good anime series, or procrastinate to plan my next travel adventure.
            </p>
            `

    },

    2: {
        level: "More than a friend",
        text: `
            <p class="personal-details">
                I'm fascinated by how the human brain works. 
                I love to express myself through painting and/or singing along to some good music. 
                Music and colors help me recharge and think in new ways.
            </p>
            `
    },

    3: {
        level: "Neutral",
        text: `
            <p class="personal-details">
                I like to read about the brain while sitting by the river.
            </p>
            `
    },

    4: {
        level: "Student",
        text: `
            <p class="personal-details">
                I completed my bachelors in Roorkee, before coming to 
                Magdeburg to study about the brain. Currently, I work with
                mice and perform behavioral experiments on them. Later, I 
                sacrifice them to collect electrical oscillations from their brain.
            </p>

            `
    },

    5: {
        level: "Professional",
        text: `
            <p class="personal-details">
                I am a neuroscientist from India, currently based in Germany.
                I completed my B.Tech in Biotechnology from IIT Roorkee in India
                before joining the MSc program in Integrative Neuroscience
                at OvGU, Magdeburg in Germany.
                My MSc thesis project focuses on characterizing network
                oscillation dynamics in a GABA-deficient genetic mouse model,
                mainly employing in vitro electrophysiology to obtain
                extracellular recordings.
                I also work on building a computational model of the
                hippocampal CA1 subregion to further understand the elements
                of the oscillatory drive in the same mouse model.
            </p>
        `
    }
};


function updateIntroduction() {
    
    const level = slider.value;

    // infoLevel.textContent = information[level].level;
    aboutMe.innerHTML = information[level].text;
}


slider.addEventListener("input", updateIntroduction);
updateIntroduction();



























