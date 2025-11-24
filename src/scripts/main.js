

const API_URL = "https://script.google.com/macros/s/AKfycbylpXmBprD5Gjxy8-0V24QOr5OeiG5DG0ctXLvgeTUswa9fsd4Gbil4-bhpi0vqlA1KQw/exec";

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const text = document.getElementById("text");
const inputs = form.querySelectorAll("input, textarea");
const submit = document.getElementById("submit");

form.addEventListener("submit" , async e => {
    e.preventDefault();

    const data = {
        nombre: name.value,
        correo: email.value,
        telefono: tel.value,
        comentario: text.value
    };

    const response = await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    Swal.fire({
        title: "Enviado con exito",
        icon: "success",
        draggable: false,
        theme: 'dark'
    });

    name.value = "";
    email.value = "";
    tel.value = "";
    text.value = "";

    return false;
})