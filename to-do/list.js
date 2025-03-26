const texto = document.getElementById("texto");
const salvar = document.getElementById("salvar");
const lista = document.getElementById("lista");
const textarea = document.getElementById("areaTexto");

salvar.onclick = function (e) {
    e.preventDefault();
    if (verifica() == 1) {
        let fielset = document.createElement("fieldset");
        let legend = document.createElement("legend");


        legend.innerHTML = texto.value;
        fielset.innerHTML = textarea.value;


        lista.appendChild(fielset);
        fielset.appendChild(legend);
        console.log(texto.value);
    }
}
function verifica() {
    if (texto.value == null) {
        return 0;
    }
    else if (textarea == null) {
        return 0;
    }
    else {
        return 1;
    }
}