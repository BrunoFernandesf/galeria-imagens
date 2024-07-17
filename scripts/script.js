var img = document.querySelector(".img")
var setaPosterior = document.querySelector(".carrossel-seta-posterior");
var setaAnterior = document.querySelector(".carrossel-seta-anterior");

setaPosterior.addEventListener("click", alterarImagemDireita);
setaAnterior.addEventListener("click", alterarImagemEsquerda)

var count = 1;

function alterarImagemEsquerda(){
    count--;

    console.log("Função acessada --");

    if(count >= 1 && count <= 6 ){
        img.src= `assets/img_0${count}.jpg`;
        
    }
    else{
        count = 6;
        img.src= `assets/img_0${count}.jpg`;
    }

}

function alterarImagemDireita(){
    count++;

    console.log("Função acessada ++");

    if(count <= 6 ){
        img.src= `assets/img_0${count}.jpg`;
    }
    else{
        count = 1;
        img.src= `assets/img_0${count}.jpg`;
    }

}


