document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("myButton");
    const nameElement = document.getElementById("name");
    const ageElement = document.getElementById("age");
    const emailElement = document.getElementById("email");
    const addressElement = document.getElementById("address");
    const positionElement = document.getElementById("position");
    const skillsElement = document.getElementById("skills");
    const tableElement = document.getElementById("data-table");
    button.addEventListener("click", function() {
        const name = "Julia";
        const age = 31;
        const email = "stetsiura.iuliia@gmail.com";
        const country = "Best in the World \uD83C\uDDFA\uD83C\uDDE6";
        const city = "Kyiv";
        const street = "Chokolivskyi blvd.";
        const position = "Product Manager";
        const skills = "SDLC, UI/UX, Agile";
        const address = `${country}, ${city}, ${street}`;
        nameElement.textContent = name;
        ageElement.textContent = age;
        emailElement.innerHTML = '<a href="mailto:' + email + '">' + email + "</a>";
        addressElement.textContent = address;
        positionElement.textContent = position;
        skillsElement.textContent = skills;
        tableElement.style.display = "table";
    });
});

//# sourceMappingURL=index.44983732.js.map
