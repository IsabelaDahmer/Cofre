let senhaSecreta = Math.floor(Math.random() * 50) + 1;
let tentativas = 0;
let limiteTentativas = 7;

function verificarSenha() {
    const campoNumero = document.getElementById("numero");
    const mensagem = document.getElementById("mensagem");
    const contador = document.getElementById("contador");
    const numero = Number(campoNumero.value);
    mensagem.classList.remove("alerta");

    if (campoNumero.value === "" || numero < 1 || numero > 50 || !Number.isInteger(numero)) {
        mensagem.textContent = "Digite um número entre 1 e 50";
        mensagem.classList.remove("alerta");
        return;
    }

    if (tentativas >= limiteTentativas) {
        return;
    }

    tentativas++;

    let restantes = limiteTentativas - tentativas;

    contador.textContent = "Tentativas restantes: " + restantes;

    if (numero === senhaSecreta) {
        mensagem.textContent = "Você acertou!";
        abrirCofre();
        return;
    }

    if (numero < senhaSecreta) {

        mensagem.textContent = "A senha é maior!";

    } else {

        mensagem.textContent = "A senha é menor!";

    }

    if (restantes === 2) {

        mensagem.textContent += " Restam apenas 2 tentativas!";
        mensagem.classList.add("alerta");

    }

    if (restantes === 0) {

        mensagem.textContent = "Suas tentativas acabaram! A senha era " + senhaSecreta + ".";
        document.getElementById("botaoTentar").disabled = true;
        campoNumero.disabled = true;

    }

    campoNumero.value = "";
}

function abrirCofre() {
    const imagem = document.getElementById("imagemCofre");
    imagem.src = "imagens/cofre-aberto.png";
    imagem.alt = "Cofre aberto";
    imagem.classList.add("cofre-aberto");

    document.getElementById("botaoTentar").disabled = true;
    document.getElementById("numero").disabled = true;
    document.getElementById("mensagemSucesso").textContent =
        "Parabéns! Você descobriu a senha em " + tentativas + " tentativas!";

    document.getElementById("overview").style.display = "flex";

}

function reiniciarJogo() {

    senhaSecreta = Math.floor(Math.random() * 50) + 1;

    tentativas = 0;

    document.getElementById("numero").value = "";
    document.getElementById("numero").disabled = false;

    document.getElementById("mensagem").textContent =
        "Aguardando...";

    document.getElementById("mensagem").classList.remove("alerta");

    document.getElementById("contador").textContent =
        "Tentativas restantes: 7";

    document.getElementById("imagemCofre").src =
        "imagens/cofre-fechado.png";

    document.getElementById("imagemCofre").alt = "Cofre fechado";

    document.getElementById("imagemCofre").classList.remove("cofre-aberto");

    document.getElementById("botaoTentar").disabled = false;

    document.getElementById("overview").style.display = "none";

}