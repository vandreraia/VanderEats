function selecionarItem(clicked_id) {
    checkItem(clicked_id)
    if (prato && bebida && sobremesa) {
        document.getElementById("finalizar").disabled = false;
        document.getElementById("finalizar").style.backgroundColor = "#32B72F";
        document.getElementById("finalizarText").textContent = "Fechar pedido";
    }
    document.getElementById(clicked_id).style.borderColor = "#32B72F";
    document.getElementById(clicked_id + "Icon").style.display = "initial";
}

function checkItem(myId) {

    if (myId == "sushi" || myId == "frango" || myId == "yakissoba") {
        initialState("sushi");
        initialState("frango");
        initialState("yakissoba");
        prato = myId;
    }
    if (myId == "coca" || myId == "sake") {
        initialState("coca");
        initialState("sake");
        bebida = myId;
    }
    if (myId == "pudim" || myId == "anko") {
        initialState("pudim");
        initialState("anko");
        sobremesa = myId;
    }
}
function initialState(myId) {
    document.getElementById(myId).style.borderColor = "#FFFFFF";
    document.getElementById(myId + "Icon").style.display = "none";
}

function calcPedido(prato, bebida, sobremesa) {
    let total = 0;

    if (prato == "frango")
        total += 14.90;
    if (prato == "sushi")
        total += 39.90;
    if (prato == "yakissoba")
        total += 29.90;

    if (bebida == "coca")
        total += 4.90;
    if (bebida == "sake")
        total += 14.90;

    if (sobremesa == "pudim")
        total += 7.90;
    if (sobremesa == "anko")
        total += 17.90;

    return total;
}
function sendPedido() {
    let nome;
    let endereco;

    let total = calcPedido(prato, bebida, sobremesa);

    nome = prompt("qual seu nome?");
    endereco = prompt("qual seu endereço?");
    window.open("https://wa.me/5581999999999?text=Olá, gostaria de fazer o pedido:\n- Prato: " + prato + "\n-Bebida: " + bebida + "\n-Sobremesa: " + sobremesa + "\nTotal: R$ " + total.toFixed(2) + "\n\nNome: " + nome + "\nEndereço: " + endereco);
}

function confirmarPedido() {
    document.getElementById("confirmarPedido").style.display = "initial";
    document.getElementById("prato").textContent = prato;

    let total = calcPedido(prato, bebida, sobremesa);

    if (prato == "frango")
        document.getElementById("pratoPreco").textContent = "14,90";
    if (prato == "sushi")
        document.getElementById("pratoPreco").textContent = "39,90";
    if (prato == "yakissoba")
        document.getElementById("pratoPreco").textContent = "29,90";

    document.getElementById("bebida").textContent = bebida;
    if (bebida == "coca")
        document.getElementById("bebidaPreco").textContent = "4,90";
    if (bebida == "sake")
        document.getElementById("bebidaPreco").textContent = "14,90";

    document.getElementById("sobremesa").textContent = sobremesa;
    if (sobremesa == "pudim")
        document.getElementById("sobremesaPreco").textContent = "7,90";
    if (sobremesa == "anko")
        document.getElementById("sobremesaPreco").textContent = "17,90";

    document.getElementById("total").textContent = total.toFixed(2);
}

function cancelar() {
    document.getElementById("confirmarPedido").style.display = "none";
}

let prato = false;
let bebida = false;
let sobremesa = false;

document.getElementById("finalizar").disabled = true;