// change icon
const btnNav = document.getElementById('btn-nav');
const icon = document.getElementById('icon');

btnNav.onclick = function () {
    if (icon.classList.contains('bi-justify')) {
        icon.classList.remove('bi-justify');
        icon.classList.add("bi-x-lg");
    } else {
        icon.classList.remove("bi-x-lg");
        icon.classList.add('bi-justify');
    }
}

// ngetik
const textElement = ["M. Nurul Alam"];
let count = 0;
let textIndex = 0;
let words = "";

(function ngetik() {
    if (count == textElement.length) {
        count = 0;
    }

    currentTxt = textElement[count];

    words = currentTxt.slice(0, ++textIndex);
    document.querySelector(".mengetik").textContent = words;

    setTimeout(ngetik, 300);
})();