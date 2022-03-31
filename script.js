function selecionarItem(clicked_id){
    checkItem(clicked_id)
    if (prato && bebida && sobremesa){
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
        prato = true;
    }
    if (myId == "coca" || myId == "sake"){
        initialState("coca");
        initialState("sake");
        bebida = true;
    }
    if (myId == "pudim" || myId == "anko"){
        initialState("pudim");
        initialState("anko");
        sobremesa = true;
    }
}
function initialState(myId){
    document.getElementById(myId).style.borderColor = "#FFFFFF";
    document.getElementById(myId+"Icon").style.display = "none";
}

let prato = false;
let bebida = false;
let sobremesa = false;