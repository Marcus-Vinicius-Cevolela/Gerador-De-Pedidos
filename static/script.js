// Adicione este script ao arquivo script.js

document.getElementById('file-input').addEventListener('change', function () {
    const nomeArquivo = document.getElementById('nome-arquivo');
    nomeArquivo.textContent = this.files[0].name;
});

function displayFileName() {
    const input = document.querySelector('input[type="file"]');
    const paragraph = document.getElementById('file-selected');
    paragraph.innerText = `${input.files[0].name} selecionado.`;
}