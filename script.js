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