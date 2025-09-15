// # Valider un formulaire
 
// Nous avons déjà vu comment récupérer des valeurs d'un champs de texte, comment ne pas laisser un champs vide mais comment
// réellement vérifier de manière concrète un formulaire à la soumission ?
 
// Ici il va falloir faire en sorte de créer un formulaire dans le html afin de permettre à l'utilisateur de faire ses informations (nom, âge et mot de passe).
 
// Vous aurez également besoin de 2 div pour gérer les messages d'erreurs. Les messages d'erreurs seront affichés en rouge, le message de formulaire envoyé
// avec succès sera quant à lui en vert.
 
// - Le nom ne doit être en aucun cas laissé vide
// - Il faut limiter l'âge de l'utilisateur (libre choix des limite)
// - Le format du mot de passe devra être vérifié également.
 
function getId(id){
    return document.getElementById(id);
}
 
let form = document.querySelector("#form")
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(e);
    let pseudo = getId("pseudo").value;
    let age = getId("age").value;
    let pswd = getId("pswd").value;
    let error = getId("error");
    if(parseInt(age) < 13 || parseInt(age) > 30){
        error.innerText = "Age pas bon mec";
        error.style.display = "block";
        return;
    }
   
    const re = /[A-Z]/; //(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).*
    if(!re.test(pswd)){
        error.innerText = "Il manque une maj bro";
        error.style.display = "block";
        return;
    }
    const re1 = /[a-z]/;
    if(!re1.test(pswd)){
        error.innerText = "Il manque une minuscule bro";
        error.style.display = "block";
        return;
    }
    const re2 = /[0-9]/;
    if(!re2.test(pswd)){
        error.innerText = "Il manque un chiffre bro";
        error.style.display = "block";
        return;
    }
    const re3 = /\W/;
    if(!re3.test(pswd)){
        error.innerText = "Il manque un charactère spécial bro";
        error.style.display = "block";
        return;
    }
    error.style.display = "none";
    getId("gg").style.display = "block";
})