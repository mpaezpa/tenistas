//alert("hola mundo");

//console.log("hola mundo js en consola")
// dom document object model , es estructaramos mediante html
//let element= document.querySelector(".container");


//let element = document.querySelectorAll (".fa-star");
//console.log(element);

let closes  = document.querySelectorAll(".close");
let content  = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener('click', function(ev){
        ev.preventDefault();
        content.classList.remove("animaated");
        content.classList.remove("fadeInRight");
        content.classList.add("animated");
        content.classList.add("fadeOutRight");
        setTimeout(() => {
            location.href="../index.html";
        }, 500);
    });
})