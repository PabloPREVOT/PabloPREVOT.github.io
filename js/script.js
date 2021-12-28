// ********************************************************************************************
// Script h1 et slogan apparition
// ********************************************************************************************

// Delais fixer en css -> changement au début de la page
// opacity 0 -> 1
// left 150px -> 0

let h1_span = document.querySelectorAll("h1 span"); // Récupération de tout les span du h1

for(let $i = 0; $i < h1_span.length; $i++) {
    h1_span[$i].style.opacity = "1";
    h1_span[$i].style.left = "0";
}

let slogan_p = document.querySelector("h1+p"); // paragraphe/slogan sous le h1

slogan_p.style.opacity = "1";
slogan_p.style.right = "0";

// ********************************************************************************************
// Script barre de compétence
// ********************************************************************************************

// Lorsque on scroll assez dans la page pour arriver sur les compétences
// width 10% -> chamgement celon la barre

let barre_a = document.querySelector(".barre_pourcent.competence_a");
let barre_b = document.querySelector(".barre_pourcent.competence_b");
let barre_c = document.querySelector(".barre_pourcent.competence_c");
let barre_d = document.querySelector(".barre_pourcent.competence_d");
let barre_e = document.querySelector(".barre_pourcent.competence_e");
// let barre_f = document.querySelector(".barre_pourcent.competence_f");
// let barre_g = document.querySelector(".barre_pourcent.competence_g");
let barre_h = document.querySelector(".barre_pourcent.competence_h");

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 800){
        barre_a.style.width = "90%";
        barre_b.style.width = "85%";
        barre_c.style.width = "50%";
        barre_d.style.width = "65%";
        barre_e.style.width = "80%";
        // barre_f.style.width = "10%";
        // barre_g.style.width = "10%";
        barre_h.style.width = "50%";
    }
})

// ********************************************************************************************
// Media query pour changement ajout et supression de class bootstrap pour le portfolio
// ********************************************************************************************

// let div = document.querySelectorAll("div.card");
// let containerAllCard = document.querySelector("div.containerAllCard");

// if (window.matchMedia("(max-width: 992px)").matches) {
//     for(let i = 0; i < div.length; i++){
//         div[i].classList.remove("col");
//         div[i].classList.add("col-4");
//     }
//     containerAllCard.classList.add("flex-wrap");
// }