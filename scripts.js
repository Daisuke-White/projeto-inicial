var botao = document.getElementById("botao");
botao.addEventListener("click", alertar,false);

function alertar(event){
    alert("Você clicou no botão!!! " + event);

}

