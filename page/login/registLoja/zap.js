const form = document.getElementById("form");
const tempo = 600;
let timeId;




form.addEventListener('submit', (e) => {
    e.preventDefault();

    clearTimeout(timeId);

    timeId = setTimeout(() => {
        const nome = document.querySelector(".campo").value;
        const mensagem = document.getElementById("textArea").value;
        const tel = 5563999789035;

        if (!nome || !mensagem) return alert("Campos vazio!");

        const texto = `Olá, me chamo ${nome}, ${mensagem}`;
        const textoFormatado = encodeURIComponent(texto);

        const url = `https://wa.me/${tel}/?text=${textoFormatado}`;

        window.open(url, '_blank')
    }, tempo)
})