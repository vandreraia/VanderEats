function selecionarItem(clicked_id){
    checkItem(clicked_id)
    if (prato && bebida && sobremesa){
        document.getElementById("finalizar").disabled = false;
        document.getElementById("finalizar").style.backgroundColor = "#32B72F";
        document.getElementById("text").textContent="Fechar pedido";
    }
    document.getElementById(clicked_id).style.borderColor = "#32B72F";
    document.getElementById(clicked_id+"Icon").style.display = "initial";
}

function checkItem(myId){

    if (myId == "sushi" || myId == "frango" || myId == "yakissoba"){
        initialState("sushi");
        initialState("frango");
        initialState("yakissoba");
        prato = myId;
    }
    if (myId == "coca" || myId == "sake"){
        initialState("coca");
        initialState("sake");
        bebida = myId;
    }
    if (myId == "pudim" || myId == "anko"){
        initialState("pudim");
        initialState("anko");
        sobremesa = myId;
    }
}
function initialState(myId){
    document.getElementById(myId).style.borderColor = "#FFFFFF";
    document.getElementById(myId+"Icon").style.display = "none";
}

function sendPedido(){
    let total = 0.0;
    let nome;
    let endereco;

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

    nome = prompt("qual seu nome?");
    endereco = prompt("qual seu endereço?");
    window.open("https://wa.me/5581999999999?text=Olá, gostaria de fazer o pedido:\n- Prato: " + prato + "\n-Bebida: " + bebida + "\n-Sobremesa: " + sobremesa + "\nTotal: R$ " + total.toFixed(2) + "\n\nNome: " + nome + "\nEndereço: " + endereco);
}

function confirmarPedido(){
    document.getElementById("confirmarPedido").style.display = "initial";
}

function cancelar(){
    document.getElementById("confirmarPedido").style.display = "none";
}

let prato = false;
let bebida = false;
let sobremesa = false;

document.getElementById("finalizar").disabled = true;