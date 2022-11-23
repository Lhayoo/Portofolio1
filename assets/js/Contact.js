const scriptURL = "https://script.google.com/macros/s/AKfycbyN1niblD4grvAocWijUqHBioGLWU579zq_T1SCV0q8VuZBd1VT6W0CwBRZBBbXUCEg/exec";
const form = document.forms["ContactForm"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // ketika tombol submit diklik
    btnLoading.classList.toggle("d-none");
    // tampilkan tomvol loadting, hilangkan tombol kirim
    btnKirim.classList.toggle("d-none");
    fetch(scriptURL, {
            method: "POST",
            body: new FormData(form),
        })
        .then((response) => {
            // ttampilkan tombol kirim hilangkan tombol loading
            btnLoading.classList.toggle("d-none");
            btnKirim.classList.toggle("d-none");
            // tampilkan alert
            myAlert.classList.toggle("d-none");
            // riset  form
            form.riset();
            console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
});