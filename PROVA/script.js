function enviar() {
    const nome_capturado_input = window.document.getElementById("nome");
    const email_capturado_input = window.document.getElementById("email");
    const mensagem_confirmacao = window.document.getElementById("mensagem_confirmacao");

    if (nome_capturado_input.value !== "" && email_capturado_input.value !== "") {
        mensagem_confirmacao.innerHTML = `Muito obrigado(a), senhor(a) ${nome_capturado_input.value}. 
        Acabamos de enviar um e-mail para: ${email_capturado_input.value}.`;
    } else {
        alert("É obrigatorio preencher os campos!")
    }


}