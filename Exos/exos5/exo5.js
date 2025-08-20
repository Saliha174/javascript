let age = window.prompt ( "Veuillez saisir votre âge :");
age = parseInt(age);


if (age >=18){

    alert( " Bienvenue sur le site!")

} else{
    alert (" N'étant pas majeur , vous allez être rediriger vers un autre site plus adapté ;-)");
    window.location.href = "https://www.logicieleducatif.fr/";
}
function poug(){
    alert (" N'étant pas majeur , vous allez être rediriger vers un autre site plus adapté ;-)");
    window.location.href = "https://www.logicieleducatif.fr/";

}



// age>=18  ? alert ( "bienvenu!") : poug();
// let score = 60;
// let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : (score >= 70) ? 'C' : 'D';
// console.log(grade); // Affiche "B"

// nb = prompt("donne un chiffre")

// function cube(nb){
//     return nb**3

// }
// console.log(cube(nb));