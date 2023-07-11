var imgOne = document.querySelector("#card");

imgOne.addEventListener("mouseover", function() {
    var bloco01 = document.querySelector("#one");

    bloco01.classList.remove("oneimg");
});


var imgOne = document.querySelector("#card");
imgOne.addEventListener("mouseout", function(){
    var bloco01 = document.querySelector("#one");

    bloco01.classList.add("oneimg");
});

//  segunda img

var imgOne = document.querySelector("#card0");

imgOne.addEventListener("mouseover", function() {
    var bloco01 = document.querySelector("#two");

    bloco01.classList.remove("oneimg");
});


var imgOne = document.querySelector("#card0");
imgOne.addEventListener("mouseout", function(){
    var bloco01 = document.querySelector("#two");

    bloco01.classList.add("oneimg");
});
 