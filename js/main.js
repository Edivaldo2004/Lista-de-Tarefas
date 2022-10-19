window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function salvar() {

    let textarea = document.getElementById("textarea").value;
    let date = document.getElementById("date").value;
    let lista = document.getElementById("lista").value;
    
    let imprimir_descri = document.getElementById("imprimir_descri").innerHTML = "Tarefa: " + textarea;

    let imprimir_data = document.getElementById("imprimir_data").innerHTML = "Data da Tarefa: " + date;

    for(let salvar of imprimir_descri) {
        let item = document.createElement("li");
        let texto = document.createElement(lista + ' - ');
        let botao = document.createElement("button");
        botao.innderText = 'dffdfd';

        item.appendChild(texto);
        item.appendChild(botao);
        item.appendChild(imprimir_descri);
    }
}
