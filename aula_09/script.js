// Carrega Input da pagina
const input = window.document.getElementById("input");
// Carrega ul da pagina
const ul = window.document.getElementById("ul");


// função que adiciona novos itens a minha lista
function adicionar() {
    if (input.value !== "") {
        // Cria a li
        const li = window.document.createElement("li");
        // carrega o valor digitado no input  na li
        li.innerHTML = input.value;

        //Aplica a "li" dentro da "ul;"
        ul.appendChild(li);

        // limpa o input
        input.value = "";
    } else {
        alert("O campo está vazio!");
    }

}

