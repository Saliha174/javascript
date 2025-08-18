let a =window.prompt("Veuillez entrer un premiere valeur ( nombre) :");
let b =window.prompt("Veuillez entrer un deuxieme valeur ( nombre) :");


//  console.log(typeof a);  // ULTRA IMPORTANT car en prompt les données sont type string
 a = parseInt(a);
 b = parseInt(b);
 
document.write(`<h2>La somme de ${a} et de ${b} est égale à : ${a+b}</h2>`);
document.write(`<h2>La difference de ${a} et de ${b} est égale à : ${a-b}</h2>`);
document.write(`<h2>La produit de ${a} et de ${b} est égale à : ${a*b}</h2>`);
document.write(`<h2>La division  de ${a} et de ${b} est égale à : ${a/b}</h2>`);
document.write(`<h2>La somme des carrés de ${a} et de ${b} est égale à : ${a**2+b**2}</h2>`);
document.write(`<h2>Le carré de la somme de ${a} et de ${b} est égale à : ${(a+b)**2}</h2>`);


// ***********************************************************************************
// Correction


let number1 = parseFloat(prompt("Entrez un premier chiffre"));
// let number1 = Number(prompt("Entrez un premier chiffre")); Number prend en compte la convertion des nombres entiers et flottants (décimaux)
let number2 = prompt("Entrez un second chiffre");

let result = number1 + parseInt(number2);

document.write(`<h2>Le résultat du calcul est: ${result}</h2>`);


