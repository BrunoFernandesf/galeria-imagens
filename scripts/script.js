/// <reference path="jquery-3.7.1.min.js"/>

$(function(){
    var imagens = [
        "./assets/img_01.jpg",
        "./assets/img_02.jpg",
        "./assets/img_03.jpg",
        "./assets/img_04.jpg",
        "./assets/img_05.jpg",
        "./assets/img_06.jpg"        
    ];

    var cont = 0;

    $(".carrossel-seta-anterior").on("click", function(){
        cont --;
        $(".carrossel-img").attr("src", imagens[cont]);
    })

    
    $(".carrossel-seta-posterior").on("click", function(){
        cont ++;
        $(".carrossel-img").attr("src", imagens[cont]);
    })
})