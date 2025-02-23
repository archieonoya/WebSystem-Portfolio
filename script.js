var type = new Typed(".auto-type", {
strings: ["Web Developer.", "UI/UX Designer.", "Graphic Designer.", "Layout Artist."],
    typeSpeed: 100,   
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const toggleButton = document.getElementById('toggleButton');
const sideSection = document.getElementById('sideSection');

toggleButton.addEventListener('click', function() {
    sideSection.classList.toggle('visible');
});

const title = document.getElementById('title');
title.addEventListener('click', () => {
    title.classList.toggle('active');
});


function toggleAwards(elementId, buttonId) {
    var awards = document.getElementById(elementId);
    var button = document.getElementById(buttonId);

    if (awards.style.display === "none" || awards.style.display === "") {
        awards.style.display = "block";
        button.textContent = "See less...";
    } else {
        awards.style.display = "none";
    }
}