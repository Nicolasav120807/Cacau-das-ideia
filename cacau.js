const botaoCard = document.querySelector(".produto-card");
const resultado = document.querySelector(".resultado")

function botaoproduto() {

    const nomeProduto = botaoCard.querySelector(".nomeProduto").textContent;
    const descricao = botaoCard.querySelector(".descricao").textContent;
    const valor = botaoCard.querySelector(".valor").textContent;

    resultado.innerHTML += `<p> ${nomeProduto}, ${descricao}, ${valor}</p>`
}

const botaoCard2 =  document.querySelector(".produto-card2");

function botaoproduto2() {

    const nomeProduto2 = botaoCard2.querySelector(".nomeProduto2").textContent;
    const descricao2 = botaoCard2.querySelector(".descricao2").textContent;
    const valor2 = botaoCard2.querySelector(".valor2").textContent;

    resultado.innerHTML += `<p>${nomeProduto2}, ${descricao2}, ${valor2}</p>`
}

const botaoCard3 =  document.querySelector(".produto-card3");

function botaoproduto3() {

    const nomeProduto3 = botaoCard3.querySelector(".nomeProduto3").textContent;
    const descricao3 = botaoCard3.querySelector(".descricao3").textContent;
    const valor3 = botaoCard3.querySelector(".valor3").textContent;

    resultado.innerHTML += `<p>${nomeProduto3}, ${descricao3}, ${valor3}</p>`
}



function deletar() {
    resultado.innerHTML = " "
}