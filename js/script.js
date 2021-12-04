// ********************************************************************************************
// Script h1 et slogan apparition
// ********************************************************************************************

// Delais fixer en css -> changement au début de la page
// opacity 0 -> 1
// left 150px -> 0

$h1_span = document.querySelectorAll("h1 span"); // Récupération de tout les span du h1

for(let $i = 0; $i < $h1_span.length; $i++) {
    $h1_span[$i].style.opacity = "1";
    $h1_span[$i].style.left = "0";
}

$slogan_p = document.querySelector("h1+p"); // paragraphe/slogan sous le h1

$slogan_p.style.opacity = "1";
$slogan_p.style.left = "0";

// ********************************************************************************************
// Script barre de compétence
// ********************************************************************************************

// Lorsque on scroll assez dans la page pour arriver sur les compétences
// width 10% -> chamgement celon la barre

$barre_a = document.querySelector(".barre_pourcent.competence_a");
$barre_b = document.querySelector(".barre_pourcent.competence_b");
$barre_c = document.querySelector(".barre_pourcent.competence_c");
$barre_d = document.querySelector(".barre_pourcent.competence_d");
$barre_e = document.querySelector(".barre_pourcent.competence_e");
$barre_f = document.querySelector(".barre_pourcent.competence_f");
$barre_g = document.querySelector(".barre_pourcent.competence_g");
$barre_h = document.querySelector(".barre_pourcent.competence_h");

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 800){
        $barre_a.style.width = "90%";
        $barre_b.style.width = "85%";
        $barre_c.style.width = "50%";
        $barre_d.style.width = "65%";
        $barre_e.style.width = "80%";
        $barre_f.style.width = "10%";
        $barre_g.style.width = "10%";
        $barre_h.style.width = "50%";
    }
})

