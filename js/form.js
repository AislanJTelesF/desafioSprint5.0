
//class contato

class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
    }
}

function Post(form) {
    const nome = form.elements.namedItem("nome").value;
    const sobrenome = form.elements.namedItem("sobrenome").value;
    const email = form.elements.namedItem("email").value;
    const cpf = form.elements.namedItem("cpf").value;
    const telefone = form.elements.namedItem("telefone").value;
    const tipoContato = form.elements.namedItem("contato").value;

    const novoContato = new Contato(nome, sobrenome, email, cpf, telefone, tipoContato);

    alert(`Obrigado sr(a) ${nome}! Os seus dados foram encaminhados com sucesso.`);

<<<<<<< HEAD
}

function acessarBotao() {
    const checkbox = document.getElementById("termosCondicoes");
    const button = document.getElementById("enviarButao");
    
    function verificarBotao() {
        button.disabled =!checkbox.checked;
    }

    verificarBotao();
=======
    form.reset();
>>>>>>> 11cac97d3c9eb9696587a5e182834438a85100ea
}