const dropBtn = document.querySelector(".dropbtn");
const dropContent = document.querySelector(".dropdown-content");
const langLinks = document.querySelectorAll(".dropdown-content a");
const selectedLangText = document.querySelector(".selected-lang");

dropBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropContent.classList.toggle("show");
});

langLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        langLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");

        const newLang = this.getAttribute("data-lang");
        selectedLangText.textContent = newLang;

        dropContent.classList.remove("show");
    });
});

window.addEventListener("click", function () {
    dropContent.classList.remove("show");
});
