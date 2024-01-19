const openModalButton = document.querySelector("#project");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal-project");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};


[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
    });

function linkedIn() {
    window.location.href = "https://www.linkedin.com/in/joao-vitor-teixeira-desenvolvedor-front-end/"; 
function startHash() {
    window.location.href = "https://joaoteixeiraprog.github.io/jogo-da-velha/"; 
}

function startForm() {
    window.location.href = "https://joaoteixeiraprog.github.io/formulario/";
}

function startSite() {
    window.location.href = "#"; 
}


